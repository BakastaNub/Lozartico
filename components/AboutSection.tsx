import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/site";
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
            <span>de experiencia en obra y reforma</span>
          </div>
        </div>

        <div className="about__copy" data-reveal>
          <SectionHeading
            eyebrow="Empresa"
            title="Un equipo que ejecuta la obra de principio a fin"
            text="Lozartico Servicios Integrales, S.L.U. ejecuta obra nueva, reformas, instalaciones y mantenimiento para particulares, comunidades y empresas en Valencia, Gran Canaria y Lanzarote."
          />

          <p>
            Entendemos el espacio y el uso que va a tener. A partir de ahí
            implementamos las partidas, los materiales y los plazos para que la
            obra avance con un solo interlocutor.
          </p>

          <p className="about__credentials">
            ISO 14001:2015 · ROLECE · Responsabilidad civil · Prevención ajena
          </p>

          <dl className="about__facts">
            <div>
              <dt>Titular</dt>
              <dd>{siteConfig.legalName}</dd>
            </div>
            <div>
              <dt>Zonas de servicio</dt>
              <dd>{siteConfig.zones.join(" · ")}</dd>
            </div>
            <div>
              <dt>Experiencia</dt>
              <dd>{siteConfig.experience}</dd>
            </div>
          </dl>

          <div className="about__actions">
            <Link className="btn btn--dark" href="#contacto">
              Solicitar presupuesto
            </Link>
            <Link className="btn btn--outline" href="/construccion-reformas">
              Ver servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

