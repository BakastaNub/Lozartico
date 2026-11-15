import Link from "next/link";

import { projects } from "@/content/projects";
import { ArrowRightIcon } from "./Icons";
import { ProjectsGallery } from "./ProjectsGallery";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <section className="section section--white projects" id="proyectos">
      <div className="container">
        <div className="section-head">
          <SectionHeading
            eyebrow="Proyectos"
            title="Trabajos que hablan por sí solos"
            text="Una selección de reformas, instalaciones y espacios exteriores realizados por nuestro equipo. Toca una imagen para verla con más detalle."
          />
          <Link className="section-link" href="#contacto">
            Cuéntanos tu proyecto
            <ArrowRightIcon size={18} />
          </Link>
        </div>

        <ProjectsGallery projects={projects} />
      </div>
    </section>
  );
}
