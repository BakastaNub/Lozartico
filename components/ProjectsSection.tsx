import Link from "next/link";

import { projects } from "@/content/projects";
import { ArrowRightIcon } from "./Icons";
import { ProjectsGallery } from "./ProjectsGallery";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <section className="section section--white projects" id="trabajos">
      <div className="container">
        <div className="section-head">
          <SectionHeading
            eyebrow="Trabajos"
            title="Trabajos realizados"
            text="Una selección de reformas, instalaciones, impermeabilización y mantenimiento ejecutados por nuestro equipo."
          />
          <Link className="section-link" href="#contacto">
            Cuéntanos tu trabajo
            <ArrowRightIcon size={18} />
          </Link>
        </div>

        <ProjectsGallery projects={projects} />
      </div>
    </section>
  );
}
