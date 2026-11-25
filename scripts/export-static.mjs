import { cp, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const clientDirectory = resolve(root, "dist", "client");
const serverEntry = resolve(root, "dist", "server", "index.js");
const productionDirectory = resolve(root, "production");
const exportDirectory = resolve(root, ".production-export");
const candidateDirectory = resolve(exportDirectory, "next");
const previousDirectory = resolve(exportDirectory, "previous");
const siteUrl = "https://aisolutions.peplogar.com/";
const routes = [
  ["/", "index.html"],
  ["/productos", "productos/index.html"],
  ["/productos/frontend-product-editor-ai", "productos/frontend-product-editor-ai/index.html"],
  ["/privacidad/frontend-product-editor-ai", "privacidad/frontend-product-editor-ai/index.html"],
  ["/condiciones/frontend-product-editor-ai", "condiciones/frontend-product-editor-ai/index.html"],
  ["/en/products/frontend-product-editor-ai", "en/products/frontend-product-editor-ai/index.html"],
  ["/pt/produtos/frontend-product-editor-ai", "pt/produtos/frontend-product-editor-ai/index.html"],
  ["/fr/produits/frontend-product-editor-ai", "fr/produits/frontend-product-editor-ai/index.html"],
  ["/it/prodotti/frontend-product-editor-ai", "it/prodotti/frontend-product-editor-ai/index.html"],
  ["/de/produkte/frontend-product-editor-ai", "de/produkte/frontend-product-editor-ai/index.html"],
];

const env = {
  ASSETS: {
    async fetch(request) {
      const pathname = new URL(request.url).pathname.replace(/^\/+/, "");
      try {
        const body = await readFile(resolve(candidateDirectory, pathname));
        return new Response(body);
      } catch {
        return new Response("Not found", { status: 404 });
      }
    },
  },
};

async function renderCandidate() {
  await cp(clientDirectory, candidateDirectory, { recursive: true });
  const workerUrl = pathToFileURL(serverEntry);
  workerUrl.searchParams.set("export", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  for (const [pathname, outputPath] of routes) {
    const response = await worker.fetch(
      new Request(new URL(pathname, siteUrl), { headers: { accept: "text/html" } }),
      env,
      { waitUntil() {}, passThroughOnException() {} },
    );
    if (!response.ok) {
      throw new Error(`Static export failed for ${pathname} with HTTP ${response.status}`);
    }

    const html = await response.text();
    const contentType = response.headers.get("content-type") ?? "";
    if (!/^text\/html\s*(?:;|$)/i.test(contentType) ||
        !/^\s*<!doctype html>\s*<html\b/i.test(html) ||
        !/<main\b/i.test(html) || !/<\/body>\s*<\/html>\s*$/i.test(html)) {
      throw new Error(`Static export failed for ${pathname}: expected a complete HTML document`);
    }
    const destination = resolve(candidateDirectory, outputPath);
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, html);
  }
}

try {
  await mkdir(exportDirectory);
} catch (error) {
  if (error.code !== "EEXIST") throw error;
  throw new Error(
    `Export workspace already exists: ${exportDirectory}. If another export is running, let it finish. ` +
    `After an interrupted export, restore "previous" to "production" if production is missing, ` +
    `then remove the workspace before retrying.`,
    { cause: error },
  );
}

let restorePrevious = false;
try {
  await renderCandidate();
  try {
    await rename(productionDirectory, previousDirectory);
    restorePrevious = true;
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  await rename(candidateDirectory, productionDirectory);
  restorePrevious = false;
} catch (publishError) {
  if (restorePrevious) {
    try {
      await rename(previousDirectory, productionDirectory);
      restorePrevious = false;
    } catch (rollbackError) {
      throw new AggregateError([publishError, rollbackError],
        `Could not restore production. The previous release is in ${previousDirectory}`);
    }
  }
  throw publishError;
} finally {
  if (!restorePrevious) await rm(exportDirectory, { recursive: true, force: true });
}

console.log(`Production export written to ${productionDirectory}`);
