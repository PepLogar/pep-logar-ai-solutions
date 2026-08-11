export type ProductLocale = "es" | "en" | "pt" | "fr" | "it" | "de";

export const productLocalePaths: Record<ProductLocale, string> = {
  es: "/productos/frontend-product-editor-ai/",
  en: "/en/products/frontend-product-editor-ai/",
  pt: "/pt/produtos/frontend-product-editor-ai/",
  fr: "/fr/produits/frontend-product-editor-ai/",
  it: "/it/prodotti/frontend-product-editor-ai/",
  de: "/de/produkte/frontend-product-editor-ai/",
};

const labels: Record<ProductLocale, string> = {
  es: "ES",
  en: "EN",
  pt: "PT",
  fr: "FR",
  it: "IT",
  de: "DE",
};

export function ProductLanguageSwitcher({ current }: { current: ProductLocale }) {
  return (
    <nav className="language-switcher" aria-label="Language selector">
      {Object.entries(productLocalePaths).map(([locale, href]) => (
        <a key={locale} href={href} hrefLang={locale === "pt" ? "pt-PT" : locale} aria-current={locale === current ? "page" : undefined}>
          {labels[locale as ProductLocale]}
        </a>
      ))}
    </nav>
  );
}
