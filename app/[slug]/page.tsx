import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";

import { ContactSection } from "@/components/ContactSection";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import {
  getRelatedServices,
  getService,
  services,
} from "@/content/services";
import { siteConfig } from "@/content/site";
import { mailtoHref, whatsappHref } from "@/lib/contact";
import {
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/schema";
import {
  absoluteUrl,
  canonical,
  indexableRobots,
  ogImages,
} from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  const images = ogImages();

  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: canonical(`/${service.slug}/`),
    robots: indexableRobots,
    openGraph: {
      type: "website",
      locale: "es_ES",
      siteName: siteConfig.shortName,
      title: service.metaTitle,
      description: service.metaDescription,
      url: absoluteUrl(`/${service.slug}/`),
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: images?.map((image) => image.url),
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(service);
  const whatsappUrl = whatsappHref(service.whatsappMessage);

  return (
    <>
      <section className="landing-hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container">
          <nav className="breadcrumb breadcrumb--light" aria-label="Migas de pan">
            <Link href="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.title}</span>
          </nav>

          <div className="landing-hero__grid">
            <div className="landing-hero__content">
              <span className="hero__tag" data-reveal>
                <span className="hero__tag-dot" aria-hidden="true" />
                {service.eyebrow}
              </span>

              <h1
                data-reveal
                style={{ "--reveal-delay": "60ms" } as CSSProperties}
              >
                {service.title}
              </h1>

              <p
                className="hero__text"
                data-reveal
                style={{ "--reveal-delay": "120ms" } as CSSProperties}
              >
                {service.heroText}
              </p>

              <div
                className="hero__actions"
                data-reveal
                style={{ "--reveal-delay": "180ms" } as CSSProperties}
              >
                <a
                  className="btn btn--primary"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={19} />
                  Pedir presupuesto
                </a>
                <a className="btn btn--light" href={mailtoHref(service.title)}>
                  <MailIcon size={18} />
                  Enviar email
                </a>
              </div>

              <div
                className="landing-hero__meta"
                data-reveal
                style={{ "--reveal-delay": "240ms" } as CSSProperties}
              >
                <span>
                  <MapPinIcon size={16} />
                  {service.slug.endsWith("gran-canaria")
                    ? "Gran Canaria"
                    : "Valencia"}
                </span>
                <span>
                  <CheckIcon size={16} />
                  Presupuesto sin compromiso
                </span>
              </div>
            </div>

            <div
              className="landing-hero__media"
              data-reveal
              style={{ "--reveal-delay": "140ms" } as CSSProperties}
            >
              <Image
                className="landing-hero__image"
                src={service.image.src}
                alt={service.image.alt}
                width={service.image.width}
                height={service.image.height}
                priority
                sizes="(max-width: 900px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream landing-intro">
        <div className="container landing-intro__grid">
          <div data-reveal>
            <span className="eyebrow">El servicio</span>
            <h2>{service.introTitle}</h2>
          </div>

          <div data-reveal style={{ "--reveal-delay": "100ms" } as CSSProperties}>
            <p>{service.introText}</p>
            <a
              className="btn btn--dark"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} />
              Cuéntanos tu caso
            </a>
          </div>
        </div>
      </section>

      <section className="section section--white landing-benefits">
        <div className="container">
          <SectionHeading
            eyebrow="Qué incluye"
            title={service.benefitsTitle}
            text="Soluciones pensadas para que el resultado funcione hoy y siga funcionando con el tiempo."
          />

          <div className="benefits-grid">
            {service.benefits.map((benefit, index) => (
              <article
                className="benefit-card"
                key={benefit.title}
                data-reveal
                style={
                  {
                    "--reveal-delay": `${index * 70}ms`,
                  } as CSSProperties
                }
              >
                <span className="benefit-card__num" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--navy landing-steps">
        <div className="container">
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title="De la primera consulta al resultado final"
            text="Un proceso ordenado para que sepas qué esperar en cada momento."
          />

          <ol className="process-grid">
            {service.steps.map((step, index) => (
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
        </div>
      </section>

      {service.gallery.length > 0 ? (
        <section className="section section--cream landing-gallery">
          <div className="container">
            <SectionHeading
              eyebrow="Proyectos"
              title="Trabajos realizados"
              text="Una muestra de espacios que hemos transformado."
            />

            <div className="landing-gallery__grid">
              {service.gallery.map((image, index) => (
                <figure
                  className="landing-gallery__item"
                  key={image.src}
                  data-reveal
                  style={
                    {
                      "--reveal-delay": `${index * 80}ms`,
                    } as CSSProperties
                  }
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 720px) 100vw, 50vw"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section--white landing-faq">
        <div className="container faq__grid">
          <div className="faq__intro" data-reveal>
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Antes de empezar"
              text="Las dudas más habituales sobre este servicio."
            />

            <div className="faq__help">
              <p>¿Tienes otra pregunta?</p>
              <a
                href={whatsappHref(
                  `Hola, tengo una duda sobre ${service.title.toLowerCase()}.`,
                )}
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
            {service.faqs.map((faq, index) => (
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

      {related.length > 0 ? (
        <section className="section section--cream landing-related">
          <div className="container">
            <SectionHeading
              eyebrow="Sigue explorando"
              title="Otros servicios que pueden interesarte"
            />

            <div className="related-grid">
              {related.map((item, index) => (
                <Link
                  className="related-card"
                  href={`/${item.slug}`}
                  key={item.slug}
                  data-reveal
                  style={
                    {
                      "--reveal-delay": `${index * 70}ms`,
                    } as CSSProperties
                  }
                >
                  <span className="related-card__eyebrow">{item.eyebrow}</span>
                  <h3>{item.title}</h3>
                  <p>{item.introText}</p>
                  <span className="related-card__link">
                    Ver servicio
                    <ArrowUpRightIcon size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ContactSection service={service.title} />

      <JsonLd
        data={[
          serviceSchema(service),
          faqPageSchema(service.faqs),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: service.title, path: `/${service.slug}/` },
          ]),
        ]}
      />
    </>
  );
}
