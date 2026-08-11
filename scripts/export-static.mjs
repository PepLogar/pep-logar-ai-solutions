import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const clientDirectory = resolve(root, "dist", "client");
const serverEntry = resolve(root, "dist", "server", "index.js");
const productionDirectory = resolve(root, "production");
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

await rm(productionDirectory, { recursive: true, force: true });
await mkdir(productionDirectory, { recursive: true });
await cp(clientDirectory, productionDirectory, { recursive: true });

const workerUrl = pathToFileURL(serverEntry);
workerUrl.searchParams.set("export", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const env = {
  ASSETS: {
    async fetch(request) {
      const pathname = new URL(request.url).pathname.replace(/^\/+/, "");
      try {
        const body = await readFile(resolve(clientDirectory, pathname));
        return new Response(body);
      } catch {
        return new Response("Not found", { status: 404 });
      }
    },
  },
};

for (const [pathname, outputPath] of routes) {
  const response = await worker.fetch(
    new Request(new URL(pathname, siteUrl), { headers: { accept: "text/html" } }),
    env,
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) {
    throw new Error(`Static export failed for ${pathname} with HTTP ${response.status}`);
  }

  const destination = resolve(productionDirectory, outputPath);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, await response.text());
}

console.log(`Production export written to ${productionDirectory}`);
