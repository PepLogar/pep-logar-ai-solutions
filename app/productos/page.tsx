/* eslint-disable @next/next/no-img-element -- Plesk serves the catalog screenshots directly. */
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../SiteChrome";
import "./catalogo.css";

export const metadata: Metadata = {
  title: "Productos | Pep Logar AI Solutions",
  description: "Conoce el editor de productos para PrestaShop y Pensiones Lab, nuestro simulador gratuito de las pensiones y las cuentas públicas de España.",
  alternates: { canonical: "/productos/" },
};

const products = [
  {
    id: "editor",
    name: "Frontend Product Editor + AI",
    description: "Corrige el stock y el precio desde la ficha de PrestaShop.",
    condition: "Chrome o Edge de escritorio · Prueba de 14 días sin tarjeta",
    details: "/productos/frontend-product-editor-ai/",
    action: "Ver demo de 46 s",
    actionUrl: "/productos/frontend-product-editor-ai/#demostracion",
    thumbnail: "/productos/fpe-ai/frontoffice-editor.png",
    screenshot: "/productos/fpe-ai/frontoffice-editor.png",
    alt: "Panel del editor abierto sobre una ficha de producto de PrestaShop.",
    width: 1903,
    height: 958,
  },
  {
    id: "pensiones",
    name: "Pensiones Lab",
    description: "Compara cómo cambian las pensiones y la deuda si retrasas un año la jubilación.",
    condition: "España · Simulador gratuito para ordenador",
    details: "/productos/pensiones-lab/",
    action: "Primeros pasos",
    actionUrl: "https://demarquia.org/pensioneslab/ayuda.html#pasos",
    thumbnail: "/productos/pensiones-lab/detalle.png",
    screenshot: "/productos/pensiones-lab/consola.png",
    alt: "Consola de Pensiones Lab con los ajustes de jubilación y el gráfico de deuda pública.",
    width: 1506,
    height: 692,
  },
] as const;

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader current="catalog" />
      <section className="software-catalog shell" aria-labelledby="catalog-title">
        <h1 id="catalog-title">Software de Pep Logar</h1>
        <div className="software-list">
          {products.map(product => (
            <article className="software-card" key={product.id} aria-labelledby={`title-${product.id}`}>
              <h2 id={`title-${product.id}`}>{product.name}</h2>
              <p className="software-benefit">{product.description}</p>
              <button className="software-preview" type="button" popoverTarget={`capture-${product.id}`} aria-label={`Ampliar captura de ${product.name}`}>
                <img src={product.thumbnail} width={product.width} height={product.height} alt="" />
                <span aria-hidden="true">⤢</span>
              </button>
              <p className="software-condition">{product.condition}</p>
              <div className="software-actions">
                <a className="software-primary" href={product.actionUrl}>{product.action}</a>
                <a href={product.details} aria-label={`Ver ficha de ${product.name}`}>Ver ficha</a>
              </div>
              <div className="software-enlargement" id={`capture-${product.id}`} popover="auto" role="dialog" aria-label={`Captura de ${product.name}`}>
                <div className="software-enlargement-bar">
                  <strong>{product.name}</strong>
                  <button type="button" popoverTarget={`capture-${product.id}`} popoverTargetAction="hide">Cerrar captura</button>
                </div>
                <a href={product.screenshot} aria-label={`Ver captura de ${product.name} a tamaño original`}>
                  <img src={product.screenshot} loading="lazy" alt={product.alt} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
