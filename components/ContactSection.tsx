import type { CSSProperties } from "react";

import { siteConfig } from "@/content/site";
import { mailtoHref, whatsappHref } from "@/lib/contact";
import {
  ArrowUpRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./Icons";
import { SectionHeading } from "./SectionHeading";

type ContactSectionProps = {
  service?: string;
};

export function ContactSection({ service }: ContactSectionProps) {
  const message = service
    ? `Hola, quiero solicitar un presupuesto para ${service}.`
    : "Hola, quiero solicitar un presupuesto.";

  return (
    <section className="section section--navy contact" id="contacto">
      <div className="container contact__grid">
        <div className="contact__intro" data-reveal>
          <SectionHeading
            eyebrow="Contacto"
            title={
              service ? "Hablemos de tu proyecto" : "Cuéntanos qué necesitas"
            }
            text="Escríbenos por WhatsApp o email con la zona y los detalles del proyecto. Te respondemos con los siguientes pasos, sin compromiso."
          />

          <ul className="contact__details">
            <li>
              <PhoneIcon size={18} />
              <div>
                <span>Teléfono</span>
                <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
              </div>
            </li>
            <li>
              <MailIcon size={18} />
              <div>
                <span>Email</span>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </li>
            <li>
              <MapPinIcon size={18} />
              <div>
                <span>Zonas de servicio</span>
                <p>{siteConfig.zones.join(" · ")}</p>
              </div>
            </li>
          </ul>

          <p className="contact__note">
            Sin formularios. Sin esperas innecesarias. Hablas directamente con
            quien va a realizar el trabajo.
          </p>
        </div>

        <div
          className="contact__cards"
          data-reveal
          style={{ "--reveal-delay": "120ms" } as CSSProperties}
        >
          <a
            className="contact-card contact-card--whatsapp"
            href={whatsappHref(message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card__icon">
              <WhatsAppIcon size={24} />
            </span>
            <span className="contact-card__body">
              <span className="contact-card__label">La forma más rápida</span>
              <strong>WhatsApp</strong>
              <span className="contact-card__text">
                Cuéntanos el servicio y la zona. Te orientamos al momento.
              </span>
            </span>
            <ArrowUpRightIcon size={20} />
          </a>

          <a className="contact-card" href={mailtoHref(service)}>
            <span className="contact-card__icon">
              <MailIcon size={24} />
            </span>
            <span className="contact-card__body">
              <span className="contact-card__label">Para enviar detalles</span>
              <strong className="contact-card__value">{siteConfig.email}</strong>
              <span className="contact-card__text">
                Se abre tu aplicación de correo con un mensaje preparado.
              </span>
            </span>
            <ArrowUpRightIcon size={20} />
          </a>

          <a
            className="contact-card contact-card--map"
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-card__icon">
              <MapPinIcon size={24} />
            </span>
            <span className="contact-card__body">
              <span className="contact-card__label">Dónde estamos</span>
              <strong>Valencia y Gran Canaria</strong>
              <span className="contact-card__text">
                Consulta la ubicación y las opiniones en Google Maps.
              </span>
            </span>
            <ArrowUpRightIcon size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
