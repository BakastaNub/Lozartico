import Link from "next/link";
import type { CSSProperties } from "react";

import { whatsappHref } from "@/lib/contact";
import { ArrowUpRightIcon, MapPinIcon, WhatsAppIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const zones = [
  {
    index: "01",
    name: "Valencia",
    text: "Construcción, reformas e instalaciones en Valencia y municipios de la provincia.",
    links: [
      { label: "Reformas", href: "/reformas-valencia" },
      {
        label: "Impermeabilización",
        href: "/impermeabilizacion-terrazas",
      },
      { label: "Aire acondicionado", href: "/aire-acondicionado-valencia" },
    ],
  },
  {
    index: "02",
    name: "Gran Canaria",
    text: "Reformas, construcción e instalaciones en Las Palmas de Gran Canaria y otros puntos de la isla.",
    links: [
      { label: "Reformas", href: "/reformas-gran-canaria" },
      {
        label: "Impermeabilización",
        href: "/impermeabilizacion-terrazas",
      },
      {
        label: "Aire acondicionado",
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
          eyebrow="Dónde estamos"
          title="Dos zonas, el mismo cuidado por el detalle"
          text="Trabajamos entre la península y las islas con un trato cercano y una forma de hacer las cosas que no cambia según el lugar."
        />

        <div className="zones-grid">
          {zones.map((zone, index) => (
            <article
              className="zone-card"
              key={zone.name}
              data-reveal
              style={
                {
                  "--reveal-delay": `${index * 80}ms`,
                } as CSSProperties
              }
            >
              <div className="zone-card__top">
                <span className="zone-card__index">{zone.index}</span>
                <MapPinIcon size={22} />
              </div>
              <h3>{zone.name}</h3>
              <p>{zone.text}</p>
              <div className="zone-card__links">
                {zone.links.map((link) => (
                  <Link className="zone-link" href={link.href} key={link.href}>
                    {link.label}
                    <ArrowUpRightIcon size={15} />
                  </Link>
                ))}
              </div>
            </article>
          ))}

          <aside
            className="zone-card zone-card--aside"
            data-reveal
            style={{ "--reveal-delay": "160ms" } as CSSProperties}
          >
            <div className="zone-card__top">
              <span className="zone-card__index">+</span>
              <span className="zone-card__aside-icon">
                <WhatsAppIcon size={22} />
              </span>
            </div>
            <h3>¿Tu proyecto está en otra zona?</h3>
            <p>
              Escríbenos con la ubicación y el tipo de trabajo. Valoramos la
              disponibilidad según el proyecto.
            </p>
            <a
              className="btn btn--primary zone-card__cta"
              href={whatsappHref(
                "Hola, mi proyecto está en otra zona. ¿Trabajáis ahí?",
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar disponibilidad
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
