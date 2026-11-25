/* eslint-disable @next/next/no-img-element -- The static export serves the original console screenshot. */
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../SiteChrome";
import "./pensiones-lab.css";

const projectUrl = "https://demarquia.org/pensioneslab/";
const canonical = "https://aisolutions.peplogar.com/productos/pensiones-lab/";
const title = "Pensiones Lab · Simulador gratuito de pensiones en España";
const description = "Explora cómo cambian las pensiones, el presupuesto y la deuda de España al variar la edad de jubilación, los impuestos o el gasto público entre 2026 y 2070.";
const screenshot = "/productos/pensiones-lab/consola.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "website",
    locale: "es_ES",
    images: [{ url: screenshot, width: 2160, height: 825, alt: "Consola de Pensiones Lab con ajustes de jubilación, gráficos y una comparación de siete escenarios en 2050." }],
  },
  twitter: { card: "summary_large_image", title, description, images: [screenshot] },
};

export default function PensionesLabPage() {
  return (
    <main className="pension-product">
      <SiteHeader current="products" />

      <section className="pension-intro shell" aria-labelledby="pension-title">
        <div>
          <p className="section-label">Simulador gratuito · Beta</p>
          <h1 id="pension-title">Pensiones Lab</h1>
          <p className="pension-promise">Tú eres el Consejo de Ministros.</p>
          <p className="pension-lede">
            Decide a qué edad se jubila la gente, cuánto se recauda y en qué se gasta.
            Compara año a año qué ocurre con las pensiones y la deuda de España entre 2026 y 2070.
          </p>
          <p className="pension-device">La consola está pensada para un ordenador. En el móvil puedes consultar cómo funciona.</p>
          <div className="pension-actions">
            <a className="button button-dark" href={`${projectUrl}consola.html`}>Abrir la consola gratuita</a>
            <a className="pension-link" href={`${projectUrl}ayuda.html`}>Cómo funciona</a>
          </div>
        </div>
        <figure>
          <img src="/productos/pensiones-lab/detalle.png" width={1506} height={692} alt="La edad de jubilación está en 65 años. A la derecha, el gráfico muestra la evolución de la deuda pública como porcentaje del PIB." />
          <figcaption>Consola de Pensiones Lab · <a className="pension-link" href={screenshot}>Ampliar captura</a></figcaption>
        </figure>
      </section>

      <section className="pension-experiment shell" aria-labelledby="pension-experiment-title">
        <div>
          <p className="section-label">Primer experimento</p>
          <h2 id="pension-experiment-title">¿Qué cambia si retrasas un año la jubilación?</h2>
        </div>
        <ol>
          <li>Parte de <strong>«Reglas de hoy»</strong>. En el capítulo «Las pensiones», localiza «Edad de jubilación».</li>
          <li>
            Cambia solo ese ajuste <strong>de 65 a 66</strong>. Desde 2027, el modelo retrasa un año
            las nuevas jubilaciones respecto a las edades observadas en 2026. Quienes ya cobran una pensión la conservan.
          </li>
          <li>
            En el gráfico de deuda, compara la línea continua de tu escenario con la discontinua de «Reglas de hoy».
            ¿Cuánto cambia la deuda pública como porcentaje del PIB en 2070?
          </li>
        </ol>
      </section>

      <section className="pension-project shell" aria-labelledby="pension-project-title">
        <div>
          <h2 id="pension-project-title">Cómo leer los resultados</h2>
          <p>
            Cada cifra depende de los supuestos del escenario. La beta sirve para comparar políticas públicas.
            Las previsiones oficiales y el cálculo de una pensión individual quedan fuera de su alcance.
          </p>
          <a className="pension-link" href={`${projectUrl}metodologia.html`}>Consultar la metodología</a>
        </div>
        <div>
          <h2>El proyecto</h2>
          <p>Demarquía Planetaria · Cabeza Propia. Desarrollo de Pep Logar AI Solutions.</p>
          <p>
            <a className="pension-link" href="https://www.gnu.org/licenses/agpl-3.0.html">Licencia del código (AGPL-3.0)</a>.
            {" "}Textos, gráficos y resultados bajo <a className="pension-link" href="https://creativecommons.org/licenses/by/4.0/deed.es">CC BY 4.0</a>.
          </p>
          <a className="pension-link" href={projectUrl}>Ver la presentación de Pensiones Lab</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
