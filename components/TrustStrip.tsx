import { siteConfig } from "@/content/site";
import { whatsappHref } from "@/lib/contact";
import { CheckIcon, GoogleIcon, MapPinIcon, WhatsAppIcon } from "./Icons";

export function TrustStrip() {
  return (
    <section className="trust" aria-label="Motivos para elegir Lozartico">
      <div className="container trust__inner">
        <a
          className="trust__item"
          href={siteConfig.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="trust__icon">
            <GoogleIcon size={22} />
          </span>
          <span>
            <strong>Opiniones reales</strong>
            <span>Consulta la ficha de Google</span>
          </span>
        </a>

        <div className="trust__item">
          <span className="trust__icon">
            <CheckIcon size={22} />
          </span>
          <span>
            <strong>+3 años de experiencia</strong>
            <span>Trabajo cuidado y directo</span>
          </span>
        </div>

        <div className="trust__item">
          <span className="trust__icon">
            <MapPinIcon size={22} />
          </span>
          <span>
            <strong>Valencia y Gran Canaria</strong>
            <span>Dos zonas de servicio</span>
          </span>
        </div>

        <a
          className="trust__item"
          href={whatsappHref("Hola, quiero solicitar un presupuesto.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="trust__icon">
            <WhatsAppIcon size={22} />
          </span>
          <span>
            <strong>Presupuesto por WhatsApp</strong>
            <span>Sin formularios ni esperas</span>
          </span>
        </a>
      </div>
    </section>
  );
}
