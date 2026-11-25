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
            Valencia · Gran Canaria · Lanzarote
          </span>

          <h1 data-reveal style={{ "--reveal-delay": "60ms" } as CSSProperties}>
            Construcción, reforma y <em>mantenimiento</em>
          </h1>

          <p
            className="hero__text"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as CSSProperties}
          >
            Reformas integrales, alicatados, pintura, suelos e
            impermeabilización. También fontanería, electricidad, climatización y
            césped artificial, con un solo equipo ejecutando los trabajos.
          </p>

          <div
            className="hero__actions"
            data-reveal
            style={{ "--reveal-delay": "180ms" } as CSSProperties}
          >
            <a
              className="btn btn--primary"
              href={whatsappHref("Hola, quiero presupuesto para una reforma.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={19} />
              Pedir presupuesto
            </a>
            <Link className="btn btn--light" href="#trabajos">
              Ver trabajos
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
              <strong>+15 años</strong>
              <span>de experiencia del equipo</span>
            </div>
            <div className="hero__stat">
              <strong>3 zonas</strong>
              <span>Valencia, Gran Canaria y Lanzarote</span>
            </div>
            <div className="hero__stat">
              <strong>Pública y privada</strong>
              <span>obra y licitaciones</span>
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
              src="/images/presentacion.webp"
              alt="Presentación de los trabajos de construcción y reforma de Lozartico"
              width={1080}
              height={1750}
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
            />
            <div className="hero__badge">
              <MapPinIcon size={18} />
              <div>
                <strong>Valencia, Gran Canaria y Lanzarote</strong>
                <span>Tres zonas de servicio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

