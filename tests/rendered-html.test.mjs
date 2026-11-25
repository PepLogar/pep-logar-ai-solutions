import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

function assertContactFallback(html) {
  const [form] = html.match(/<form\b[^>]*class="contact-form"[^>]*>[\s\S]*?<\/form>/i) ?? [];
  assert.ok(form, "the contact form is available before JavaScript loads");
  const noScriptBlocks = form.match(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi) ?? [];
  const fallback = noScriptBlocks.join("");
  assert.match(fallback, /sin guardar los datos ni enviar el correo/i);
  assert.match(fallback, /<button\b(?=[^>]*formaction="https:\/\/aisolutions\.peplogar\.com\/contacto\/borrador\.php")(?=[^>]*formmethod="post")(?=[^>]*formenctype="application\/x-www-form-urlencoded")[^>]*>/i);
  const withScripts = form.replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, "");
  assert.match(withScripts, /<form\b[^>]*\baction="mailto:info@aisolutions\.peplogar\.com"/i);
  assert.doesNotMatch(withScripts, /borrador\.php/i);
}

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
  assert.match(html, /<title>Software a medida y agentes de IA \| Pep Logar AI Solutions<\/title>/i);
  assert.match(html, /Menos tareas\./);
  assert.match(html, /Más empresa\./);
  const hero = html.match(/<section\b[^>]*\bid="inicio"[^>]*>[\s\S]*?<\/section>/i)?.[0] ?? "";
  assert.match(hero, /software a medida/i);
  assert.match(hero, /tradicional/i);
  assert.match(hero, /agentes de (?:inteligencia artificial|IA)/i);
  assert.match(hero, /href="\/?#contacto"[^>]*>\s*Cuéntanos qué tarea repites/i);
  assert.match(hero, /href="\/productos\/"[^>]*>\s*Ver nuestros productos/i);
  assert.match(html, /Quién da el visto bueno/);
  assert.match(html, /mailto:info@aisolutions\.peplogar\.com/);
  assert.match(html, /aisolutions\.peplogar\.com/);
  assert.match(html, /Todo en Tinta Pep Logar S\.L\./);
  assert.match(html, /B86378981/);
  assert.match(html, /91 141 96 34/);
  assertContactFallback(html);
  assert.match(html, /<input(?=[^>]*name="email")(?=[^>]*type="email")[^>]*>/);
  assert.match(html, /<select(?=[^>]*name="interest")[^>]*>/);
  assert.match(html, /<input(?=[^>]*name="consent")(?=[^>]*type="checkbox")[^>]*>/);
  assert.match(html, /Abrir borrador en mi correo/);
  const formIntro = html.match(/<form\b[^>]*class="contact-form"[^>]*>([\s\S]*?)<input\b/i)?.[1] ?? "";
  assert.match(formIntro, /borrador/i);
  assert.match(html, /Escribir por correo/i);
  assert.match(html, /property="og:image" content="https:\/\/aisolutions\.peplogar\.com\/og\.png"/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("server-renders the product catalog, product and commercial policies", async () => {
  const [catalogResponse, productResponse, privacyResponse, termsResponse] = await Promise.all([
    render("/productos"),
    render("/productos/frontend-product-editor-ai"),
    render("/privacidad/frontend-product-editor-ai"),
    render("/condiciones/frontend-product-editor-ai"),
  ]);

  assert.equal(catalogResponse.status, 200);
  assert.equal(productResponse.status, 200);
  assert.equal(privacyResponse.status, 200);
  assert.equal(termsResponse.status, 200);

  const [catalog, product, privacy, terms] = await Promise.all([catalogResponse.text(), productResponse.text(), privacyResponse.text(), termsResponse.text()]);
  assert.match(catalog, /<h1\b[^>]*>[^<]*(?:productos|software)[^<]*<\/h1>/i);
  assert.match(catalog, /Frontend Product Editor \+ AI/);
  assert.match(catalog, /href="\/productos\/frontend-product-editor-ai\/?"/);
  assert.match(catalog, /href="\/productos\/frontend-product-editor-ai\/#demostracion"/);
  assert.match(catalog, /href="https:\/\/demarquia\.org\/pensioneslab\/ayuda\.html#pasos"/);
  const cards = catalog.match(/<article\b[^>]*>[\s\S]*?<\/article>/gi) ?? [];
  const pensionsCard = cards.find(card => /<a\b[^>]*href="\/productos\/pensiones-lab\/"/.test(card));
  assert.ok(pensionsCard, "the catalog card links to the Pensiones Lab product page");
  assert.match(pensionsCard, /Pensiones Lab/i);
  assert.match(pensionsCard, /\b(?:gratis|gratuit[ao])\b/i);
  assert.match(pensionsCard, /<img\b[^>]*src="\/productos\/pensiones-lab\/detalle\.png"/);

  assert.match(product, /Corrige el producto/);
  assert.match(product, /<h1>[\s\S]*product-brand[\s\S]*Pep Logar[\s\S]*Frontend Product[\s\S]*Editor \+ AI[\s\S]*<\/h1>/);
  assert.match(product, /PrestaShop 1\.6/);
  assert.match(product, /Sin módulos/);
  assert.match(product, /demo-fpe-ai\.mp4/);
  assert.match(product, /og-product\.png/);
  assert.match(product, /Instalar y probar 14 días/);
  assert.match(product, /Modo gratuito permanente/);
  assert.match(product, /¿Puedo comprarlo si no tiene stock\?/);
  assert.match(product, /Comparación completa/);
  assert.match(product, /Edición desde la ficha pública/);
  assert.match(product, /Tienda/);
  assert.match(product, /89 €/);
  assert.match(product, /Pro/);
  assert.match(product, /179 €/);
  assert.match(product, /Hasta 6 perfiles/);
  assert.match(product, /Hasta 20 perfiles/);
  assert.match(product, /Licencia perpetua/);
  assert.match(product, /Compatibilidad probada con PrestaShop 1\.6, 1\.7, 8 y 9/);
  assert.doesNotMatch(product, /todas las actualizaciones futuras/i);
  assert.doesNotMatch(product, /Solicitar%20acceso/i);
  assert.match(product, /Preguntas frecuentes/);
  assert.match(product, /6 idiomas/);
  assert.match(product, /href="\/privacidad\/frontend-product-editor-ai\/"/);
  assert.match(product, /href="\/condiciones\/frontend-product-editor-ai\/"/);
  assert.match(product, /enabled=2031942/);
  assert.match(product, /enabled=2031964/);
  assert.match(product, /https:\/\/chromewebstore\.google\.com\/detail\/ockepcmaocllmefmoklppidepohbmmdk/);
  assert.match(product, /Ya disponible/);
  assert.doesNotMatch(product, /Próximo lanzamiento|Enlace de instalación disponible tras la publicación/);

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

  assert.match(terms, /Compra, soporte/);
  assert.match(terms, /comerciante registrado/i);
  assert.match(terms, /14 días naturales posteriores a la compra/i);
  assert.match(terms, /derechos irrenunciables del consumidor/i);
  assert.match(terms, /Mis pedidos de Lemon Squeezy/i);
  assert.match(terms, /dos días laborables/i);
});

test("renders accessible desktop and mobile navigation on every public route", async () => {
  const routes = [
    "/",
    "/productos",
    "/productos/frontend-product-editor-ai",
    "/productos/pensiones-lab",
    "/privacidad/frontend-product-editor-ai",
    "/condiciones/frontend-product-editor-ai",
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

test("server-renders every localized product page with its own copy, video and hreflang links", async () => {
  const routes = [
    ["/en/products/frontend-product-editor-ai", "Fix the product", "demo-en.mp4", "en", "PDF in Spanish", "One-time payment", "Privacy policy", "Purchase terms"],
    ["/pt/produtos/frontend-product-editor-ai", "Corrija o produto", "demo-pt.mp4", "pt-PT", "PDF em espanhol", "Pagamento único", "Política de privacidade", "Condições de compra"],
    ["/fr/produits/frontend-product-editor-ai", "Corrigez le produit", "demo-fr.mp4", "fr", "PDF en espagnol", "Paiement unique", "Politique de confidentialité", "Conditions d’achat"],
    ["/it/prodotti/frontend-product-editor-ai", "Correggi il prodotto", "demo-it.mp4", "it", "PDF in spagnolo", "Pagamento unico", "Informativa sulla privacy", "Condizioni di acquisto"],
    ["/de/produkte/frontend-product-editor-ai", "Korrigieren Sie das Produkt", "demo-de.mp4", "de", "PDF auf Spanisch", "Einmalzahlung", "Datenschutzerklärung", "Kaufbedingungen"],
  ];
  for (const [pathname, promise, video, language, guide, payment, privacy, terms] of routes) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(promise));
    assert.match(html, new RegExp(video.replace(".", "\\.")));
    assert.ok(html.includes('<html lang="' + language + '">'), pathname);
    const [navigation] = html.match(/<nav class="nav shell"[\s\S]*?<\/nav>/) ?? [];
    assert.ok(navigation, pathname);
    assert.equal(navigation.match(/href="\/productos\/"/g)?.length, 2, pathname);
    assert.ok(html.includes(guide), pathname);
    assert.equal(html.split("<small>" + payment + "</small>").length - 1, 2, pathname);
    for (const legalLabel of [privacy, terms]) {
      assert.ok(html.includes(">" + legalLabel + "</a>"), pathname);
    }
    assert.match(html, /rel="alternate" hrefLang="(?:en|pt-PT|fr|it|de)"/i);
    assert.match(html, /Frontend Product Editor \+ AI/);
    assert.match(html, /89 €/);
    assert.match(html, /179 €/);
    assert.match(html, /enabled=2031942/);
    assert.match(html, /enabled=2031964/);
    assert.match(html, /https:\/\/chromewebstore\.google\.com\/detail\/ockepcmaocllmefmoklppidepohbmmdk/);
    assert.doesNotMatch(html, /Coming soon|Próximo lançamento|Prochain lancement|Prossimo lancio|Demnächst/);
  }
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
    "../production/condiciones/frontend-product-editor-ai/index.html",
    "../production/en/products/frontend-product-editor-ai/index.html",
    "../production/pt/produtos/frontend-product-editor-ai/index.html",
    "../production/fr/produits/frontend-product-editor-ai/index.html",
    "../production/it/prodotti/frontend-product-editor-ai/index.html",
    "../production/de/produkte/frontend-product-editor-ai/index.html",
    "../production/productos/pensiones-lab/index.html",
  ];
  const renderedPages = await Promise.all(publicFiles.map(file => readFile(new URL(file, import.meta.url), "utf8")));
  assertContactFallback(renderedPages[0]);
  const documentLanguages = ["es", "es", "es", "es", "es", "en", "pt-PT", "fr", "it", "de", "es"];
  for (const [index, html] of renderedPages.entries()) {
    assert.ok(html.includes('<html lang="' + documentLanguages[index] + '">'), publicFiles[index]);
  }
  assert.match(renderedPages[2], /Frontend Product Editor \+ AI/);
  assert.match(renderedPages[3], /Privacidad del producto/);
  assert.match(renderedPages[4], /Compra, soporte/);
  assert.match(renderedPages[5], /Fix the product/);
  assert.match(renderedPages[6], /Corrija o produto/);
  assert.match(renderedPages[7], /Corrigez le produit/);
  assert.match(renderedPages[8], /Correggi il prodotto/);
  assert.match(renderedPages[9], /Korrigieren Sie das Produkt/);
  const pensionsPage = renderedPages[10];
  assert.match(pensionsPage, /<a\b[^>]*href="https:\/\/demarquia\.org\/pensioneslab\/consola\.html"[^>]*>\s*Abrir la consola gratuita(?:\s|<)/);
  assert.match(pensionsPage, /<img\b[^>]*src="\/productos\/pensiones-lab\/detalle\.png"/);
  assert.match(pensionsPage, /<a\b[^>]*href="\/productos\/pensiones-lab\/consola\.png"/);
  for (const filename of ["detalle.png", "consola.png"]) {
    const [source, exported] = await Promise.all([
      readFile(new URL(`../public/productos/pensiones-lab/${filename}`, import.meta.url)),
      readFile(new URL(`../production/productos/pensiones-lab/${filename}`, import.meta.url)),
    ]);
    assert.equal(source.subarray(0, 8).toString("hex"), "89504e470d0a1a0a", filename);
    assert.ok(exported.equals(source), `the export includes the original ${filename}`);
  }
  const sitemap = await readFile(new URL("../production/sitemap.xml", import.meta.url), "utf8");
  assert.match(sitemap, /<loc>https:\/\/aisolutions\.peplogar\.com\/productos\/pensiones-lab\/<\/loc>/);
  renderedPages.forEach(html => assert.doesNotMatch(html, /https?:\/\/(?:localhost|127\.0\.0\.1)/i));
  const productMedia = Array.from(renderedPages[2].matchAll(/(?:src|href)="(\/productos\/fpe-ai\/[^"?#]+)(?:[?#][^"]*)?"/g), match => match[1]);
  assert.ok(productMedia.length >= 6);
  await Promise.all(Array.from(new Set(productMedia)).map(mediaPath => access(new URL(`../public${mediaPath}`, import.meta.url))));
});
