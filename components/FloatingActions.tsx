import { siteConfig } from "@/content/site";
import { whatsappHref } from "@/lib/contact";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export function WhatsAppFloat() {
  return (
    <nav className="whatsapp-float" aria-label="Contacto rápido">
      <a
        href={whatsappHref("Hola, quiero solicitar un presupuesto.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir presupuesto por WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </nav>
  );
}

export function MobileCTA() {
  return (
    <nav className="mobile-cta" aria-label="Acciones rápidas">
      <a className="mobile-cta__call" href={`tel:${siteConfig.phone}`}>
        <PhoneIcon size={18} />
        Llamar
      </a>
      <a
        className="mobile-cta__whatsapp"
        href={whatsappHref("Hola, quiero solicitar un presupuesto.")}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon size={20} />
        WhatsApp
      </a>
    </nav>
  );
}
