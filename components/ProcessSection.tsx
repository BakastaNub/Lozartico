import type { CSSProperties } from "react";

import { whatsappHref } from "@/lib/contact";
import { WhatsAppIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Nos cuentas tu idea",
    text: "Escríbenos por WhatsApp o email con el servicio, la zona y lo que necesitas. Te orientamos desde el primer mensaje.",
  },
  {
    title: "Visitamos y medimos",
    text: "Revisamos el espacio, tomamos medidas y valoramos el estado real para proponer una solución coherente.",
  },
  {
    title: "Planificamos y ejecutamos",
    text: "Definimos materiales, plazos y presupuesto. Coordinamos los trabajos cuidando el orden y la limpieza.",
  },
  {
    title: "Revisamos contigo",
    text: "Comprobamos el resultado, resolvemos los últimos detalles y te explicamos cómo cuidar lo que hemos hecho.",
  },
];

export function ProcessSection() {
  return (
    <section className="section section--navy process" id="proceso">
      <div className="container">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso claro, de principio a fin"
          text="Sin sorpresas ni pasos innecesarios. Sabes qué vamos a hacer, cuándo y por qué."
        />

        <ol className="process-grid">
          {steps.map((step, index) => (
            <li
              className="process-step"
              key={step.title}
              data-reveal
              style={
                {
                  "--reveal-delay": `${index * 80}ms`,
                } as CSSProperties
              }
            >
              <span className="process-step__num" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="process__cta" data-reveal>
          <p>¿Tienes un proyecto en mente? Te ayudamos a concretarlo.</p>
          <a
            className="btn btn--primary"
            href={whatsappHref("Hola, me gustaría contaros mi proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} />
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
