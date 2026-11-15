import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import { whatsappHref } from "@/lib/contact";
import { MapPinIcon, PhoneIcon } from "./Icons";

const serviceLinks = [
  { label: "Aire acondicionado en Valencia", href: "/aire-acondicionado-valencia" },
  {
    label: "Aire acondicionado en Gran Canaria",
    href: "/aire-acondicionado-gran-canaria",
  },
  { label: "Reformas en Valencia", href: "/reformas-valencia" },
  { label: "Reformas en Gran Canaria", href: "/reformas-gran-canaria" },
  {
    label: "Impermeabilización de terrazas",
    href: "/impermeabilizacion-terrazas",
  },
];

const companyLinks = [
  { label: "Proyectos", href: "/#proyectos" },
  { label: "Opiniones", href: "/#opiniones" },
  { label: "Preguntas frecuentes", href: "/#preguntas" },
  { label: "Contacto", href: "/#contacto" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand-col">
          <Link className="footer__brand" href="/" aria-label="Lozartico, ir al inicio">
            <Image
              src="/images/logo-lozartico-footer.webp"
              alt="Lozartico"
              width={800}
              height={191}
              className="footer__logo"
            />
          </Link>
          <p className="footer__description">
            Climatización, reformas e impermeabilización para viviendas y
            locales en Valencia y Gran Canaria. Trabajo cuidado y trato directo.
          </p>
          <nav className="footer__social" aria-label="Redes sociales">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href={siteConfig.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </nav>
        </div>

        <div className="footer__col">
          <h2 className="footer__title">Servicios</h2>
          <ul className="footer__links">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="footer__title">Empresa</h2>
          <ul className="footer__links">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Opiniones en Google
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h2 className="footer__title">Contacto</h2>
          <ul className="footer__contact">
            <li>
              <a href={`tel:${siteConfig.phone}`}>
                <PhoneIcon size={16} />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref("Hola, quiero solicitar un presupuesto.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPinIcon size={16} />
                {siteConfig.zones.join(" · ")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          © {year} {siteConfig.legalName}. Todos los derechos reservados.
        </p>
        <div className="footer__legal">
          <Link href="/aviso-legal">Aviso legal</Link>
          <Link href="/privacidad">Privacidad</Link>
        </div>
      </div>
    </footer>
  );
}
