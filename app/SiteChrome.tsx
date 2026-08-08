/* eslint-disable @next/next/no-html-link-for-pages -- Native navigation preserves hash links in the static Plesk export. */

type SiteHeaderProps = {
  current?: "products";
};

const navigation = [
  ["/#capacidades", "Qué hacemos"],
  ["/productos/", "Productos"],
  ["/#metodo", "Cómo trabajamos"],
  ["/#contacto", "Hablemos"],
] as const;

function NavigationLinks({ current, className }: SiteHeaderProps & { className: string }) {
  return (
    <div className={className}>
      {navigation.map(([href, label]) => (
        <a key={href} href={href} aria-current={label === "Productos" && current === "products" ? "page" : undefined}>
          {label}
        </a>
      ))}
    </div>
  );
}

export function SiteHeader({ current }: SiteHeaderProps) {
  return (
    <nav className="nav shell" aria-label="Navegación principal">
      <a className="brand" href="/#inicio" aria-label="Pep Logar AI Solutions, inicio">
        <span className="brand-mark" aria-hidden="true"><i>P</i><i>L</i></span>
        <span>PEP LOGAR</span>
        <span className="brand-unit">/ AI SOLUTIONS</span>
      </a>
      <NavigationLinks className="nav-links" current={current} />
      <a className="nav-cta" href="mailto:info@aisolutions.peplogar.com?subject=Quiero%20conocer%20vuestras%20soluciones">
        Explorar una solución <span aria-hidden="true">↗</span>
      </a>
      <details className="mobile-menu">
        <summary>
          <span className="mobile-menu-label">Menú</span>
          <span className="mobile-menu-icon" aria-hidden="true"><i /><i /></span>
        </summary>
        <NavigationLinks className="mobile-menu-links" current={current} />
      </details>
    </nav>
  );
}

export function SiteFooter() {
  return (
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
        <a href="/privacidad/frontend-product-editor-ai/">Privacidad de Frontend Product Editor + AI</a>
        <p>© {new Date().getFullYear()} Pep Logar AI Solutions</p>
      </div>
    </footer>
  );
}
