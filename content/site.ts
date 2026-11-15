export const siteConfig = {
  name: "Lozartico SL",
  shortName: "Lozartico",
  legalName: "Lozartico SL",
  description:
    "Instalación de aire acondicionado, reformas integrales e impermeabilización de terrazas en Valencia y Las Palmas de Gran Canaria.",
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
    locality: "Las Palmas de Gran Canaria",
    region: "Las Palmas",
    country: "ES",
  },
  geo: {
    latitude: 27.8430807,
    longitude: -15.4450351,
  },
  openingHours: "Mo-Fr 08:00-19:00",
  experienceYears: "+3",
  zones: ["Valencia", "Las Palmas de Gran Canaria"],
};

export type SiteConfig = typeof siteConfig;
