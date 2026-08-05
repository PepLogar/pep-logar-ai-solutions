import { ContactForm } from "./ContactForm";

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
      <nav className="nav shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Pep Logar AI Solutions, inicio">
          <span className="brand-mark" aria-hidden="true"><i>P</i><i>L</i></span>
          <span>PEP LOGAR</span>
          <span className="brand-unit">/ AI SOLUTIONS</span>
        </a>
        <div className="nav-links">
          <a href="#capacidades">Qué hacemos</a>
          <a href="#metodo">Cómo trabajamos</a>
          <a href="#contacto">Hablemos</a>
        </div>
        <a className="nav-cta" href="mailto:info@aisolutions.peplogar.com?subject=Quiero%20detectar%20un%20proceso%20automatizable">
          Explorar un proceso <span aria-hidden="true">↗</span>
        </a>
      </nav>

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

      <footer className="footer shell">
        <div className="brand"><span className="brand-mark" aria-hidden="true"><i>P</i><i>L</i></span><span>PEP LOGAR</span><span className="brand-unit">/ AI SOLUTIONS</span></div>
        <address className="footer-address">
          <strong>Todo en Tinta Pep Logar S.L.</strong>
          <span>CIF B86378981</span>
          <span>Av. Europa, 232 · 28905 Getafe, Sector III · España</span>
        </address>
        <div className="footer-meta">
          <a href="mailto:info@aisolutions.peplogar.com">info@aisolutions.peplogar.com</a>
          <a href="tel:+34911419634">(+34) 91 141 96 34</a>
          <p>© {new Date().getFullYear()} Pep Logar AI Solutions</p>
        </div>
      </footer>
    </main>
  );
}
