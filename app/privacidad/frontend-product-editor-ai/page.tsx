import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../SiteChrome";

export const metadata: Metadata = {
  title: "Privacidad de Frontend Product Editor + AI | Pep Logar",
  description: "Política de privacidad y tratamiento de datos de la extensión Pep Logar Frontend Product Editor + AI.",
  alternates: { canonical: "/privacidad/frontend-product-editor-ai/" },
};

export default function ExtensionPrivacyPage() {
  return (
    <main className="legal-page">
      <SiteHeader current="products" />
      <header className="legal-hero shell">
        <p className="eyebrow"><span /> Privacidad del producto</p>
        <h1>Frontend Product<br />Editor + AI</h1>
        <p>Cómo trata la extensión los perfiles de tienda, el historial local, las claves de IA y licencia, el contenido de PrestaShop, el dictado y las activaciones comerciales.</p>
        <small>Última actualización: 10 de agosto de 2026 · Versión de la política 1.1</small>
      </header>

      <article className="legal-content shell">
        <section>
          <h2>1. Responsable</h2>
          <p><strong>Todo en Tinta Pep Logar S.L.</strong> · CIF B86378981 · Unidad Pep Logar AI Solutions.</p>
          <address>Av. Europa, 232 · 28905 Getafe, Madrid, España<br />info@aisolutions.peplogar.com · (+34) 91 141 96 34</address>
        </section>
        <section>
          <h2>2. Datos guardados en el navegador</h2>
          <p>Chrome o Edge guarda localmente los perfiles de las instalaciones, rutas administrativas, preferencias, historial de cambios de la propia extensión, diagnósticos, prompts y configuración de inteligencia artificial, incluidas las claves introducidas por el usuario.</p>
          <p>Para administrar la prueba y las licencias también conserva la fecha de inicio de la prueba, la clave de licencia, un UUID aleatorio del perfil, el identificador de activación, el plan, los derechos y la fecha de la última validación.</p>
          <p>La extensión no lee el historial general del navegador. Solo conserva las rutas configuradas y las URLs de los productos incluidas en su propio historial de cambios.</p>
          <p>La extensión no sincroniza estos datos mediante una cuenta propia. Los datos de licencia se comunican únicamente al servicio descrito en el apartado siguiente.</p>
        </section>
        <section>
          <h2>3. Comunicaciones necesarias</h2>
          <ul>
            <li><strong>PrestaShop:</strong> utiliza la sesión administrativa abierta por el usuario para leer, editar y verificar el producto solicitado.</li>
            <li><strong>Proveedor de IA:</strong> solo al ejecutar una acción de IA se envían directamente al proveedor elegido el contenido del campo y el contexto mostrado en la vista previa.</li>
            <li><strong>Dictado:</strong> el reconocimiento de voz lo proporciona el navegador y, según el navegador y su configuración, el audio puede ser procesado por el servicio de voz de su proveedor, por ejemplo Google en Chrome o Microsoft en Edge.</li>
            <li><strong>Licencias:</strong> al activar, comprobar o desactivar una licencia se envían por HTTPS la clave, el UUID aleatorio del perfil y, cuando existe, el identificador de activación a un Worker de Pep Logar AI Solutions alojado en Cloudflare, que consulta Lemon Squeezy.</li>
          </ul>
          <p>La comprobación de licencia no incluye contenido de productos, historial, claves de IA ni actividad general de navegación. El Worker devuelve únicamente el estado, plan y derechos necesarios y no mantiene una base de datos propia con claves completas o datos de cliente.</p>
          <p>Cada proveedor aplica sus propias condiciones, conservación y ubicación de procesamiento. Consulta las políticas de <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare</a> y <a href="https://www.lemonsqueezy.com/privacy" target="_blank" rel="noopener noreferrer">Lemon Squeezy</a>.</p>
        </section>
        <section>
          <h2>4. Prueba, modo gratuito y compras</h2>
          <p>La instalación incluye una prueba completa de 14 días desde la primera conexión correcta con PrestaShop. Después permanece disponible el modo gratuito, que identifica el producto o combinación y permite abrir su ficha exacta del Back-Office.</p>
          <p>La edición desde el Front-Office, la revisión y verificación del guardado, el historial y deshacer, la IA, el dictado y los prompts editables requieren una licencia comercial.</p>
          <p>La compra se realiza fuera de la extensión mediante Lemon Squeezy, comerciante registrado. Lemon Squeezy trata los datos de pedido, facturación y pago conforme a su propia política. La extensión no solicita, recibe ni almacena datos de tarjeta. Google no procesa el pago ni es el vendedor.</p>
        </section>
        <section>
          <h2>5. Finalidades y bases</h2>
          <p>Los datos locales y las comunicaciones con PrestaShop se utilizan para ejecutar las funciones que el usuario solicita. La activación y comprobación de licencias son necesarias para aplicar la prueba, el modo gratuito y los derechos del plan adquirido.</p>
          <p>Las acciones opcionales de IA y dictado solo se ejecutan después de una acción expresa del usuario. Las comunicaciones de soporte se atienden a petición del interesado. Las medidas técnicas de prevención de abuso y seguridad responden al interés legítimo de proteger el servicio, sin utilizar los datos para publicidad o perfilado.</p>
        </section>
        <section>
          <h2>6. Seguridad</h2>
          <p>Los proveedores remotos de IA deben utilizar HTTPS. HTTP solo se admite para servicios ejecutados localmente en <code>localhost</code>, <code>127.0.0.1</code> o <code>::1</code>. Las claves quedan almacenadas en el perfil local del navegador y no deben utilizarse en equipos o perfiles compartidos.</p>
          <p>El servicio de licencias utiliza HTTPS y respuestas sin caché. El almacenamiento local de una extensión no debe considerarse un almacén cifrado; corresponde al usuario proteger el acceso a su perfil del navegador.</p>
        </section>
        <section>
          <h2>7. Permisos</h2>
          <p>Los accesos a dominios son opcionales y se solicitan al conectar una instalación de PrestaShop o un proveedor de IA. Los permisos de almacenamiento, pestañas, scripts y panel lateral permiten conservar la configuración, usar el formulario administrativo nativo y mostrar las funciones solicitadas.</p>
          <p>Al cambiar de proveedor o borrar datos, la extensión retira los permisos opcionales que ya no necesita.</p>
        </section>
        <section>
          <h2>8. Conservación y eliminación</h2>
          <p>Los datos permanecen mientras la extensión esté instalada o hasta que el usuario utilice sus controles de eliminación:</p>
          <ul>
            <li>Eliminar un perfil borra también su historial y diagnósticos asociados.</li>
            <li>La sección IA puede borrar proveedores, claves y prompts personalizados.</li>
            <li>El botón de desactivación libera la activación remota y elimina localmente la licencia.</li>
            <li>La sección Acerca de puede borrar todos los datos, preferencias y permisos concedidos.</li>
            <li>Desinstalar la extensión o borrar sus datos desde el navegador elimina igualmente el almacenamiento local.</li>
          </ul>
          <p>Si se desinstala o borra el almacenamiento sin desactivar previamente, la activación puede seguir contabilizada en Lemon Squeezy y deberá liberarse mediante soporte. Lemon Squeezy conserva los datos de compra de acuerdo con sus obligaciones y su política.</p>
          <p>Los cambios ya guardados en PrestaShop no se deshacen al borrar la extensión.</p>
        </section>
        <section>
          <h2>9. Seguimiento y usos prohibidos</h2>
          <p>La extensión no incluye publicidad, analítica del desarrollador, venta de datos, elaboración de perfiles comerciales ni servidores de seguimiento. Los datos no se utilizan para determinar solvencia, seguros, empleo ni decisiones automatizadas sobre personas.</p>
        </section>
        <section>
          <h2>10. Compromiso de uso limitado</h2>
          <p>Los datos se utilizan únicamente para ofrecer la función concreta solicitada por el usuario. Solo se transfieren a la instalación de PrestaShop, al proveedor de IA, al servicio de voz elegido o al servicio de licencias cuando dicha transferencia es necesaria para ejecutar esa función.</p>
          <p>No se venden, no se utilizan para publicidad y el personal del desarrollador no los lee, salvo el contenido específico que el propio usuario decida enviar voluntariamente para solicitar soporte.</p>
          <p>El uso de la información obtenida mediante los permisos del navegador cumple la Política de Datos de Usuario de Chrome Web Store, incluidos sus requisitos de Uso Limitado.</p>
        </section>
        <section>
          <h2>11. Derechos y contacto</h2>
          <p>Pep Logar AI Solutions no recibe una copia de los datos que permanecen únicamente en el navegador. Para información comunicada directamente al desarrollador se puede solicitar acceso, rectificación, supresión, limitación u oposición escribiendo a <a href="mailto:info@aisolutions.peplogar.com?subject=Privacidad%20Frontend%20Product%20Editor%20AI">info@aisolutions.peplogar.com</a>.</p>
          <p>También puede presentarse una reclamación ante la autoridad de protección de datos competente. Las solicitudes enviadas a proveedores externos deben dirigirse además al proveedor correspondiente.</p>
        </section>
        <aside className="legal-product-link">
          <p>Consulta las funciones, compatibilidad y demostración del producto.</p>
          <Link className="button button-dark" href="/productos/frontend-product-editor-ai">Ver Frontend Product Editor + AI <span>↗</span></Link>
        </aside>
      </article>
      <SiteFooter />
    </main>
  );
}
