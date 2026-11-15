export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const projects: Project[] = [
  {
    slug: "bano-moderno-completo",
    title: "Baño moderno completo",
    category: "Reforma de baño",
    location: "Valencia",
    year: "2024",
    description:
      "Reforma integral de baño con alicatado de gran formato, fontanería nueva, mampara de cristal y acabados de alta calidad.",
    image: {
      src: "/images/proyecto-bano.webp",
      alt: "Baño moderno reformado por Lozartico en Valencia",
      width: 1080,
      height: 1349,
    },
  },
  {
    slug: "armario-empotrado",
    title: "Armario empotrado a medida",
    category: "Reforma de habitación",
    location: "Islas Canarias",
    year: "2023",
    description:
      "Diseño y montaje de armario empotrado con puertas de espejo, distribución interior personalizada y renovación de paredes y suelo.",
    image: {
      src: "/images/proyecto-armario.webp",
      alt: "Habitación con armario empotrado a medida reformada por Lozartico",
      width: 1080,
      height: 1349,
    },
  },
  {
    slug: "habitacion-azul-blanco",
    title: "Habitación azul y blanco",
    category: "Diseño de interiores",
    location: "Islas Canarias",
    year: "2023",
    description:
      "Reforma completa de dormitorio con nueva distribución, pintura de alta calidad, iluminación LED y mobiliario integrado.",
    image: {
      src: "/images/proyecto-habitacion.webp",
      alt: "Habitación reformada en azul y blanco por Lozartico",
      width: 1080,
      height: 1349,
    },
  },
  {
    slug: "patio-exterior",
    title: "Reforma de patio exterior",
    category: "Exteriores",
    location: "Valencia",
    year: "2024",
    description:
      "Reforma de patio con pavimento antideslizante, impermeabilización, mejora del desagüe y acabados resistentes al exterior.",
    image: {
      src: "/images/proyecto-patio.webp",
      alt: "Patio exterior reformado e impermeabilizado por Lozartico en Valencia",
      width: 1080,
      height: 1349,
    },
  },
];
