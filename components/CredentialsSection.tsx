import { CheckIcon, FileCheckIcon, ShieldIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const credentials = [
  {
    icon: FileCheckIcon,
    title: "Registro de Empresas Licitadoras",
    text: "Inscripción para participar en procedimientos de contratación pública.",
  },
  {
    icon: ShieldIcon,
    title: "Responsabilidad civil · MAPFRE",
    text: "Cobertura de responsabilidad civil para trabajos de obra y reforma.",
  },
  {
    icon: CheckIcon,
    title: "Servicio de prevención ajeno",
    text: "Asesoramiento en seguridad y salud para el desarrollo de los trabajos.",
  },
  {
    icon: FileCheckIcon,
    title: "ROLECE",
    text: "Registro Oficial de Licitadores y Empresas Clasificadas del Estado.",
  },
  {
    icon: CheckIcon,
    title: "Situación tributaria",
    text: "Documentación tributaria al corriente para desarrollar los trabajos.",
  },
];

export function CredentialsSection() {
  return (
    <section
      className="section section--navy credentials"
      id="acreditaciones"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Acreditaciones"
          title="Documentación y coberturas para trabajar con confianza"
          text="Contamos con documentación para licitaciones públicas y coberturas para desarrollar reformas e instalaciones con garantías."
        />

        <div className="credentials-grid">
          <article className="credential-iso" data-reveal>
            <span className="credential-iso__eyebrow">ISO 14001:2015</span>
            <h3>Sistema de Gestión Ambiental</h3>
            <p>
              Sistema de gestión ambiental orientado a controlar el impacto de
              las obras, cumplir la normativa aplicable y mejorar de forma
              continua.
            </p>
          </article>

          <div className="credential-list" data-reveal>
            {credentials.map((credential) => {
              const Icon = credential.icon;

              return (
                <div className="credential-item" key={credential.title}>
                  <span className="credential-item__icon">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3>{credential.title}</h3>
                    <p>{credential.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="credentials__note">
          Para licitaciones o solicitudes de documentación, escríbenos y te
          indicamos los documentos disponibles.
        </p>
      </div>
    </section>
  );
}
