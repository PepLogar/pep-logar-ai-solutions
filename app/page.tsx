import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import "./home.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const services = [
  {
    title: "Software a medida tradicional",
    text: "Si tu equipo calcula cada presupuesto con las mismas reglas, podemos convertir esa hoja de cálculo en una aplicación que aplique las tarifas y prepare el documento.",
  },
  {
    title: "Software con agentes de IA",
    text: "Si cada cliente pide las cosas de una manera distinta, un agente puede leer su correo, localizar las referencias y señalar lo que falta para que alguien revise el pedido.",
  },
  {
    title: "Conecta el correo con tus programas de gestión",
    text: "Una herramienta puede consultar el stock en el ERP y dejar el pedido preparado para revisión. Usamos la API del programa o, cuando está disponible, una conexión MCP.",
  },
];

const steps = [
  ["01", "Elegir la tarea", "Revisamos contigo un ejemplo real y anotamos cuánto tiempo ocupa y qué errores hay que corregir."],
  ["02", "Acordar las reglas", "Definimos qué datos necesita el programa, quién revisará el resultado y cuándo debe detenerse."],
  ["03", "Probar con un caso", "Probamos una primera versión y comparamos el tiempo y las correcciones con el proceso anterior."],
  ["04", "Decidir el siguiente paso", "Con esos resultados decides si conviene ajustar la herramienta o extenderla a más casos."],
];

export default function Home() {
  return (
    <main className="home-page">
      <SiteHeader />

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Desarrollo de software a medida</p>
          <h1>¿Cuántas veces copias los datos de un pedido?</h1>
          <p className="hero-lede">
            Si un pedido llega por correo y alguien vuelve a teclearlo en el programa de gestión,
            ahí podemos empezar. Desarrollamos <strong>software a medida tradicional</strong> y{" "}
            <strong>software con agentes de IA</strong>. Tu equipo decide qué pasos se automatizan y cuáles necesitan revisión.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="/#contacto">Cuéntanos qué tarea repites <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="/productos/">Ver nuestros productos <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <section className="order-example" aria-labelledby="order-example-title">
          <p className="order-kicker">Ejemplo de flujo</p>
          <h2 id="order-example-title">Un mismo pedido en dos formatos</h2>
          <dl className="order-paths">
            <div>
              <dt>Software tradicional</dt>
              <dd>Lee la referencia y la cantidad del formulario, comprueba el stock y aplica la tarifa.</dd>
            </div>
            <div>
              <dt>Agente de IA</dt>
              <dd>Interpreta el correo en texto libre y propone un borrador con las referencias y cantidades.</dd>
            </div>
          </dl>
          <p className="order-review"><strong>Revisión humana</strong>Tu equipo revisa el borrador y confirma el pedido.</p>
        </section>
      </section>

      <section className="home-software" aria-labelledby="home-products-title">
        <div className="shell">
          <h2 id="home-products-title">Software que ya puedes probar</h2>
          <div className="home-products-grid">
            <article>
              <img src="/productos/fpe-ai/frontoffice-editor.png" width={1903} height={958}
                alt="Panel del editor abierto sobre la ficha de un producto en PrestaShop." loading="lazy" />
              <div>
                <h3><a href="/productos/frontend-product-editor-ai/">Frontend Product Editor + AI</a></h3>
                <p>Corrige el stock desde la ficha de PrestaShop. La prueba dura 14 días desde la primera conexión y se puede iniciar sin tarjeta.</p>
                <a className="home-product-action" href="/productos/frontend-product-editor-ai/#demostracion">Ver la demo de 46 segundos <span aria-hidden="true">→</span></a>
              </div>
            </article>
            <article>
              <img src="/productos/pensiones-lab/detalle.png" width={1506} height={692}
                alt="Ajuste de la edad de jubilación y gráfico de deuda pública en Pensiones Lab." loading="lazy" />
              <div>
                <h3><a href="/productos/pensiones-lab/">Pensiones Lab</a></h3>
                <p>¿Qué cambia si retrasas un año la jubilación? Este simulador gratuito para ordenador te deja comparar escenarios de España hasta 2070.</p>
                <a className="home-product-action" href="https://demarquia.org/pensioneslab/ayuda.html#pasos">Primeros pasos en Pensiones Lab <span aria-hidden="true">→</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="services shell" id="capacidades">
        <div className="section-heading">
          <p className="section-label">Capacidades</p>
          <h2>Qué podemos desarrollar para tu equipo</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="method shell" id="metodo">
        <div className="section-heading method-heading">
          <p className="section-label">El método</p>
          <h2>Cómo trabajamos contigo</h2>
          <p>Empezamos por una tarea que conozcas bien, desde que llega la solicitud hasta que alguien aprueba el resultado.</p>
        </div>
        <div className="steps">
          {steps.map(([number, title, text]) => (
            <article className="step" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
        <div className="home-method-close">
          <p>Menos tareas. Más empresa.</p>
          <a className="text-link" href="/#contacto">Plantear un primer piloto <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="principles">
        <div className="shell principles-grid">
          <div>
            <p className="section-label">Principios</p>
            <h2>Qué queda bajo tu control</h2>
          </div>
          <div className="principle-list">
            <article><span>01</span><div><h3>Quién da el visto bueno</h3><p>Eliges qué acciones necesitan la aprobación de una persona y quién puede dársela.</p></div></article>
            <article><span>02</span><div><h3>Qué herramientas se conectan</h3><p>Decidimos contigo qué puede consultar o modificar la aplicación en cada sistema.</p></div></article>
            <article><span>03</span><div><h3>Cómo se revisa un error</h3><p>Definimos qué pasos registrar para poder localizar dónde falló el proceso.</p></div></article>
          </div>
        </div>
      </section>

      <section className="closing shell" id="contacto">
        <div className="closing-card">
          <div className="closing-intro">
            <p className="eyebrow light"><span /> Primera conversación</p>
            <h2>¿Qué tarea repites?</h2>
            <p>Cuéntanos qué recibes, en qué programa trabajas y qué resultado necesitas. Con ese ejemplo podremos hablar de un primer piloto.</p>
            <div className="contact-links" aria-label="Datos de contacto">
              <a href="mailto:info@aisolutions.peplogar.com"><small>Escribir por correo</small>info@aisolutions.peplogar.com</a>
              <a href="tel:+34911419634"><small>Teléfono</small>(+34) 91 141 96 34</a>
            </div>
          </div>
          <ContactForm />
          <div className="closing-orbit" aria-hidden="true"><i /><i /><b>PL</b></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
