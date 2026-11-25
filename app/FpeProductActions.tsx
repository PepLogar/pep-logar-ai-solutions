import { fpeCheckoutLinks } from "./fpeCheckoutLinks";
import "./fpe-product.css";

type ActionsCopy = {
  trial: string;
  demo: string;
  guide: string;
  device: string;
};

export function FpeProductActions({ copy, demoHref, footer = false }: {
  copy: ActionsCopy;
  demoHref: string;
  footer?: boolean;
}) {
  const buttonClass = footer ? "button button-light" : "button button-dark";
  const noteId = footer ? "fpe-footer-device" : "fpe-hero-device";
  const install = (className: string) => (
    <a className={className} href={fpeCheckoutLinks.chromeWebStore} target="_blank" rel="noopener noreferrer" aria-describedby={noteId}>
      {copy.trial} <span aria-hidden="true">↗</span>
    </a>
  );
  const demo = (className: string) => (
    <a className={className} href={demoHref}>
      {copy.demo} <span aria-hidden="true">{footer ? "↑" : "↓"}</span>
    </a>
  );

  return (
    <div className={footer ? "fpe-actions fpe-actions-footer" : "hero-actions fpe-actions"}>
      <div className="fpe-actions-desktop">
        {install(buttonClass)}
        {demo("text-link")}
      </div>
      <div className="fpe-actions-mobile">
        {demo(buttonClass)}
        {install("text-link")}
      </div>
      <p className="fpe-device-note" id={noteId}>{copy.device}</p>
      {!footer && (
        <a className="text-link fpe-guide" href="/productos/fpe-ai/Pep-Logar-FPE-AI-Guia-visual.pdf" hrefLang="es" download>
          {copy.guide}
        </a>
      )}
    </div>
  );
}
