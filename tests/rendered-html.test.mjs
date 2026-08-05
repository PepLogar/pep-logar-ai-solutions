import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Pep Logar AI Solutions concept", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="es">/i);
  assert.match(html, /<title>Pep Logar AI Solutions \| Software e IA que hacen avanzar el trabajo<\/title>/i);
  assert.match(html, /Menos tareas\./);
  assert.match(html, /Más empresa\./);
  assert.match(html, /Agentes operativos/);
  assert.match(html, /Conexiones MCP/);
  assert.match(html, /Humano en el circuito/);
  assert.match(html, /mailto:info@aisolutions\.peplogar\.com/);
  assert.match(html, /aisolutions\.peplogar\.com/);
  assert.match(html, /Todo en Tinta Pep Logar S\.L\./);
  assert.match(html, /B86378981/);
  assert.match(html, /91 141 96 34/);
  assert.match(html, /<form class="contact-form"/);
  assert.match(html, /<input(?=[^>]*name="email")(?=[^>]*type="email")[^>]*>/);
  assert.match(html, /<select(?=[^>]*name="interest")[^>]*>/);
  assert.match(html, /<input(?=[^>]*name="consent")(?=[^>]*type="checkbox")[^>]*>/);
  assert.match(html, /Preparar consulta/);
  assert.match(html, /Esta web no almacena tus datos/);
  assert.match(html, /property="og:image" content="https:\/\/aisolutions\.peplogar\.com\/og\.png"/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("ships the final concept without starter artifacts", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /PEP LOGAR/);
  assert.match(page, /id="capacidades"/);
  assert.match(page, /id="metodo"/);
  assert.match(page, /id="contacto"/);
  assert.match(layout, /images: \[\{ url: "\/og\.png"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await access(new URL("../public/og.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
