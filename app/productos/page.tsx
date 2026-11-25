import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../SiteChrome";

export const metadata: Metadata = {
  title: "Productos | Pep Logar AI Solutions",
  description: "Conoce el editor de productos para PrestaShop y Pensiones Lab, nuestro simulador gratuito de las pensiones y las cuentas públicas de España.",
  alternates: { canonical: "/productos/" },
};

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader current="catalog" />

      <section className="catalog-hero shell">
        <p className="eyebrow"><span /> Productos propios</p>
        <div className="catalog-hero-grid">
          <h1>Software que resuelve.<br /><em>Desde el primer uso.</em></h1>
          <p>Desarrollamos software para editar un catálogo, comparar escenarios y tomar decisiones con más información.</p>
        </div>
      </section>

      <section className="product-catalog shell" aria-labelledby="catalog-title">
        <div className="catalog-heading">
          <p className="section-label">Catálogo</p>
          <h2 id="catalog-title">Soluciones listas para trabajar.</h2>
        </div>
        <article className="catalog-product-card">
          <div className="catalog-product-copy">
            <div className="product-kicker">Extensión · Chrome · Edge · PrestaShop</div>
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
        <article className="catalog-product-card">
          <div className="catalog-product-copy">
            <div className="product-kicker">Software gratuito · Simulador web</div>
            <h3>Pensiones Lab</h3>
            <p>¿Qué pasaría con las pensiones si retrasaras un año la edad de jubilación? Prueba esa medida, cambia impuestos o cotizaciones y compara cómo evolucionan las pensiones y la deuda pública de España hasta 2070.</p>
            <div className="tag-list"><span>España</span><span>2026–2070</span><span>Para ordenador</span></div>
            <a className="button button-dark" href="/productos/pensiones-lab/">Conocer Pensiones Lab <span aria-hidden="true">→</span></a>
          </div>
          <a className="catalog-product-visual" href="/productos/pensiones-lab/" aria-label="Ver la ficha de Pensiones Lab">
            <img src="/productos/pensiones-lab/detalle.png" width={1506} height={692} alt="Consola de Pensiones Lab con la edad de jubilación en 65 años y el gráfico de deuda pública." loading="lazy" />
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
