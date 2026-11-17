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
              alt="Oficina de Lozartico"
              width={1080}
              height={807}
              sizes="(max-width: 900px) 45vw, 22vw"
            />
          </div>
          <div className="about__badge">
            <strong>Equipo +15 años</strong>
            <span>de experiencia en construcción y reforma</span>
          </div>
        </div>

        <div className="about__copy" data-reveal>
          <SectionHeading
            eyebrow="Empresa"
            title="Un equipo que coordina la obra de principio a fin"
            text="            Lozartico Servicios Integrales, S.L.U. trabaja en construcción, reformas e instalaciones para particulares, comunidades, empresas y licitaciones públicas, con servicio en Valencia y Gran Canaria y cobertura en L'Horta Nord y Sud."
          />

          <p>
            Nuestro punto de partida es entender el espacio y el uso que va a
            tener. A partir de ahí coordinamos los oficios, los materiales y los
            plazos para que la reforma avance con un solo interlocutor y sin
            improvisaciones.
          </p>

          <dl className="about__facts">
            <div>
              <dt>Titular</dt>
              <dd>{siteConfig.legalName}</dd>
            </div>
            <div>
              <dt>Zona de servicio</dt>
              <dd>{siteConfig.zones.join(" · ")}</dd>
            </div>
            <div>
              <dt>Experiencia</dt>
              <dd>{siteConfig.experience}</dd>
            </div>
            <div>
              <dt>Licitaciones</dt>
              <dd>Ayuntamientos y Ministerio de Defensa</dd>
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
