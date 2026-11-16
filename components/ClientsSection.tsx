import type { CSSProperties } from "react";

import { BuildingIcon, FileCheckIcon, UsersIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const clients = [
  {
    icon: BuildingIcon,
    title: "Administradores de fincas",
    text: "Comunidades, bajantes, reparaciones y reformas en zonas comunes con coordinación y documentación clara.",
  },
  {
    icon: UsersIcon,
    title: "Empresas privadas",
    text: "Locales, oficinas y espacios de trabajo que necesitan reformas, instalaciones y mantenimiento sin interrumpir su actividad.",
  },
  {
    icon: FileCheckIcon,
    title: "Licitaciones públicas",
    text: "Experiencia en licitaciones de ayuntamientos y Ministerio de Defensa, con la documentación y las acreditaciones necesarias.",
  },
];

export function ClientsSection() {
  return (
    <section className="section section--white clients" id="clientes">
      <div className="container">
        <SectionHeading
          eyebrow="Clientes"
          title="Particulares, empresas y obra pública"
          text="Trabajamos con quien necesita una reforma bien ejecutada y con quien necesita que la obra cumpla requisitos técnicos y administrativos."
        />

        <div className="clients-grid">
          {clients.map((client, index) => {
            const Icon = client.icon;

            return (
              <article
                className="client-card"
                key={client.title}
                data-reveal
                style={
                  {
                    "--reveal-delay": `${index * 80}ms`,
                  } as CSSProperties
                }
              >
                <span className="client-card__icon">
                  <Icon size={24} />
                </span>
                <h3>{client.title}</h3>
                <p>{client.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
