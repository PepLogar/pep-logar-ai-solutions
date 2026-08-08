import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../SiteChrome";

const benefits = [
  ["01", "Edita donde detectas el cambio", "Abre la ficha pública, pulsa la píldora flotante y modifica el producto sin volver a localizarlo en el Back-Office."],
  ["02", "Guarda con el formulario nativo", "La extensión utiliza la sesión y los formularios originales de PrestaShop y verifica el resultado después de guardar."],
  ["03", "Trabaja con combinaciones", "Identifica la combinación seleccionada para ajustar su referencia y stock sin confundir variantes."],
  ["04", "Mejora contenido con IA", "Activa el asistente directamente sobre nombres, descripciones, metadatos y otros campos editables del Back-Office."],
  ["05", "Dicta y después decide", "Transcribe por micrófono, revisa la puntuación y utiliza la IA para pulir el texto antes de insertarlo."],
  ["06", "Conserva el control", "Historial local, preparación de deshacer y prompts configurables para adaptar cada acción a tu negocio."],
];

const faqs = [
  ["¿Instala algún módulo o modifica PrestaShop?", "No. Es una extensión de Chrome y Edge. No copia archivos, no crea tablas y no añade overrides a la tienda."],
  ["¿Qué versiones de PrestaShop admite?", "Dispone de adaptadores para las familias PrestaShop 1.6, 1.7, 8 y 9. La matriz comprobada incluye 1.6.1.19, 1.7.8.11, 8.2.7 y 9.1.4; otras revisiones se validan en la tienda concreta."],
  ["¿Dónde se guarda la clave de IA?", "La clave y las preferencias permanecen en el almacenamiento local del perfil del navegador. Las peticiones se envían directamente al proveedor elegido."],
  ["¿Funciona desde cualquier ordenador?", "Solo desde el navegador y el perfil donde está instalada. Además, debe existir una sesión válida del Back-Office en ese mismo perfil."],
  ["¿Puedo editar productos con variantes?", "Sí. La extensión muestra el identificador de la combinación seleccionada. Tras cambiar talla, color u otro atributo, se actualiza la página para tomar la nueva combinación."],
  ["¿Qué ocurre al desinstalarla?", "La tienda queda exactamente como estaba. No quedan módulos, archivos, tablas ni residuos que puedan interferir con otros componentes."],
];

export const metadata: Metadata = {
  title: "Frontend Product Editor + AI para PrestaShop | Pep Logar",
  description: "Edita productos PrestaShop desde el Front Office, mejora contenidos con IA y evita saltar constantemente al Back-Office. Sin módulos ni cambios en la tienda.",
  openGraph: {
    title: "Pep Logar Frontend Product Editor + AI",
    description: "Edita PrestaShop desde el catálogo. Sin módulos.",
    type: "website",
    images: [{ url: "/productos/fpe-ai/og-product.png", width: 1732, height: 908, alt: "Pep Logar Frontend Product Editor + AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pep Logar Frontend Product Editor + AI",
    description: "Gestiona tu catálogo mientras lo estás viendo.",
    images: ["/productos/fpe-ai/og-product.png"],
  },
};

export default function ProductPage() {
  return (
    <main className="product-page">
      <SiteHeader current="products" />

      <section className="product-hero shell">
        <div className="product-hero-copy">
          <p className="eyebrow"><span /> Producto · Chrome / Edge · PrestaShop 1.6–9</p>
          <h1>Gestiona tu catálogo<br /><em>mientras lo estás viendo.</em></h1>
          <p className="product-hero-lede">Edita productos desde el Front Office, mejora contenidos con IA y evita saltar constantemente entre la tienda y el Back-Office.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="mailto:info@aisolutions.peplogar.com?subject=Solicitar%20acceso%20a%20Frontend%20Product%20Editor%20%2B%20AI">Solicitar acceso <span>↗</span></a>
            <a className="text-link" href="#demostracion">Ver demostración <span>↓</span></a>
          </div>
          <div className="product-proof" aria-label="Ventajas principales">
            <span>Sin módulos</span><span>6 idiomas</span><span>IA configurable</span>
          </div>
        </div>
        <div className="product-hero-visual">
          <img src="/productos/fpe-ai/frontoffice-editor.png" alt="Edición de un producto PrestaShop desde su página pública" />
          <div className="product-floating-pill">✎ Editar producto <b>#1</b></div>
          <div className="product-version-card"><small>COMPATIBILIDAD</small><strong>PS 1.6 · 1.7 · 8 · 9</strong></div>
        </div>
      </section>

      <section className="product-demo" id="demostracion">
        <div className="shell">
          <div className="product-section-heading">
            <p className="section-label">En funcionamiento</p>
            <div><h2>Del catálogo al cambio guardado.</h2><p>Una demostración completa del flujo real: localizar visualmente el producto, editarlo, utilizar la IA y verificar el resultado.</p></div>
          </div>
          <div className="video-frame">
            <video controls preload="metadata" poster="/productos/fpe-ai/frontoffice-pill.png">
              <source src="/productos/fpe-ai/demo-fpe-ai.mp4" type="video/mp4" />
              <track
                default
                kind="captions"
                src="/productos/fpe-ai/demo-es.vtt"
                srcLang="es"
                label="Español"
              />
              Tu navegador no permite reproducir este vídeo.
            </video>
            <span className="video-caption">Demostración · 46 segundos · PrestaShop 9</span>
          </div>
        </div>
      </section>

      <section className="product-benefits shell">
        <div className="product-section-heading">
          <p className="section-label">Lo que cambia</p>
          <div><h2>Menos búsquedas.<br />Más catálogo resuelto.</h2><p>La extensión acompaña el flujo de trabajo en lugar de obligarte a abandonar el producto que estás revisando.</p></div>
        </div>
        <div className="benefit-grid">
          {benefits.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="product-workflow">
        <div className="shell">
          <div className="product-section-heading light-heading">
            <p className="section-label">Cómo funciona</p>
            <div><h2>Cuatro pasos. Ninguna búsqueda duplicada.</h2></div>
          </div>
          <ol className="product-steps">
            <li><span>01</span><div><h3>Conecta</h3><p>Inicia sesión en el Back-Office y guarda su ruta en el panel lateral.</p></div></li>
            <li><span>02</span><div><h3>Navega</h3><p>Recorre la tienda como lo haría un cliente y detecta qué producto necesita atención.</p></div></li>
            <li><span>03</span><div><h3>Edita</h3><p>Abre la píldora flotante y modifica datos comerciales o accede a la ficha administrativa.</p></div></li>
            <li><span>04</span><div><h3>Verifica</h3><p>Guarda mediante PrestaShop y comprueba automáticamente que el cambio quedó aplicado.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="product-ai shell">
        <div className="product-ai-copy">
          <p className="eyebrow"><span /> IA dentro del Back-Office</p>
          <h2>Trabaja con el campo.<br /><em>No con una caja aparte.</em></h2>
          <p>El asistente aparece cuando escribes o seleccionas contenido en un campo nativo. Comprende si está trabajando con texto plano o HTML y prepara una propuesta antes de insertarla.</p>
          <ul>
            <li>Mejorar, ampliar, reducir o corregir.</li>
            <li>Optimizar para SEO y traducir.</li>
            <li>Aplicar formato atractivo cuando el campo admite HTML.</li>
            <li>Prompts editables y varios proveedores, también locales.</li>
          </ul>
        </div>
        <div className="product-ai-visual">
          <img src="/productos/fpe-ai/ai-description.png" alt="Asistente de IA trabajando directamente sobre una descripción de PrestaShop" />
          <span>✦ Trabajar con este campo</span>
        </div>
      </section>

      <section className="product-clean">
        <div className="shell product-clean-grid">
          <div>
            <p className="section-label">Instalación limpia</p>
            <h2>Tu tienda no se toca.</h2>
          </div>
          <div className="clean-points">
            <article><strong>01</strong><div><h3>No es un módulo</h3><p>No instala archivos, tablas ni overrides en PrestaShop.</p></div></article>
            <article><strong>02</strong><div><h3>Usa tu sesión real</h3><p>Trabaja con los formularios y permisos del Back-Office abierto en el mismo navegador.</p></div></article>
            <article><strong>03</strong><div><h3>Se elimina sin residuos</h3><p>Al desinstalar la extensión desaparece la herramienta, no el trabajo que ya guardaste.</p></div></article>
            <article><strong>04</strong><div><h3>Claves bajo tu control</h3><p>Las credenciales de IA permanecen localmente en el perfil del navegador.</p></div></article>
          </div>
        </div>
      </section>

      <section className="product-gallery shell" aria-labelledby="gallery-title">
        <div className="product-section-heading">
          <p className="section-label">Recorrido visual</p>
          <div><h2 id="gallery-title">Cada función, en su contexto.</h2></div>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-wide"><img src="/productos/fpe-ai/frontoffice-pill.png" alt="Píldora de edición disponible sobre el producto público" /><figcaption>Acceso inmediato desde el catálogo público</figcaption></figure>
          <figure><img src="/productos/fpe-ai/dictado.png" alt="Ventana de dictado por micrófono" /><figcaption>Dictado revisable y pulido opcional con IA</figcaption></figure>
          <figure><img src="/productos/fpe-ai/propuesta-html.png" alt="Vista previa de una propuesta HTML generada por IA" /><figcaption>Propuesta previa antes de insertar</figcaption></figure>
          <figure className="gallery-wide"><img src="/productos/fpe-ai/configuracion.png" alt="Configuración de una instalación PrestaShop" /><figcaption>Perfiles independientes para varias instalaciones</figcaption></figure>
        </div>
      </section>

      <section className="product-requirements shell">
        <div className="requirements-copy">
          <p className="section-label">Compatibilidad</p>
          <h2>Lo necesario para empezar.</h2>
          <p>Una puesta en marcha sencilla, sin acceso al servidor ni cambios en el código de la tienda.</p>
        </div>
        <dl>
          <div><dt>Navegador</dt><dd>Google Chrome o Microsoft Edge de escritorio</dd></div>
          <div><dt>PrestaShop</dt><dd>Adaptadores 1.6 · 1.7 · 8 · 9; matriz comprobada 1.6.1.19 · 1.7.8.11 · 8.2.7 · 9.1.4</dd></div>
          <div><dt>Sesión</dt><dd>Back-Office abierto en el mismo perfil del navegador</dd></div>
          <div><dt>Instalación</dt><dd>Extensión del navegador, sin módulo de PrestaShop</dd></div>
          <div><dt>IA</dt><dd>Opcional: proveedor HTTPS en la nube o modelo local compatible</dd></div>
          <div><dt>Interfaz</dt><dd>Español, inglés, francés, italiano, alemán y portugués</dd></div>
        </dl>
      </section>

      <section className="product-faq shell">
        <div className="product-section-heading">
          <p className="section-label">Preguntas frecuentes</p>
          <div><h2>Lo importante, antes de instalar.</h2></div>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => <details key={question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}</summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="product-cta shell">
        <div>
          <p className="eyebrow light"><span /> Solicitar acceso</p>
          <h2>La próxima ficha que abras<br />puede editarse desde ahí.</h2>
          <p>Cuéntanos qué versión de PrestaShop utilizas y te ayudaremos a validar el encaje en tu tienda.</p>
        </div>
        <div className="product-cta-actions">
          <a className="button button-light" href="mailto:info@aisolutions.peplogar.com?subject=Solicitar%20acceso%20a%20Frontend%20Product%20Editor%20%2B%20AI">Solicitar acceso <span>↗</span></a>
          <a href="tel:+34911419634">(+34) 91 141 96 34</a>
        </div>
      </section>

      <p className="product-privacy-link shell">Antes de instalar, consulta la <Link href="/privacidad/frontend-product-editor-ai">política de privacidad y tratamiento de datos</Link>.</p>

      <SiteFooter />
    </main>
  );
}
