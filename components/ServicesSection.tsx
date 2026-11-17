import Link from "next/link";
import type { CSSProperties } from "react";

import { homeServices } from "@/content/services";
import { whatsappHref } from "@/lib/contact";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BuildingIcon,
  CheckIcon,
  DropletIcon,
  HomeIcon,
  WhatsAppIcon,
  WrenchIcon,
} from "./Icons";
import { SectionHeading } from "./SectionHeading";

const serviceIcons = {
  home: HomeIcon,
  wrench: WrenchIcon,
  droplet: DropletIcon,
  building: BuildingIcon,
};

export function ServicesSection() {
  return (
    <section className="section section--cream services" id="servicios">
      <div className="container">
        <div className="section-head">
          <SectionHeading
            eyebrow="Servicios"
            title="Cuatro servicios, una forma de trabajar"
            text="Obra nueva, reformas, instalaciones, impermeabilización y mantenimiento. Ejecutamos cada trabajo según su alcance y las dos zonas de servicio."
          />
          <Link className="section-link" href="#contacto">
            Hablemos de tu trabajo
            <ArrowRightIcon size={18} />
          </Link>
        </div>

        <div className="services-grid">
          {homeServices.map((service, index) => {
            const Icon = serviceIcons[service.icon];

            return (
              <article
                className={`service-card${
                  service.id === "reformas" ? " service-card--featured" : ""
                }`}
                key={service.id}
                data-reveal
                style={
                  {
                    "--reveal-delay": `${index * 70}ms`,
                  } as CSSProperties
                }
              >
                <div className="service-card__top">
                  <span className="service-card__icon">
                    <Icon size={26} />
                  </span>
                  <span className="service-card__num" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p className="service-card__description">{service.description}</p>

                <ul className="service-card__list">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>
                      <CheckIcon size={16} />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="service-card__footer">
                  {service.links.length > 0 ? (
                    service.links.map((link) => (
                      <Link className="chip" href={link.href} key={link.href}>
                        {link.label}
                        <ArrowUpRightIcon size={15} />
                      </Link>
                    ))
                  ) : (
                    <a
                      className="chip chip--whatsapp"
                      href={whatsappHref(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsAppIcon size={15} />
                      Pedir información
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
