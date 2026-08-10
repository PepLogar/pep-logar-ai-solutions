import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { SiteFooter, SiteHeader } from "./SiteChrome";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const services = [
  {
    number: "01",
    title: "Agentes operativos",
    text: "Sistemas que entienden un objetivo, consultan información, usan herramientas y completan tareas con supervisión humana.",
    tags: ["Operaciones", "Back office", "Soporte"],
  },
  {
    number: "02",
    title: "Conexiones MCP",
    text: "Conectamos la inteligencia con el software que ya utiliza tu equipo: ERP, CRM, correo, documentos y bases de datos.",
    tags: ["ERP / CRM", "Datos", "Herramientas"],
  },
  {
    number: "03",
    title: "Software a medida + IA",
    text: "Creamos productos internos que combinan reglas de negocio, automatización e IA sin obligarte a cambiar toda tu empresa.",
    tags: ["Aplicaciones", "Integraciones", "Control"],
  },
];

const steps = [
  ["01", "Descubrir", "Localizamos tareas repetitivas, cuellos de botella y decisiones que consumen tiempo."],
  ["02", "Diseñar", "Dibujamos el flujo, sus límites, las herramientas y los puntos de validación humana."],
  ["03", "Pilotar", "Construimos un primer agente sobre un proceso acotado y medimos el resultado real."],
  ["04", "Escalar", "Conectamos nuevos procesos, reforzamos el control y transferimos conocimiento al equipo."],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Nueva unidad · IA aplicada</p>
          <h1>Menos tareas.<br />Más empresa.</h1>
          <p className="hero-lede">
            Diseñamos software y agentes de IA que conectan tus herramientas, entienden tus procesos y hacen avanzar el trabajo.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="mailto:info@aisolutions.peplogar.com?subject=Sesión%20de%20descubrimiento%20IA">Detectar una oportunidad <span>↗</span></a>
            <a className="text-link" href="#metodo">Ver cómo trabajamos <span>↓</span></a>
          </div>
          <div className="hero-proof">
            <span className="avatar-stack" aria-hidden="true"><i>IA</i><i>+</i><i>Tu</i></span>
            <p><strong>Tecnología con propósito.</strong><br />El equipo decide. Los agentes ejecutan.</p>
          </div>
        </div>

        <div className="agent-stage" aria-label="Esquema de un agente conectado a herramientas de empresa">
          <div className="stage-grid" />
          <div className="status-pill"><span /> SISTEMA ACTIVO</div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="agent-core">
            <span className="core-kicker">AGENTE</span>
            <strong>Coordina</strong>
            <small>razona · actúa · verifica</small>
          </div>
          <div className="tool-node node-erp"><span>ERP</span><small>Datos</small></div>
          <div className="tool-node node-mail"><span>@</span><small>Correo</small></div>
          <div className="tool-node node-crm"><span>CRM</span><small>Clientes</small></div>
          <div className="tool-node node-docs"><span>DOC</span><small>Archivos</small></div>
          <div className="activity-card">
            <p><span className="pulse" /> FLUJO EN CURSO</p>
            <strong>Pedido validado</strong>
            <div className="progress"><i /></div>
            <small>3 herramientas coordinadas · revisión lista</small>
          </div>
          <p className="stage-note">Conecta · decide · ejecuta · aprende</p>
        </div>
      </section>

      <section className="manifesto">
        <div className="shell manifesto-grid">
          <p className="section-label">La idea</p>
          <div>
            <h2>No necesitas “poner IA”.<br /><em>Necesitas que el trabajo fluya.</em></h2>
            <p>Empezamos por el proceso, no por la tecnología. Detectamos dónde se pierde tiempo, conectamos lo que ya funciona y diseñamos una solución que tu equipo pueda entender, controlar y mejorar.</p>
          </div>
        </div>
      </section>

      <section className="services shell" id="capacidades">
        <div className="section-heading">
          <p className="section-label">Capacidades</p>
          <h2>Tres formas de convertir<br />complejidad en avance.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-icon" aria-hidden="true"><i /><i /><i /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="tag-list">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-product shell" aria-labelledby="home-product-title">
        <div className="home-product-copy">
          <p className="eyebrow light"><span /> Producto propio</p>
          <h2 id="home-product-title">Edita PrestaShop<br />desde el catálogo.</h2>
          <p>Pep Logar Frontend Product Editor + AI elimina el salto constante entre la tienda pública y el Back-Office. Sin módulos, compatible con PrestaShop 1.6, 1.7, 8 y 9.</p>
          <a className="button button-light" href="/productos/frontend-product-editor-ai">Ver el producto <span>↗</span></a>
        </div>
        <a className="home-product-visual" href="/productos/frontend-product-editor-ai" aria-label="Conocer Frontend Product Editor + AI">
          <img src="/productos/fpe-ai/frontoffice-editor.png" alt="Editor de producto PrestaShop abierto desde el catálogo" />
          <span>Chrome · Edge · IA configurable</span>
        </a>
      </section>

      <section className="example shell">
        <div className="example-card">
          <div className="example-copy">
            <p className="eyebrow light"><span /> Ejemplo de aplicación</p>
            <h2>Un pedido entra.<br />El trabajo se organiza.</h2>
            <p>Un agente interpreta la solicitud, consulta disponibilidad, contrasta las condiciones del cliente y prepara la operación. Solo pide ayuda cuando aparece una excepción.</p>
            <ul>
              <li><span>✓</span> Menos traspasos manuales</li>
              <li><span>✓</span> Trazabilidad de cada decisión</li>
              <li><span>✓</span> Personas centradas en excepciones</li>
            </ul>
          </div>
          <div className="flow" aria-label="Flujo: solicitud, agente, herramientas y validación">
            <div className="flow-step"><span>01</span><p><small>ENTRADA</small>Solicitud recibida</p><i>Comercial</i></div>
            <div className="flow-line"><b /></div>
            <div className="flow-step active"><span>02</span><p><small>AGENTE</small>Analiza y coordina</p><i>IA + reglas</i></div>
            <div className="flow-line"><b /></div>
            <div className="flow-step"><span>03</span><p><small>ACCIÓN</small>ERP · CRM · correo</p><i>Herramientas</i></div>
            <div className="flow-line"><b /></div>
            <div className="flow-step"><span>04</span><p><small>CONTROL</small>Validación humana</p><i>Excepción</i></div>
          </div>
        </div>
      </section>

      <section className="method shell" id="metodo">
        <div className="section-heading method-heading">
          <p className="section-label">El método</p>
          <h2>Empezar pequeño.<br />Demostrar valor. Escalar.</h2>
          <p>Un camino pragmático para pasar de una oportunidad difusa a un sistema útil, medible y gobernable.</p>
        </div>
        <div className="steps">
          {steps.map(([number, title, text]) => (
            <article className="step" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="principles">
        <div className="shell principles-grid">
          <div>
            <p className="section-label">Principios</p>
            <h2>Autonomía,<br />con criterio.</h2>
          </div>
          <div className="principle-list">
            <article><span>01</span><div><h3>Humano en el circuito</h3><p>Definimos qué puede resolver el agente y qué requiere aprobación.</p></div></article>
            <article><span>02</span><div><h3>Integración progresiva</h3><p>Convivimos con tus sistemas; no planteamos una sustitución total.</p></div></article>
            <article><span>03</span><div><h3>Decisiones visibles</h3><p>Registramos acciones, fuentes y excepciones para mantener el control.</p></div></article>
          </div>
        </div>
      </section>

      <section className="closing shell" id="contacto">
        <div className="closing-card">
          <div className="closing-intro">
            <p className="eyebrow light"><span /> Primera conversación</p>
            <h2>¿Qué proceso te gustaría<br />que avanzara solo?</h2>
            <p>En una sesión breve identificamos una oportunidad concreta, sus conexiones y el alcance razonable de un primer piloto.</p>
            <div className="contact-links" aria-label="Datos de contacto">
              <a href="mailto:info@aisolutions.peplogar.com"><small>Email</small>info@aisolutions.peplogar.com</a>
              <a href="tel:+34911419634"><small>Teléfono</small>(+34) 91 141 96 34</a>
              <a href="https://aisolutions.peplogar.com"><small>Web</small>aisolutions.peplogar.com</a>
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
