import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../SiteChrome";

export const metadata: Metadata = {
  title: "Productos | Pep Logar AI Solutions",
  description: "Software propio de Pep Logar AI Solutions para resolver tareas reales con automatización e inteligencia artificial.",
};

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader current="products" />

      <section className="catalog-hero shell">
        <p className="eyebrow"><span /> Productos propios</p>
        <div className="catalog-hero-grid">
          <h1>Software que resuelve.<br /><em>Desde el primer uso.</em></h1>
          <p>Convertimos procesos que conocemos de primera mano en herramientas concretas, instalables y fáciles de controlar.</p>
        </div>
      </section>

      <section className="product-catalog shell" aria-labelledby="catalog-title">
        <div className="catalog-heading">
          <p className="section-label">Catálogo</p>
          <h2 id="catalog-title">Soluciones listas para trabajar.</h2>
        </div>
        <article className="catalog-product-card">
          <div className="catalog-product-copy">
            <div className="product-kicker"><span>01</span> Chrome · Edge · PrestaShop</div>
            <h3>Pep Logar Frontend<br />Product Editor + AI</h3>
            <p>Edita productos mientras recorres el catálogo público. Cambia precio, stock, estado o referencia y mejora sus contenidos con IA, sin instalar módulos en PrestaShop.</p>
            <div className="tag-list">
              <span>PrestaShop 1.6–9</span><span>Sin módulos</span><span>IA configurable</span><span>Dictado</span>
            </div>
            <a className="button button-dark" href="/productos/frontend-product-editor-ai">Conocer el producto <span>→</span></a>
          </div>
          <a className="catalog-product-visual" href="/productos/frontend-product-editor-ai" aria-label="Ver Pep Logar Frontend Product Editor + AI">
            <img src="/productos/fpe-ai/frontoffice-editor.png" alt="Editor lateral de productos abierto sobre una tienda PrestaShop" />
            <span className="visual-badge"><i /> Datos verificados desde el Back-Office</span>
          </a>
        </article>
      </section>

      <section className="product-catalog-note shell">
        <p className="section-label">Nuestro criterio</p>
        <p>No publicamos demostraciones genéricas: convertimos necesidades operativas reales en productos mantenibles, documentados y compatibles con el trabajo diario.</p>
      </section>

      <SiteFooter />
    </main>
  );
}
