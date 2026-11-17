import Link from "next/link";
import type { CSSProperties } from "react";

import { ArrowUpRightIcon, MapPinIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const coverage = [
  {
    index: "01",
    title: "Valencia",
    subtitle: "Servicio en Valencia",
    text: "Reformas, mantenimiento, fontanería, electricidad, climatización y césped artificial en Valencia.",
    map: "https://www.openstreetmap.org/export/embed.html?bbox=-0.78%2C39.20%2C-0.08%2C39.78&layer=mapnik&marker=39.4699%2C-0.3763",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Valencia",
    links: [
      { label: "Reformas", href: "/reformas-valencia" },
      { label: "Césped artificial", href: "/cesped-artificial" },
      { label: "Aire acondicionado", href: "/aire-acondicionado-valencia" },
    ],
  },
  {
    index: "02",
    title: "Gran Canaria",
    subtitle: "Las Palmas de Gran Canaria y otros puntos de la isla",
    text: "Reformas, mantenimiento e instalaciones en Gran Canaria, con atención a viviendas, locales y comunidades.",
    map: "https://www.openstreetmap.org/export/embed.html?bbox=-15.95%2C27.65%2C-15.25%2C28.25&layer=mapnik&marker=27.8431%2C-15.4450",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Gran+Canaria",
    links: [
      { label: "Reformas en Gran Canaria", href: "/reformas-gran-canaria" },
      {
        label: "Aire acondicionado en Gran Canaria",
        href: "/aire-acondicionado-gran-canaria",
      },
    ],
  },
];

export function ZonesSection() {
  return (
    <section className="section section--white zones" id="zonas">
      <div className="container">
        <SectionHeading
          eyebrow="Cobertura"
          title="Dos zonas de servicio"
          text="Trabajamos en Valencia y Gran Canaria. Consulta el mapa de cada zona y escríbenos para confirmar la disponibilidad de tu proyecto."
        />

        <div className="coverage-grid">
          {coverage.map((zone, index) => (
            <article
              className="coverage-card"
              key={zone.title}
              data-reveal
              style={
                {
                  "--reveal-delay": `${index * 100}ms`,
                } as CSSProperties
              }
            >
              <div className="coverage-card__map">
                <iframe
                  src={zone.map}
                  title={`Mapa de cobertura en ${zone.title}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="coverage-card__body">
                <div className="coverage-card__heading">
                  <span className="coverage-card__index">{zone.index}</span>
                  <MapPinIcon size={20} />
                </div>
                <h3>{zone.title}</h3>
                <p className="coverage-card__subtitle">{zone.subtitle}</p>
                <p>{zone.text}</p>

                <div className="coverage-card__links">
                  {zone.links.map((link) => (
                    <Link
                      className="zone-link"
                      href={link.href}
                      key={link.href}
                    >
                      {link.label}
                      <ArrowUpRightIcon size={15} />
                    </Link>
                  ))}
                </div>

                <a
                  className="coverage-card__external"
                  href={zone.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir mapa en Google Maps
                  <ArrowUpRightIcon size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
