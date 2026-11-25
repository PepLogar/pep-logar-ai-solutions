import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { cp, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { pathToFileURL } from "node:url";

test("static export preserves the published release through failures and concurrent runs", async (t) => {
  const root = await mkdtemp(join(tmpdir(), "peplogar-export-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const path of ["scripts", "dist/client", "dist/server", "production"]) {
    await mkdir(join(root, path), { recursive: true });
  }
  const script = join(root, "scripts", "export-static.mjs");
  const production = join(root, "production");
  const workspace = join(root, ".production-export");
  await cp(new URL("../scripts/export-static.mjs", import.meta.url), script);
  await writeFile(join(root, "package.json"), JSON.stringify({ type: "module" }));
  await writeFile(join(production, "previous.txt"), "published");
  await writeFile(join(root, "dist/client/asset.txt"), "new asset");
  await writeFile(join(root, "dist/server/index.js"), `
    import assert from "node:assert/strict";
    import { spawnSync } from "node:child_process";
    import { readFile } from "node:fs/promises";
    export default {
      async fetch(request) {
        const pathname = new URL(request.url).pathname;
        if (pathname === "/productos" && process.env.CHECK_CONCURRENT === "yes") {
          assert.equal(await readFile("production/previous.txt", "utf8"), "published");
          const second = spawnSync(process.execPath, [process.argv[1]], {
            encoding: "utf8", env: { ...process.env, CHECK_CONCURRENT: "" },
          });
          assert.notEqual(second.status, 0);
          assert.match(second.stderr, /Export workspace already exists/);
        }
        if (pathname === process.env.FAIL_ROUTE) return new Response(null, { status: 503 });
        const html = "<!DOCTYPE html><html><body><main>" + pathname + "</main></body></html>";
        return new Response(pathname === process.env.EMPTY_ROUTE ? "" : html, {
          headers: { "content-type": "text/html; charset=utf-8" },
        });
      },
    };
  `);

  // Inject the failure precisely between the two filesystem renames, also on Windows.
  const failPromotion = join(root, "fail-promotion.mjs");
  await writeFile(failPromotion, `
    import { promises } from "node:fs";
    import { syncBuiltinESMExports } from "node:module";
    import { basename } from "node:path";
    const rename = promises.rename;
    promises.rename = (source, target) => basename(source) === "next"
      ? Promise.reject(new Error("simulated promotion failure")) : rename(source, target);
    syncBuiltinESMExports();
  `);
  function run(args = [], env = {}) {
    return spawnSync(process.execPath, [...args, script], {
      cwd: root, encoding: "utf8", env: { ...process.env, ...env },
    });
  }

  const failedRender = run([], { FAIL_ROUTE: "/productos" });
  assert.notEqual(failedRender.status, 0);
  assert.match(failedRender.stderr, /HTTP 503/);
  assert.deepEqual(await readdir(production), ["previous.txt"]);
  await assert.rejects(readdir(workspace), { code: "ENOENT" });

  const emptyRender = run([], { EMPTY_ROUTE: "/productos/pensiones-lab" });
  assert.notEqual(emptyRender.status, 0);
  assert.match(emptyRender.stderr, /expected a complete HTML document/);
  assert.deepEqual(await readdir(production), ["previous.txt"]);
  await assert.rejects(readdir(workspace), { code: "ENOENT" });

  const failedPromotion = run(["--import", pathToFileURL(failPromotion).href]);
  assert.notEqual(failedPromotion.status, 0);
  assert.match(failedPromotion.stderr, /simulated promotion failure/);
  assert.deepEqual(await readdir(production), ["previous.txt"]);
  await assert.rejects(readdir(workspace), { code: "ENOENT" });

  const complete = run([], { CHECK_CONCURRENT: "yes" });
  assert.equal(complete.status, 0, complete.stderr);
  assert.equal(await readFile(join(production, "asset.txt"), "utf8"), "new asset");
  const lastPage = await readFile(join(production, "de/produkte/frontend-product-editor-ai/index.html"), "utf8");
  assert.ok(lastPage.includes("<main>/de/produkte/frontend-product-editor-ai</main>"));
  await assert.rejects(readFile(join(production, "previous.txt")), { code: "ENOENT" });
  await assert.rejects(readdir(workspace), { code: "ENOENT" });
});
