export const siteConfig = {
  name: "Lozartico Servicios Integrales, S.L.U.",
  shortName: "Lozartico",
  legalName: "Lozartico Servicios Integrales, S.L.U.",
  description:
    "Construcción, reforma y mantenimiento, alicatados, pintura, impermeabilización, fontanería, electricidad, climatización y césped artificial en Valencia y Gran Canaria, con cobertura en L'Horta Nord y Sud.",
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
  geo: {
    latitude: 27.8430807,
    longitude: -15.4450351,
  },
  openingHours: "Mo-Fr 08:00-19:00",
  experience: "Equipo de más de 15 años de experiencia",
  zones: ["Valencia", "Gran Canaria"],
  iso: {
    name: "ISO 14001:2015",
    title: "Sistema de Gestión Ambiental",
  },
};

export type SiteConfig = typeof siteConfig;
