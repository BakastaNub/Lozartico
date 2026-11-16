export const siteConfig = {
  name: "Lozartico Servicios Integrales, S.L.U.",
  shortName: "Lozartico",
  legalName: "Lozartico Servicios Integrales, S.L.U.",
  nif: "B19391390",
  description:
    "Construcción y reformas integrales, alicatados, pintura, impermeabilización, fontanería, electricidad y climatización en Valencia y Gran Canaria.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  phone: "+34634332565",
  phoneDisplay: "+34 634 33 25 65",
  email: "lozartico.14@gmail.com",
  whatsappNumber: "34634332565",
  mapsUrl: "https://maps.app.goo.gl/FSvH8Ujbd2SS7ND17",
  googleReviewsUrl: "https://share.google/Rctorbeq9YfHab0se",
  instagramUrl: "https://www.instagram.com/loz.artico.14/",
  tiktokUrl: "https://www.tiktok.com/@lozartico",
  address: {
    street: "C/ Maldonado, 18",
    postalCode: "35110",
    locality: "Vecindario",
    municipality: "Santa Lucía de Tirajana",
    region: "Las Palmas",
    country: "ES",
  },
  delegation: {
    street: "C/ Emilia Pardo Bazán, 13",
    postalCode: "46018",
    locality: "Valencia",
    region: "Valencia",
    country: "ES",
  },
  registry: "Registro Mercantil de Las Palmas, hoja GC-63367",
  foundingDate: "2024-09-02",
  geo: {
    latitude: 27.8430807,
    longitude: -15.4450351,
  },
  openingHours: "Mo-Fr 08:00-19:00",
  zones: ["Valencia", "Las Palmas de Gran Canaria"],
  iso: {
    name: "ISO 14001:2015",
    title: "Sistema de Gestión Ambiental",
    manual: "/docs/sistema-gestion-ambiental-iso-14001-lozartico.pdf",
  },
};

export type SiteConfig = typeof siteConfig;
