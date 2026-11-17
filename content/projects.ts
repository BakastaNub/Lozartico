export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year?: string;
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
    location: "Gran Canaria",
    description:
      "Reforma integral de baño con alicatado de gran formato, fontanería nueva, mampara de cristal y acabados de alta calidad.",
    image: {
      src: "/images/reforma-bano-1.webp",
      alt: "Baño moderno reformado por Lozartico en Gran Canaria",
      width: 1080,
      height: 1920,
    },
  },
  {
    slug: "habitacion-azul-blanco",
    title: "Habitación azul y blanco",
    category: "Diseño de interiores",
    location: "Valencia",
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
    description:
      "Reforma de patio con pavimento antideslizante, impermeabilización, mejora del desagüe y acabados resistentes al exterior.",
    image: {
      src: "/images/proyecto-patio.webp",
      alt: "Patio exterior reformado e impermeabilizado por Lozartico en Valencia",
      width: 1080,
      height: 1349,
    },
  },
  {
    slug: "impermeabilizacion-tejado",
    title: "Impermeabilización de tejado",
    category: "Impermeabilización",
    location: "Gran Canaria",
    description:
      "Tratamiento de cubierta y tejado para resolver filtraciones y proteger la vivienda frente a la lluvia y la humedad.",
    image: {
      src: "/images/impermeabilizacion-tejado.webp",
      alt: "Trabajo de impermeabilización de tejado realizado por Lozartico",
      width: 900,
      height: 1200,
    },
  },
  {
    slug: "cesped-artificial",
    title: "Instalación de césped artificial",
    category: "Césped artificial",
    location: "Valencia",
    description:
      "Instalación de césped artificial en un espacio cubierto, con preparación de la base y remates cuidados.",
    image: {
      src: "/images/cesped-artificial-2.webp",
      alt: "Instalación de césped artificial realizada por Lozartico",
      width: 1080,
      height: 1440,
    },
  },
  {
    slug: "escalera-de-finca",
    title: "Reforma de escalera de finca",
    category: "Comunidades",
    location: "Valencia",
    description:
      "Reforma y mejora de una escalera de finca, cuidando el acceso y los acabados de una zona común.",
    image: {
      src: "/images/finca-escalera.webp",
      alt: "Reforma de escalera de finca realizada por Lozartico",
      width: 1080,
      height: 1920,
    },
  },
];
