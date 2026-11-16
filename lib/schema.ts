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
    taxID: siteConfig.nif,
    foundingDate: siteConfig.foundingDate,
    description: siteConfig.description,
    url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: absoluteUrl("/images/og-cover.jpg"),
    logo: absoluteUrl("/images/logo-lozartico-nav.webp"),
    priceRange: "$$",
    knowsAbout: [
      "Reformas integrales",
      "Construcción",
      "Alicatados",
      "Pintura",
      "Impermeabilización de terrazas y fachadas",
      "Fontanería",
      "Electricidad",
      "Climatización",
    ],
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
      { "@type": "City", name: "Las Palmas de Gran Canaria" },
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

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.category,
    description: service.metaDescription,
    url: absoluteUrl(`/${service.slug}/`),
    provider: {
      "@type": "GeneralContractor",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
    areaServed: [
      { "@type": "City", name: "Valencia" },
      { "@type": "City", name: "Las Palmas de Gran Canaria" },
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
