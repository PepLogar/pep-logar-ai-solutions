import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const clientDirectory = resolve(root, "dist", "client");
const serverEntry = resolve(root, "dist", "server", "index.js");
const productionDirectory = resolve(root, "production");
const siteUrl = "https://aisolutions.peplogar.com/";

await rm(productionDirectory, { recursive: true, force: true });
await mkdir(productionDirectory, { recursive: true });
await cp(clientDirectory, productionDirectory, { recursive: true });

const workerUrl = pathToFileURL(serverEntry);
workerUrl.searchParams.set("export", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request(siteUrl, { headers: { accept: "text/html" } }),
  {
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
  },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Static export failed with HTTP ${response.status}`);
}

const html = await response.text();
await writeFile(resolve(productionDirectory, "index.html"), html);

console.log(`Production export written to ${productionDirectory}`);
