import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../SiteChrome";

export const metadata: Metadata = {
  title: "Compra, soporte y devoluciones de Frontend Product Editor + AI | Pep Logar",
  description: "Condiciones de compra, licencia, soporte, desistimiento y devoluciones de Pep Logar Frontend Product Editor + AI.",
  alternates: { canonical: "/condiciones/frontend-product-editor-ai/" },
};

export default function CommercialTermsPage() {
  return (
    <main>
      <SiteHeader current="products" />

      <header className="legal-hero shell">
        <p className="eyebrow"><span /> Condiciones comerciales</p>
        <h1>Compra, soporte<br />y devoluciones</h1>
        <p>Información aplicable a la compra y uso de Pep Logar Frontend Product Editor + AI, incluida la licencia, la asistencia y la forma de solicitar una devolución.</p>
        <small>Última actualización · 11 de agosto de 2026</small>
      </header>

      <article className="legal-content shell">
        <section>
          <h2>1. Producto y proveedor</h2>
          <p><strong>Todo en Tinta Pep Logar S.L.</strong> · CIF B86378981 · Unidad Pep Logar AI Solutions · Av. Europa, 232, 28905 Getafe, Madrid, España.</p>
          <p>Estas condiciones regulan la licencia y el soporte de Pep Logar Frontend Product Editor + AI. La extensión se instala en Google Chrome o Microsoft Edge y permite trabajar con productos PrestaShop desde el navegador, sin instalar un módulo en la tienda.</p>
        </section>

        <section>
          <h2>2. Vendedor y checkout</h2>
          <p>La compra se completa fuera de la extensión mediante Lemon Squeezy, que actúa como comerciante registrado y revendedor autorizado. El contrato de compraventa, el cobro, los impuestos, la factura y el reembolso se tramitan con Lemon Squeezy; Todo en Tinta Pep Logar S.L. suministra y licencia el software.</p>
          <p>Antes de pagar, el checkout muestra el precio final, los impuestos aplicables y las <a href="https://www.lemonsqueezy.com/buyer-terms" target="_blank" rel="noopener noreferrer">condiciones de compra de Lemon Squeezy</a>. Google y Chrome Web Store no procesan el pago ni son el vendedor.</p>
        </section>

        <section>
          <h2>3. Prueba y modo gratuito</h2>
          <p>La primera conexión correcta con PrestaShop inicia una prueba completa de 14 días, sin tarjeta. Una vez terminada, el modo gratuito permanente continúa identificando el producto o la combinación y permite abrir su ficha exacta del Back-Office.</p>
          <p>La prueba permite comprobar el funcionamiento en la tienda real antes de comprar. La edición desde el Front-Office, la revisión y verificación, el historial y deshacer, la IA, el dictado y los prompts editables requieren una licencia comercial cuando finaliza la prueba.</p>
        </section>

        <section>
          <h2>4. Licencia adquirida</h2>
          <p>La compra concede una licencia de uso perpetua, no exclusiva y no transferible para la versión y los derechos incluidos en el plan adquirido. No es una suscripción y no genera renovaciones automáticas.</p>
          <ul>
            <li><strong>Tienda:</strong> una tienda PrestaShop y hasta seis activaciones en perfiles de Chrome o Edge.</li>
            <li><strong>Pro:</strong> entre dos y cinco tiendas PrestaShop y hasta veinte activaciones en perfiles de Chrome o Edge.</li>
          </ul>
          <p>La licencia no incluye automáticamente funciones mayores que se comercialicen en el futuro como otro producto o generación. Las correcciones y mejoras que se distribuyan para la versión adquirida se facilitarán sin convertir la licencia en una suscripción.</p>
        </section>

        <section>
          <h2>5. Entrega y activaciones</h2>
          <p>La clave se entrega electrónicamente mediante la confirmación del pedido y queda accesible en <a href="https://app.lemonsqueezy.com/my-orders" target="_blank" rel="noopener noreferrer">Mis pedidos de Lemon Squeezy</a>. Cada perfil del navegador genera un identificador aleatorio y cuenta como una activación independiente.</p>
          <p>Antes de cambiar de ordenador, navegador o perfil, debe utilizarse la opción de desactivar para liberar la activación. Si se pierde el perfil sin hacerlo, soporte podrá revisar y liberar la activación tras verificar el pedido.</p>
        </section>

        <section>
          <h2>6. Soporte incluido</h2>
          <p>El soporte cubre la instalación de la extensión, la conexión con una tienda compatible, la activación o recuperación de la licencia y la investigación de comportamientos reproducibles del producto. Se atiende por correo en <a href="mailto:info@aisolutions.peplogar.com?subject=Soporte%20Frontend%20Product%20Editor%20AI">info@aisolutions.peplogar.com</a>, en días laborables de España.</p>
          <p>El objetivo es enviar una primera respuesta en un máximo habitual de dos días laborables; no constituye un acuerdo de nivel de servicio. Para diagnosticar una incidencia pueden solicitarse la versión del navegador y PrestaShop, los pasos de reproducción y capturas sin credenciales ni datos innecesarios.</p>
          <p>No se incluyen desarrollos a medida, administración del servidor o de PrestaShop, reparación de módulos o temas ajenos, ni soporte interno de proveedores de IA o de voz. Sí se ayudará a distinguir si el problema pertenece a la extensión o a un tercero.</p>
        </section>

        <section>
          <h2>7. Devoluciones y desistimiento</h2>
          <p>Puede solicitarse una devolución por cobro duplicado o incorrecto, falta de entrega de la clave, imposibilidad de activación atribuible al servicio de licencias o incompatibilidad con los requisitos publicados que no pueda resolverse mediante soporte. También se atenderán los supuestos exigidos por la normativa aplicable.</p>
          <p>Para facilitar la revisión, conviene escribir dentro de los 14 días naturales posteriores a la compra a <a href="mailto:info@aisolutions.peplogar.com?subject=Solicitud%20de%20devolucion%20Frontend%20Product%20Editor%20AI">info@aisolutions.peplogar.com</a> indicando el número de pedido y el correo utilizado. No es necesario justificar una solicitud cuando la ley reconozca el derecho de desistimiento.</p>
          <p>Cuando el comprador sea consumidor, dispone del derecho de desistimiento que establezca la normativa aplicable. En el suministro inmediato de contenido digital, ese derecho puede dejar de ser aplicable cuando la ejecución haya comenzado después de que el comprador haya dado su consentimiento expreso y reconocido la pérdida del derecho. La información y aceptación mostradas en el checkout determinan si concurre esa excepción.</p>
          <p>Lemon Squeezy procesa el reembolso al medio de pago original y puede revisar la solicitud conforme a sus condiciones y obligaciones como comerciante registrado. Una devolución aceptada desactiva la licencia reembolsada. Nada de esta política limita los derechos irrenunciables del consumidor ni los remedios por falta de conformidad.</p>
        </section>

        <section>
          <h2>8. Compatibilidad y conformidad</h2>
          <p>Los requisitos y versiones comprobadas se publican en la página del producto. La compatibilidad depende también de la configuración, permisos, tema, módulos, personalizaciones y sesión administrativa de cada tienda. La prueba de 14 días está destinada a validar ese entorno concreto.</p>
          <p>Si el producto no se ajusta a lo anunciado, se ofrecerá diagnóstico y, cuando proceda, corrección, sustitución o devolución conforme a la normativa aplicable. Las limitaciones técnicas de un tercero no eliminan los derechos legales del comprador.</p>
        </section>

        <section>
          <h2>9. Uso permitido</h2>
          <p>La clave no puede venderse, alquilarse, publicarse ni compartirse fuera del número de tiendas y activaciones contratado. No está permitido eludir los controles de licencia, interferir con el servicio o utilizar la extensión para acceder a tiendas o datos sin autorización.</p>
          <p>El usuario es responsable de sus credenciales, de los permisos de Back-Office y de revisar los cambios antes de guardarlos. La extensión no sustituye las copias de seguridad ni los controles internos de la tienda.</p>
        </section>

        <section>
          <h2>10. Disponibilidad y terceros</h2>
          <p>La extensión depende del navegador, PrestaShop y, para funciones opcionales, del proveedor de IA o voz seleccionado. Las activaciones requieren acceso temporal al servicio de licencias; una licencia validada conserva un periodo de gracia sin conexión según se explica en la propia extensión.</p>
          <p>Pueden realizarse mantenimientos razonables o adaptaciones necesarias por cambios de seguridad y compatibilidad. No se garantiza la disponibilidad ininterrumpida de servicios de terceros ni configuraciones que se aparten de los requisitos publicados.</p>
        </section>

        <section>
          <h2>11. Responsabilidad y derechos legales</h2>
          <p>En relaciones profesionales, y en la medida permitida por la ley, la responsabilidad contractual directa queda limitada al importe pagado por la licencia afectada. No se excluye responsabilidad que legalmente no pueda limitarse, ni se reducen las garantías o derechos obligatorios de consumidores y usuarios.</p>
          <p>La relación de licencia con el proveedor se rige por la legislación española, sin privar al consumidor de la protección imperativa de su país de residencia. La compraventa procesada por Lemon Squeezy se somete además a sus condiciones de comprador.</p>
        </section>

        <section>
          <h2>12. Contacto y cambios</h2>
          <address>Todo en Tinta Pep Logar S.L.<br />Av. Europa, 232 · 28905 Getafe, Madrid, España<br /><a href="mailto:info@aisolutions.peplogar.com">info@aisolutions.peplogar.com</a> · <a href="tel:+34911419634">(+34) 91 141 96 34</a></address>
          <p>Las condiciones aplicables a una compra son las mostradas y aceptadas en el momento de realizarla. Las actualizaciones posteriores se publicarán en esta página con su fecha y no modificarán retroactivamente una licencia ya adquirida, salvo que sean necesarias para cumplir la ley.</p>
        </section>

        <div className="legal-product-link">
          <p>Consulta funciones, compatibilidad, prueba y planes antes de comprar.</p>
          <Link className="button button-dark" href="/productos/frontend-product-editor-ai">Ver Frontend Product Editor + AI <span>↗</span></Link>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
