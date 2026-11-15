import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { whatsappHref } from "@/lib/contact";
import { CheckIcon, MapPinIcon, WhatsAppIcon } from "./Icons";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="hero__tag" data-reveal>
            <span className="hero__tag-dot" aria-hidden="true" />
            Climatización · Reformas · Impermeabilización
          </span>

          <h1 data-reveal style={{ "--reveal-delay": "60ms" } as CSSProperties}>
            Aire acondicionado, reformas e{" "}
            <em>impermeabilización</em> en Valencia y Gran Canaria
          </h1>

          <p
            className="hero__text"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
          >
            Más de 3 años cuidando el confort y los espacios de nuestros
            clientes. Instalaciones limpias, reformas bien planificadas y
            terrazas protegidas de verdad.
          </p>

          <div
            className="hero__actions"
            data-reveal
            style={{ "--reveal-delay": "180ms" } as CSSProperties}
          >
            <a
              className="btn btn--primary"
              href={whatsappHref("Hola, quiero solicitar un presupuesto.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={19} />
              Pedir presupuesto
            </a>
            <Link className="btn btn--light" href="#proyectos">
              Ver proyectos
            </Link>
          </div>

          <p
            className="hero__note"
            data-reveal
            style={{ "--reveal-delay": "240ms" } as CSSProperties}
          >
            <CheckIcon size={17} />
            Respuesta directa · Presupuesto sin compromiso
          </p>

          <div
            className="hero__stats"
            data-reveal
            style={{ "--reveal-delay": "300ms" } as CSSProperties}
          >
            <div className="hero__stat">
              <strong>+3 años</strong>
              <span>de experiencia</span>
            </div>
            <div className="hero__stat">
              <strong>2 zonas</strong>
              <span>Valencia y Canarias</span>
            </div>
            <div className="hero__stat">
              <strong>Trato directo</strong>
              <span>sin intermediarios</span>
            </div>
          </div>
        </div>

        <div
          className="hero__media"
          data-reveal
          style={{ "--reveal-delay": "160ms" } as CSSProperties}
        >
          <div className="hero__frame" aria-hidden="true" />
          <div className="hero__image-wrap">
            <Image
              className="hero__image"
              src="/images/hero-aire-acondicionado.webp"
              alt="Técnico de Lozartico instalando y manteniendo aire acondicionado"
              width={1080}
              height={1440}
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
            />
            <div className="hero__badge">
              <MapPinIcon size={18} />
              <div>
                <strong>Valencia</strong>
                <span>y Las Palmas de Gran Canaria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
