import type { CSSProperties } from "react";

import { homeFaqs } from "@/content/faqs";
import { whatsappHref } from "@/lib/contact";
import { ArrowRightIcon, WhatsAppIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function FaqSection() {
  return (
    <section className="section section--white faq" id="preguntas">
      <div className="container faq__grid">
        <div className="faq__intro" data-reveal>
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas"
            text="Las respuestas a lo que más nos preguntan antes de empezar un proyecto."
          />

          <div className="faq__help">
            <p>¿No encuentras tu respuesta?</p>
            <a
              href={whatsappHref("Hola, tengo una duda sobre vuestros servicios.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              Escríbenos por WhatsApp
              <ArrowRightIcon size={16} />
            </a>
          </div>
        </div>

        <div className="faq__list">
          {homeFaqs.map((faq, index) => (
            <details
              className="faq-item"
              key={faq.question}
              data-reveal
              style={
                {
                  "--reveal-delay": `${index * 50}ms`,
                } as CSSProperties
              }
            >
              <summary>
                <span>{faq.question}</span>
                <span className="faq-item__icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="faq-item__answer">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
