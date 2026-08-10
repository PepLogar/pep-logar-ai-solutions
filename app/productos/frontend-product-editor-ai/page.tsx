import type { Metadata } from "next";
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
  ["¿Cuándo empieza la prueba de 14 días?", "La prueba empieza después de la primera conexión correcta con PrestaShop, no al instalar la extensión. Durante esos 14 días están disponibles todas las funciones."],
  ["¿Qué queda disponible cuando termina la prueba?", "El modo gratuito permanente sigue identificando el producto o la combinación y abre su ficha exacta del Back-Office. La edición desde el Front-Office, la verificación, el historial, la IA, el dictado y los prompts requieren licencia."],
  ["¿La licencia es una suscripción?", "No. Tienda y Pro son licencias perpetuas de pago único. No hay cuotas mensuales ni renovaciones obligatorias."],
  ["¿Qué diferencia hay entre Tienda y Pro?", "Tienda permite gestionar una tienda PrestaShop y hasta seis perfiles de navegador. Pro permite entre dos y cinco tiendas y hasta veinte perfiles."],
  ["¿Qué es una activación de navegador?", "Cada perfil de Chrome o Edge donde activas la licencia cuenta como una activación. Puedes liberarla desde la propia extensión antes de cambiar de equipo o perfil."],
  ["¿Instala algún módulo o modifica PrestaShop?", "No. Es una extensión de Chrome y Edge. No copia archivos, no crea tablas y no añade overrides a la tienda."],
  ["¿Qué versiones de PrestaShop admite?", "Dispone de adaptadores para las familias PrestaShop 1.6, 1.7, 8 y 9. La matriz comprobada incluye 1.6.1.19, 1.7.8.11, 8.2.7 y 9.1.4; otras revisiones se validan en la tienda concreta."],
  ["¿Dónde se guarda la clave de IA?", "La clave y las preferencias permanecen en el almacenamiento local del perfil del navegador. Las peticiones se envían directamente al proveedor elegido."],
  ["¿Funciona desde cualquier ordenador?", "Solo desde el navegador y el perfil donde está instalada. Además, debe existir una sesión válida del Back-Office en ese mismo perfil."],
  ["¿Puedo editar productos con variantes?", "Sí. La extensión muestra el identificador de la combinación seleccionada. Tras cambiar talla, color u otro atributo, se actualiza la página para tomar la nueva combinación."],
  ["¿Qué ocurre al desinstalarla?", "La tienda queda exactamente como estaba. No quedan módulos, archivos, tablas ni residuos que puedan interferir con otros componentes."],
];

export const metadata: Metadata = {
  title: "Frontend Product Editor + AI para PrestaShop | Pep Logar",
  description: "Edita el producto PrestaShop que ya estás viendo, sin volver a buscarlo en el Back-Office. Prueba completa de 14 días, modo gratuito y licencias perpetuas.",
  openGraph: {
    title: "Pep Logar Frontend Product Editor + AI",
    description: "Edita el producto que ya estás viendo. Sin módulos, con prueba completa de 14 días.",
    type: "website",
    images: [{ url: "/productos/fpe-ai/og-product.png", width: 1732, height: 908, alt: "Pep Logar Frontend Product Editor + AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pep Logar Frontend Product Editor + AI",
    description: "Edita el producto que ya estás viendo y evita volver a buscarlo en el Back-Office.",
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
          <h1>Corrige el producto<br /><em>que ya estás viendo.</em></h1>
          <p className="product-hero-lede">Edita precios, stock, referencias y contenidos desde la ficha pública de tu tienda PrestaShop, sin volver a localizar el producto en el Back-Office.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#prueba">Probar gratis 14 días <span>↓</span></a>
            <a className="text-link" href="#demostracion">Ver demostración <span>↓</span></a>
          </div>
          <div className="product-proof" aria-label="Ventajas principales">
            <span>Sin tarjeta para probar</span><span>Modo gratuito permanente</span><span>Pago único</span><span>Sin módulos</span>
          </div>
        </div>
        <div className="product-hero-visual">
          <img src="/productos/fpe-ai/frontoffice-editor.png" alt="Edición de un producto PrestaShop desde su página pública" />
          <div className="product-floating-pill">✎ Editar producto <b>#1</b></div>
          <div className="product-version-card"><small>COMPATIBILIDAD</small><strong>PS 1.6 · 1.7 · 8 · 9</strong></div>
        </div>
      </section>

      <section className="product-use-case">
        <div className="shell product-use-case-grid">
          <div className="product-use-case-lead">
            <p className="section-label">Una situación real</p>
            <span className="use-case-icon" aria-hidden="true">☎</span>
            <h2>«¿Puedo comprarlo si no tiene stock?»</h2>
            <p>Suena el teléfono. Un cliente quiere completar un pedido, pero la ficha pública indica que no queda stock. Tú sabes que sí lo tienes: lo que falta es actualizar el producto.</p>
          </div>
          <div className="product-use-case-story">
            <article>
              <span>Sin la extensión</span>
              <p>Abres el Back-Office, buscas el producto en el catálogo, localizas sus cantidades, corriges el stock, guardas y vuelves a la tienda para comprobarlo. Mientras tanto, el cliente espera.</p>
            </article>
            <article className="product-use-case-fast">
              <span>Con la extensión</span>
              <p>Sigues en la misma ficha que está viendo el cliente. Corriges la cantidad en el panel, revisas y guardas. La tienda se actualiza sin tener que volver a localizar el producto.</p>
            </article>
            <strong>«Ya puede completar el pedido. Disculpe las molestias.»</strong>
          </div>
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

      <section className="product-trial shell" id="prueba">
        <div className="product-section-heading">
          <p className="section-label">Empieza sin riesgo</p>
          <div>
            <h2>Prueba todo.<br />Decide después.</h2>
            <p>La prueba no empieza al instalar. Empieza cuando la extensión conecta correctamente con tu primera tienda PrestaShop.</p>
          </div>
        </div>
        <div className="trial-grid">
          <article>
            <span>01</span>
            <strong>14 días completos</strong>
            <p>Edita, revisa, verifica, deshaz, dicta y utiliza la IA con todas las funciones activas.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Sin tarjeta para probar</strong>
            <p>Instala la extensión, conecta tu tienda y comprueba el flujo real antes de comprar.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Modo gratuito permanente</strong>
            <p>Cuando termina la prueba, sigue identificando productos y abriendo su ficha exacta del Back-Office.</p>
          </article>
        </div>
      </section>

      <section className="product-pricing" id="planes">
        <div className="shell">
          <div className="product-section-heading light-heading">
            <p className="section-label">Licencias perpetuas</p>
            <div>
              <h2>Un pago.<br />Tu herramienta.</h2>
              <p>Elige según el número de tiendas y perfiles de navegador. Ambas licencias incluyen todas las funciones comerciales.</p>
            </div>
          </div>
          <div className="pricing-grid">
            <article className="pricing-card pricing-card-featured">
              <div className="pricing-card-heading">
                <div><span className="pricing-badge">Recomendado</span><h3>Tienda</h3></div>
                <p><strong>89 €</strong><small>pago único · impuestos aplicables aparte</small></p>
              </div>
              <p className="pricing-audience">Para el propietario o equipo administrativo de una tienda PrestaShop.</p>
              <ul>
                <li>Una tienda PrestaShop</li>
                <li>Hasta 6 perfiles de Chrome o Edge</li>
                <li>Todas las funciones comerciales</li>
                <li>Licencia perpetua, sin cuotas mensuales</li>
              </ul>
              <a className="button button-light" href="#disponibilidad">Elegir Tienda <span>↓</span></a>
            </article>
            <article className="pricing-card">
              <div className="pricing-card-heading">
                <div><span className="pricing-badge pricing-badge-secondary">Multitienda</span><h3>Pro</h3></div>
                <p><strong>179 €</strong><small>pago único · impuestos aplicables aparte</small></p>
              </div>
              <p className="pricing-audience">Para negocios que gestionan varias tiendas o pequeños equipos multitienda.</p>
              <ul>
                <li>Entre 2 y 5 tiendas PrestaShop</li>
                <li>Hasta 20 perfiles de Chrome o Edge</li>
                <li>Todas las funciones comerciales</li>
                <li>Licencia perpetua, sin cuotas mensuales</li>
              </ul>
              <a className="button button-outline-light" href="#disponibilidad">Elegir Pro <span>↓</span></a>
            </article>
          </div>
          <div className="plan-comparison-heading">
            <p className="section-label">Comparación completa</p>
            <h3>Qué conserva el modo gratuito y qué desbloquea cada licencia.</h3>
          </div>
          <div className="plan-comparison-wrap" aria-label="Tabla desplazable de comparación de planes">
            <table className="plan-comparison">
              <thead>
                <tr><th scope="col">Función</th><th scope="col">Gratis</th><th scope="col">Tienda · 89 €</th><th scope="col">Pro · 179 €</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">Identificar el producto y abrir su ficha exacta del Back-Office</th><td><span className="comparison-yes">✓</span></td><td><span className="comparison-yes">✓</span></td><td><span className="comparison-yes">✓</span></td></tr>
                <tr><th scope="row">Edición desde la ficha pública</th><td>—</td><td><span className="comparison-yes">✓</span></td><td><span className="comparison-yes">✓</span></td></tr>
                <tr><th scope="row">Revisión y verificación del guardado</th><td>—</td><td><span className="comparison-yes">✓</span></td><td><span className="comparison-yes">✓</span></td></tr>
                <tr><th scope="row">Historial y deshacer cambios</th><td>—</td><td><span className="comparison-yes">✓</span></td><td><span className="comparison-yes">✓</span></td></tr>
                <tr><th scope="row">Asistente de IA con tu propia clave</th><td>—</td><td><span className="comparison-yes">✓</span></td><td><span className="comparison-yes">✓</span></td></tr>
                <tr><th scope="row">Dictado por voz con revisión</th><td>—</td><td><span className="comparison-yes">✓</span></td><td><span className="comparison-yes">✓</span></td></tr>
                <tr><th scope="row">Tiendas PrestaShop cubiertas por la licencia</th><td>—</td><td>1</td><td>De 2 a 5</td></tr>
                <tr><th scope="row">Perfiles de Chrome o Edge</th><td>Perfil donde está instalada</td><td>Hasta 6</td><td>Hasta 20</td></tr>
                <tr><th scope="row">Duración de la licencia</th><td>No necesaria</td><td>Perpetua</td><td>Perpetua</td></tr>
              </tbody>
            </table>
          </div>
          <div className="license-flow" aria-label="Proceso de compra y activación">
            <span><b>1</b> Instala desde Chrome Web Store</span>
            <span><b>2</b> Prueba 14 días</span>
            <span><b>3</b> Compra en Lemon Squeezy</span>
            <span><b>4</b> Activa tu clave</span>
          </div>
          <p className="commercial-proof">Compatibilidad probada con PrestaShop 1.6, 1.7, 8 y 9 en Google Chrome y Microsoft Edge.</p>
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
          <div><h2 id="gallery-title">Cada función, en su contexto.</h2><p>Consulta el recorrido completo con todos los menús, opciones y pasos como si estuvieras delante del ordenador.</p></div>
        </div>
        <div className="product-guide-download">
          <div>
            <strong>Guía visual completa</strong>
            <span>18 pantallas · Flujo de edición, licencias, IA, dictado y prompts</span>
          </div>
          <a className="button button-dark" href="/productos/fpe-ai/Pep-Logar-FPE-AI-Guia-visual.pdf" download>
            Descargar PDF <span>↓</span>
          </a>
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

      <section className="product-trust shell" aria-label="Garantías comerciales y técnicas">
        <span>Pago único</span>
        <span>Sin suscripción</span>
        <span>Chrome y Edge</span>
        <span>PrestaShop 1.6–9</span>
        <span>6 idiomas</span>
        <span>Datos locales</span>
        <span>Compra gestionada por Lemon Squeezy</span>
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

      <section className="product-cta shell" id="disponibilidad">
        <div>
          <p className="eyebrow light"><span /> Próximo lanzamiento</p>
          <h2>Instala, conecta<br />y decide después de probar.</h2>
          <p>La extensión se publicará en Chrome Web Store. Desde allí podrás iniciar la prueba completa de 14 días y, si te encaja, adquirir una licencia perpetua mediante Lemon Squeezy.</p>
        </div>
        <div className="product-cta-actions">
          <a className="button button-light" href="#planes">Comparar planes <span>↑</span></a>
          <span className="availability-status">Enlace de instalación disponible tras la publicación</span>
        </div>
      </section>

      <p className="product-privacy-link shell">Antes de instalar, consulta la <a href="https://aisolutions.peplogar.com/privacidad/frontend-product-editor-ai/">política de privacidad y tratamiento de datos</a>.</p>

      <SiteFooter />
    </main>
  );
}
