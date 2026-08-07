import Link from "next/link";

type SiteHeaderProps = {
  current?: "products";
};

export function SiteHeader({ current }: SiteHeaderProps) {
  return (
    <nav className="nav shell" aria-label="Navegación principal">
      <Link className="brand" href="/#inicio" aria-label="Pep Logar AI Solutions, inicio">
        <span className="brand-mark" aria-hidden="true"><i>P</i><i>L</i></span>
        <span>PEP LOGAR</span>
        <span className="brand-unit">/ AI SOLUTIONS</span>
      </Link>
      <div className="nav-links">
        <Link href="/#capacidades">Qué hacemos</Link>
        <Link href="/productos" aria-current={current === "products" ? "page" : undefined}>Productos</Link>
        <Link href="/#metodo">Cómo trabajamos</Link>
        <Link href="/#contacto">Hablemos</Link>
      </div>
      <a className="nav-cta" href="mailto:info@aisolutions.peplogar.com?subject=Quiero%20conocer%20vuestras%20soluciones">
        Explorar una solución <span aria-hidden="true">↗</span>
      </a>
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
        <p>© {new Date().getFullYear()} Pep Logar AI Solutions</p>
      </div>
    </footer>
  );
}
