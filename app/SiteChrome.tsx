/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element -- Native links preserve static Plesk navigation and the shared raster mark matches the extension identity. */

type SiteHeaderProps = {
  current?: "products";
  locale?: "es" | "en" | "pt" | "fr" | "it" | "de";
};

const chromeCopy = {
  es: { nav: ["Qué hacemos", "Productos", "Cómo trabajamos", "Hablemos"], cta: "Explorar una solución", menu: "Menú", aria: "Navegación principal", privacy: "Privacidad de Frontend Product Editor + AI", terms: "Compra, soporte y devoluciones" },
  en: { nav: ["What we do", "Products", "How we work", "Contact"], cta: "Explore a solution", menu: "Menu", aria: "Main navigation", privacy: "Product privacy (Spanish)", terms: "Purchase, support and refunds (Spanish)" },
  pt: { nav: ["O que fazemos", "Produtos", "Como trabalhamos", "Contacto"], cta: "Explorar uma solução", menu: "Menu", aria: "Navegação principal", privacy: "Privacidade do produto (espanhol)", terms: "Compra, suporte e devoluções (espanhol)" },
  fr: { nav: ["Nos solutions", "Produits", "Notre méthode", "Contact"], cta: "Explorer une solution", menu: "Menu", aria: "Navigation principale", privacy: "Confidentialité du produit (espagnol)", terms: "Achat, assistance et remboursements (espagnol)" },
  it: { nav: ["Cosa facciamo", "Prodotti", "Come lavoriamo", "Contatti"], cta: "Esplora una soluzione", menu: "Menu", aria: "Navigazione principale", privacy: "Privacy del prodotto (spagnolo)", terms: "Acquisto, assistenza e rimborsi (spagnolo)" },
  de: { nav: ["Was wir tun", "Produkte", "Arbeitsweise", "Kontakt"], cta: "Lösung entdecken", menu: "Menü", aria: "Hauptnavigation", privacy: "Produktdatenschutz (Spanisch)", terms: "Kauf, Support und Erstattung (Spanisch)" },
} as const;

const productPaths = { es: "/productos/", en: "/en/products/frontend-product-editor-ai/", pt: "/pt/produtos/frontend-product-editor-ai/", fr: "/fr/produits/frontend-product-editor-ai/", it: "/it/prodotti/frontend-product-editor-ai/", de: "/de/produkte/frontend-product-editor-ai/" } as const;

function NavigationLinks({ current, className, locale = "es" }: SiteHeaderProps & { className: string }) {
  const labels = chromeCopy[locale].nav;
  const navigation = [["/#capacidades", labels[0]], [productPaths[locale], labels[1]], ["/#metodo", labels[2]], ["/#contacto", labels[3]]] as const;
  return (
    <div className={className}>
      {navigation.map(([href, label]) => (
        <a key={href} href={href} aria-current={href === productPaths[locale] && current === "products" ? "page" : undefined}>
          {label}
        </a>
      ))}
    </div>
  );
}

export function SiteHeader({ current, locale = "es" }: SiteHeaderProps) {
  const labels = chromeCopy[locale];
  return (
    <nav className="nav shell" aria-label={labels.aria}>
      <a className="brand" href="/#inicio" aria-label="Pep Logar AI Solutions, inicio">
        <span className="brand-mark" aria-hidden="true"><img src="/pep-logar-logo.png" alt="" /></span>
        <span>PEP LOGAR</span>
        <span className="brand-unit">/ AI SOLUTIONS</span>
      </a>
      <NavigationLinks className="nav-links" current={current} locale={locale} />
      <a className="nav-cta" href="mailto:info@aisolutions.peplogar.com?subject=Quiero%20conocer%20vuestras%20soluciones">
        {labels.cta} <span aria-hidden="true">↗</span>
      </a>
      <details className="mobile-menu">
        <summary>
          <span className="mobile-menu-label">{labels.menu}</span>
          <span className="mobile-menu-icon" aria-hidden="true"><i /><i /></span>
        </summary>
        <NavigationLinks className="mobile-menu-links" current={current} locale={locale} />
      </details>
    </nav>
  );
}

export function SiteFooter({ locale = "es" }: { locale?: SiteHeaderProps["locale"] }) {
  const labels = chromeCopy[locale];
  return (
    <footer className="footer shell">
      <div className="brand"><span className="brand-mark" aria-hidden="true"><img src="/pep-logar-logo.png" alt="" /></span><span>PEP LOGAR</span><span className="brand-unit">/ AI SOLUTIONS</span></div>
      <address className="footer-address">
        <strong>Todo en Tinta Pep Logar S.L.</strong>
        <span>CIF B86378981</span>
        <span>Av. Europa, 232 · 28905 Getafe, Sector III · España</span>
      </address>
      <div className="footer-meta">
        <a href="mailto:info@aisolutions.peplogar.com">info@aisolutions.peplogar.com</a>
        <a href="tel:+34911419634">(+34) 91 141 96 34</a>
        <a href="/privacidad/frontend-product-editor-ai/">{labels.privacy}</a>
        <a href="/condiciones/frontend-product-editor-ai/">{labels.terms}</a>
        <p>© {new Date().getFullYear()} Pep Logar AI Solutions</p>
      </div>
    </footer>
  );
}
