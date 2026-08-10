import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(pathname, "http://localhost/"), { headers: { accept: "text/html" } }),
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

test("server-renders the product catalog and product landing page", async () => {
  const [catalogResponse, productResponse, privacyResponse] = await Promise.all([
    render("/productos"),
    render("/productos/frontend-product-editor-ai"),
    render("/privacidad/frontend-product-editor-ai"),
  ]);

  assert.equal(catalogResponse.status, 200);
  assert.equal(productResponse.status, 200);
  assert.equal(privacyResponse.status, 200);

  const [catalog, product, privacy] = await Promise.all([catalogResponse.text(), productResponse.text(), privacyResponse.text()]);
  assert.match(catalog, /Software que resuelve/);
  assert.match(catalog, /Frontend Product Editor \+ AI/);
  assert.match(catalog, /href="\/productos\/frontend-product-editor-ai"/);

  assert.match(product, /Gestiona tu catálogo/);
  assert.match(product, /PrestaShop 1\.6/);
  assert.match(product, /Sin módulos/);
  assert.match(product, /demo-fpe-ai\.mp4/);
  assert.match(product, /og-product\.png/);
  assert.match(product, /Solicitar acceso/);
  assert.match(product, /Preguntas frecuentes/);
  assert.match(product, /6 idiomas/);
  assert.match(product, /href="https:\/\/aisolutions\.peplogar\.com\/privacidad\/frontend-product-editor-ai\/"/);

  assert.match(privacy, /Privacidad del producto/);
  assert.match(privacy, /B86378981/);
  assert.match(privacy, /proveedores remotos de IA deben utilizar HTTPS/i);
  assert.match(privacy, /borrar todos los datos/i);
  assert.match(privacy, /Compromiso de uso limitado/i);
  assert.match(privacy, /no se utilizan para publicidad/i);
  assert.match(privacy, /prueba completa de 14 días/i);
  assert.match(privacy, /UUID aleatorio del perfil/i);
  assert.match(privacy, /Cloudflare/i);
  assert.match(privacy, /Lemon Squeezy/i);
  assert.match(privacy, /no solicita, recibe ni almacena datos de tarjeta/i);
  assert.match(privacy, /Google no procesa el pago ni es el vendedor/i);
});

test("renders accessible desktop and mobile navigation on every public route", async () => {
  const routes = [
    "/",
    "/productos",
    "/productos/frontend-product-editor-ai",
    "/privacidad/frontend-product-editor-ai",
  ];
  const destinations = ["/#capacidades", "/productos/", "/#metodo", "/#contacto"];
  const pages = await Promise.all(routes.map(async route => (await render(route)).text()));

  pages.forEach(html => {
    assert.match(html, /<nav class="nav shell" aria-label="Navegación principal">/);
    assert.match(html, /<details class="mobile-menu">/);
    assert.match(html, /<summary>/);
    destinations.forEach(destination => {
      assert.ok(html.split(`href="${destination}"`).length >= 3, `missing desktop or mobile link to ${destination}`);
    });
  });
});

test("ships the final concept without starter artifacts", async () => {
  const [page, siteChrome, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/SiteChrome.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(siteChrome, /PEP LOGAR/);
  assert.match(page, /id="capacidades"/);
  assert.match(page, /id="metodo"/);
  assert.match(page, /id="contacto"/);
  assert.match(layout, /images: \[\{ url: "\/og\.png"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await access(new URL("../public/og.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});

test("exports every public commercial route", async () => {
  const publicFiles = [
    "../production/index.html",
    "../production/productos/index.html",
    "../production/productos/frontend-product-editor-ai/index.html",
    "../production/privacidad/frontend-product-editor-ai/index.html",
  ];
  const renderedPages = await Promise.all(publicFiles.map(file => readFile(new URL(file, import.meta.url), "utf8")));
  assert.match(renderedPages[2], /Frontend Product Editor \+ AI/);
  assert.match(renderedPages[3], /Privacidad del producto/);
  renderedPages.forEach(html => assert.doesNotMatch(html, /https?:\/\/(?:localhost|127\.0\.0\.1)/i));
  const productMedia = Array.from(renderedPages[2].matchAll(/(?:src|href)="(\/productos\/fpe-ai\/[^"?#]+)(?:[?#][^"]*)?"/g), match => match[1]);
  assert.ok(productMedia.length >= 6);
  await Promise.all(Array.from(new Set(productMedia)).map(mediaPath => access(new URL(`../public${mediaPath}`, import.meta.url))));
});
