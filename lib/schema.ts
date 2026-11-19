import type { FAQ } from "@/content/faqs";
import type { Service } from "@/content/services";
import { siteConfig } from "@/content/site";
import { absoluteUrl } from "./seo";

const openingDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

export function localBusinessSchema() {
  const url = absoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": url ? `${url}#organization` : undefined,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: absoluteUrl("/images/og-cover.jpg"),
    logo: absoluteUrl("/images/logo-lozartico.webp"),
    priceRange: "$$",
    knowsAbout: [
      "Obra nueva",
      "Reformas integrales",
      "Construcción",
      "Alicatados",
      "Pintura",
      "Impermeabilización de terrazas y fachadas",
      "Fontanería",
      "Electricidad",
      "Climatización",
      "Césped artificial",
      "Mantenimiento de comunidades y fincas",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de construcción, reforma y mantenimiento",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Construcción y reformas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Instalaciones" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Impermeabilización" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Mantenimiento" },
        },
      ],
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Sistema de Gestión Ambiental ISO 14001:2015",
        credentialCategory: "certification",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Valencia" },
      { "@type": "AdministrativeArea", name: "Gran Canaria" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: openingDays,
        opens: "08:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      siteConfig.instagramUrl,
      siteConfig.tiktokUrl,
      siteConfig.googleReviewsUrl,
      siteConfig.mapsUrl,
    ],
  };
}

export function websiteSchema() {
  const url = absoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.shortName,
    url,
    inLanguage: "es-ES",
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
  };
}

export function faqPageSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

const serviceTypes: Record<Service["category"], string> = {
  construccion: "Construcción y reformas",
  instalaciones: "Fontanería, electricidad y climatización",
  impermeabilizacion: "Impermeabilización",
  mantenimiento: "Mantenimiento de comunidades y fincas",
};

export function serviceSchema(service: Service) {
  const url = absoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: serviceTypes[service.category],
    description: service.metaDescription,
    url: absoluteUrl(`/${service.slug}/`),
    provider: {
      "@type": "GeneralContractor",
      "@id": url ? `${url}#organization` : undefined,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
    areaServed: [
      { "@type": "City", name: "Valencia" },
      { "@type": "AdministrativeArea", name: "Gran Canaria" },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
