import Link from "next/link";
import type { CSSProperties } from "react";

import { homeServices } from "@/content/services";
import { whatsappHref } from "@/lib/contact";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  DropletIcon,
  HomeIcon,
  SnowflakeIcon,
  WhatsAppIcon,
  WrenchIcon,
} from "./Icons";
import { SectionHeading } from "./SectionHeading";

const serviceIcons = {
  air: SnowflakeIcon,
  home: HomeIcon,
  terrace: DropletIcon,
  wrench: WrenchIcon,
};

export function ServicesSection() {
  return (
    <section className="section section--cream services" id="servicios">
      <div className="container">
        <div className="section-head">
          <SectionHeading
            eyebrow="Servicios"
            title="Todo lo que tu casa necesita, en un solo equipo"
            text="Climatización, reformas e impermeabilización con un mismo criterio: hacer las cosas bien y dejar cada espacio mejor de como lo encontramos."
          />
          <Link className="section-link" href="#contacto">
            Hablemos de tu proyecto
            <ArrowRightIcon size={18} />
          </Link>
        </div>

        <div className="services-grid">
          {homeServices.map((service, index) => {
            const Icon = serviceIcons[service.icon];

            return (
              <article
                className="service-card"
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
