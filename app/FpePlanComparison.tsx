import type { ProductLocale } from "./ProductLanguageSwitcher";

type ComparisonCopy = {
  label: string;
  heading: string;
  feature: string;
  free: string;
  yes: string;
  no: string;
  identify: string;
  paidFeatures: string[];
  limits: [string, string, string, string][];
};

const comparisons: Record<ProductLocale, ComparisonCopy> = {
  es: {
    label: "Comparación completa", heading: "Qué conserva el modo gratuito y qué desbloquea cada licencia.",
    feature: "Función", free: "Gratis", yes: "Sí", no: "No",
    identify: "Identificar el producto y abrir su ficha exacta del Back-Office",
    paidFeatures: ["Edición desde la ficha pública", "Revisión y verificación del guardado", "Historial y deshacer cambios", "Asistente de IA con tu propia clave", "Dictado por voz con revisión"],
    limits: [
      ["Tiendas PrestaShop cubiertas por la licencia", "Sin licencia", "1", "De 2 a 5"],
      ["Perfiles de Chrome o Edge", "Perfil donde está instalada", "Hasta 6", "Hasta 20"],
      ["Duración de la licencia", "No necesaria", "Perpetua", "Perpetua"],
    ],
  },
  en: {
    label: "Plan comparison", heading: "Which features stay free after the trial?",
    feature: "Feature", free: "Free", yes: "Yes", no: "No",
    identify: "Identify a product and open its exact Back Office page",
    paidFeatures: ["Edit from the storefront", "Review changes and verify the save", "View history and undo changes", "Use AI with your own API key", "Dictate and review text"],
    limits: [
      ["PrestaShop shops covered by the licence", "No licence", "1", "2 to 5"],
      ["Chrome or Edge profiles", "The installed profile", "Up to 6", "Up to 20"],
      ["Licence duration", "Not required", "Perpetual", "Perpetual"],
    ],
  },
  pt: {
    label: "Comparação dos planos", heading: "Que funções continuam gratuitas após o teste?",
    feature: "Função", free: "Grátis", yes: "Sim", no: "Não",
    identify: "Identificar o produto e abrir a respetiva página no Back Office",
    paidFeatures: ["Editar a partir da loja", "Rever alterações e verificar a gravação", "Consultar o histórico e anular alterações", "Usar IA com chave própria", "Ditar e rever o texto"],
    limits: [
      ["Lojas PrestaShop abrangidas pela licença", "Sem licença", "1", "2 a 5"],
      ["Perfis do Chrome ou Edge", "Perfil onde está instalada", "Até 6", "Até 20"],
      ["Duração da licença", "Dispensada", "Perpétua", "Perpétua"],
    ],
  },
  fr: {
    label: "Comparaison des offres", heading: "Quelles fonctions restent gratuites après l’essai ?",
    feature: "Fonction", free: "Gratuit", yes: "Oui", no: "Non",
    identify: "Identifier le produit et ouvrir sa fiche dans le Back-Office",
    paidFeatures: ["Modifier la fiche depuis la boutique", "Revoir les modifications et vérifier l’enregistrement", "Consulter l’historique et annuler les modifications", "Utiliser l’IA avec sa propre clé", "Dicter et relire le texte"],
    limits: [
      ["Boutiques PrestaShop couvertes par la licence", "Sans licence", "1", "2 à 5"],
      ["Profils Chrome ou Edge", "Profil où l’extension est installée", "Jusqu’à 6", "Jusqu’à 20"],
      ["Durée de la licence", "Sans objet", "Perpétuelle", "Perpétuelle"],
    ],
  },
  it: {
    label: "Confronto dei piani", heading: "Quali funzioni restano gratuite dopo la prova?",
    feature: "Funzione", free: "Gratis", yes: "Sì", no: "No",
    identify: "Identificare il prodotto e aprire la sua scheda nel Back Office",
    paidFeatures: ["Modificare la scheda dal negozio", "Rivedere le modifiche e verificare il salvataggio", "Consultare la cronologia e annullare le modifiche", "Usare l’IA con la propria chiave", "Dettare e rivedere il testo"],
    limits: [
      ["Negozi PrestaShop coperti dalla licenza", "Senza licenza", "1", "Da 2 a 5"],
      ["Profili Chrome o Edge", "Profilo in cui è installata", "Fino a 6", "Fino a 20"],
      ["Durata della licenza", "Non richiesta", "Perpetua", "Perpetua"],
    ],
  },
  de: {
    label: "Paketvergleich", heading: "Welche Funktionen bleiben nach dem Test kostenlos?",
    feature: "Funktion", free: "Gratis", yes: "Ja", no: "Nein",
    identify: "Produkt erkennen und die zugehörige Seite im Backoffice öffnen",
    paidFeatures: ["Produkt direkt im Shop bearbeiten", "Änderungen prüfen und das Speichern bestätigen", "Verlauf anzeigen und Änderungen rückgängig machen", "KI mit eigenem API-Schlüssel nutzen", "Text diktieren und überprüfen"],
    limits: [
      ["PrestaShop-Shops pro Lizenz", "Ohne Lizenz", "1", "2 bis 5"],
      ["Chrome- oder Edge-Profile", "Profil mit installierter Erweiterung", "Bis zu 6", "Bis zu 20"],
      ["Laufzeit der Lizenz", "Keine Lizenz nötig", "Unbefristet", "Unbefristet"],
    ],
  },
};

export function FpePlanComparison({ locale, storeName }: { locale: ProductLocale; storeName: string }) {
  const c = comparisons[locale];
  const plans = [c.free, `${storeName} · 89 €`, "Pro · 179 €"];
  const rows = [
    [c.identify, c.yes, c.yes, c.yes],
    ...c.paidFeatures.map(feature => [feature, c.no, c.yes, c.yes]),
    ...c.limits,
  ];

  return (
    <>
      <div className="plan-comparison-heading">
        <p className="section-label">{c.label}</p>
        <h3 id="fpe-comparison-title">{c.heading}</h3>
      </div>
      <div className="plan-comparison-wrap fpe-comparison-wrap">
        <table className="plan-comparison fpe-comparison" role="table" aria-labelledby="fpe-comparison-title">
          <thead>
            <tr role="row">
              <th scope="col" role="columnheader">{c.feature}</th>
              {plans.map(plan => <th key={plan} scope="col" role="columnheader">{plan}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map(([feature, ...values]) => (
              <tr key={feature} role="row">
                <th scope="row" role="rowheader">{feature}</th>
                {values.map((value, index) => (
                  <td key={plans[index]}>
                    <span className="fpe-plan-label" aria-hidden="true">{plans[index]}</span>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
