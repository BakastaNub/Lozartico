import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import { ArrowRightIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section className="section section--cream about" id="empresa">
      <div className="container about__grid">
        <div className="about__media" data-reveal>
          <div className="about__media-main">
            <Image
              src="/images/equipo-lozartico.webp"
              alt="Equipo de profesionales de Lozartico"
              width={1080}
              height={1440}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div className="about__media-secondary">
            <Image
              src="/images/sede-lozartico.webp"
              alt="Sede de Lozartico en Vecindario, Gran Canaria"
              width={1080}
              height={807}
              sizes="(max-width: 900px) 45vw, 22vw"
            />
          </div>
          <div className="about__badge">
            <strong>Desde 2024</strong>
            <span>Construcción, reforma e instalaciones</span>
          </div>
        </div>

        <div className="about__copy" data-reveal>
          <SectionHeading
            eyebrow="Empresa"
            title="Un equipo que coordina la obra de principio a fin"
            text="Lozartico Servicios Integrales, S.L.U. trabaja en construcción, reformas e instalaciones para particulares, comunidades, empresas y licitaciones públicas."
          />

          <p>
            Nuestro punto de partida es entender el espacio y el uso que va a
            tener. A partir de ahí coordinamos los oficios, los materiales y los
            plazos para que la reforma avance con un solo interlocutor y sin
            improvisaciones.
          </p>

          <dl className="about__facts">
            <div>
              <dt>Razón social</dt>
              <dd>{siteConfig.legalName}</dd>
            </div>
            <div>
              <dt>NIF</dt>
              <dd>{siteConfig.nif}</dd>
            </div>
            <div>
              <dt>Sede social</dt>
              <dd>
                {siteConfig.address.street} · {siteConfig.address.postalCode}{" "}
                {siteConfig.address.locality} ({siteConfig.address.municipality})
              </dd>
            </div>
            <div>
              <dt>Delegación</dt>
              <dd>
                {siteConfig.delegation.street} · {siteConfig.delegation.postalCode}{" "}
                {siteConfig.delegation.locality}
              </dd>
            </div>
          </dl>

          <div className="about__actions">
            <Link className="btn btn--dark" href="#acreditaciones">
              Ver acreditaciones
              <ArrowRightIcon size={18} />
            </Link>
            <Link className="btn btn--outline" href="#contacto">
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
