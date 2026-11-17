export type ServiceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ServiceBenefit = {
  title: string;
  text: string;
};

export type ServiceStep = {
  title: string;
  text: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  category:
    | "construccion"
    | "instalaciones"
    | "impermeabilizacion"
    | "mantenimiento";
  eyebrow: string;
  title: string;
  heroText: string;
  introTitle: string;
  introText: string;
  benefitsTitle: string;
  benefits: ServiceBenefit[];
  steps: ServiceStep[];
  faqs: ServiceFAQ[];
  image: ServiceImage;
  gallery: ServiceImage[];
  whatsappMessage: string;
  metaTitle: string;
  metaDescription: string;
  related: string[];
};

export type HomeService = {
  id: string;
  icon: "home" | "wrench" | "droplet" | "building";
  title: string;
  description: string;
  bullets: string[];
  whatsappMessage: string;
  links: { label: string; href: string }[];
};

const images = {
  construccion: {
    src: "/images/construccion.webp",
    alt: "Obra de construcción y reforma ejecutada por Lozartico",
    width: 900,
    height: 1200,
  },
  bano1: {
    src: "/images/reforma-bano-1.webp",
    alt: "Reforma de baño con alicatado moderno realizada por Lozartico",
    width: 1080,
    height: 1920,
  },
  bano2: {
    src: "/images/reforma-bano-2.webp",
    alt: "Detalle de reforma de baño con acabados de Lozartico",
    width: 1080,
    height: 1920,
  },
  tejado: {
    src: "/images/impermeabilizacion-tejado.webp",
    alt: "Impermeabilización de tejado realizada por Lozartico",
    width: 900,
    height: 1200,
  },
  aire: {
    src: "/images/hero-aire-acondicionado.webp",
    alt: "Instalación de aire acondicionado por Lozartico",
    width: 1080,
    height: 1440,
  },
  patio: {
    src: "/images/proyecto-patio.webp",
    alt: "Patio exterior reformado e impermeabilizado por Lozartico",
    width: 1080,
    height: 1349,
  },
  suelo1: {
    src: "/images/instalacion-suelo-1.webp",
    alt: "Instalación de suelo durante una reforma de Lozartico",
    width: 1080,
    height: 1440,
  },
  suelo2: {
    src: "/images/instalacion-suelo-2.webp",
    alt: "Detalle de instalación de suelo en una reforma",
    width: 1080,
    height: 1440,
  },
  cesped1: {
    src: "/images/cesped-artificial-1.webp",
    alt: "Instalación de césped artificial en una terraza",
    width: 1080,
    height: 816,
  },
  cesped2: {
    src: "/images/cesped-artificial-2.webp",
    alt: "Detalle de césped artificial instalado por Lozartico",
    width: 1080,
    height: 1440,
  },
  cesped3: {
    src: "/images/cesped-artificial-3.webp",
    alt: "Acabado de césped artificial en un patio",
    width: 1080,
    height: 811,
  },
  finca: {
    src: "/images/finca-escalera.webp",
    alt: "Reforma de escalera de una finca realizada por Lozartico",
    width: 1080,
    height: 1920,
  },
};

export const homeServices: HomeService[] = [
  {
    id: "construccion",
    icon: "home",
    title: "Construcción y reformas",
    description:
      "Obra nueva y reformas de viviendas, locales y comunidades.",
    bullets: [
      "Baños, cocinas y suelos",
      "Alicatados, pintura y acabados",
      "Césped artificial",
    ],
    whatsappMessage: "Hola, quiero presupuesto para una obra o reforma.",
    links: [{ label: "Ver servicio", href: "/construccion-reformas" }],
  },
  {
    id: "instalaciones",
    icon: "wrench",
    title: "Instalaciones",
    description:
      "Fontanería, electricidad y climatización, integradas en la obra cuando hace falta.",
    bullets: [
      "Reparaciones y renovaciones",
      "Cuadros, acometidas y puntos",
      "Split y conductos",
    ],
    whatsappMessage: "Hola, quiero presupuesto para una instalación.",
    links: [{ label: "Ver servicio", href: "/instalaciones" }],
  },
  {
    id: "impermeabilizacion",
    icon: "droplet",
    title: "Impermeabilización",
    description:
      "Protección de superficies expuestas a filtraciones y humedades.",
    bullets: [
      "Terrazas y cubiertas",
      "Tejados",
      "Fachadas",
    ],
    whatsappMessage: "Hola, quiero presupuesto para impermeabilización.",
    links: [{ label: "Ver servicio", href: "/impermeabilizacion" }],
  },
  {
    id: "mantenimiento",
    icon: "building",
    title: "Mantenimiento",
    description:
      "Reparaciones y mantenimiento para comunidades y fincas.",
    bullets: [
      "Bajantes y filtraciones",
      "Zonas comunes",
      "Actuaciones puntuales",
    ],
    whatsappMessage: "Hola, quiero presupuesto para mantenimiento.",
    links: [{ label: "Ver servicio", href: "/mantenimiento" }],
  },
];

export const services: Service[] = [
  {
    slug: "construccion-reformas",
    category: "construccion",
    eyebrow: "Obra nueva y reformas",
    title: "Construcción y reformas",
    heroText:
      "Ejecutamos obra nueva y reformas integrales de viviendas, locales y comunidades en Valencia y Gran Canaria, según el proyecto y la dirección técnica aportados. También instalamos césped artificial.",
    introTitle: "Obra nueva y reformas, ejecutadas con orden",
    introText:
      "Nos encargamos de la ejecución: albañilería, alicatados, pintura, suelos, instalaciones y acabados. No redactamos proyectos de arquitectura ni asumimos la dirección facultativa.",
    benefitsTitle: "Qué ejecutamos",
    benefits: [
      {
        title: "Obra nueva",
        text: "Ejecución de obra nueva conforme al proyecto técnico y la dirección de obra aportados por el cliente.",
      },
      {
        title: "Reformas integrales",
        text: "Renovación de viviendas, locales y comunidades: distribución, instalaciones y acabados.",
      },
      {
        title: "Suelos y acabados",
        text: "Alicatados, pintura, pavimentos y césped artificial.",
      },
    ],
    steps: [
      {
        title: "Visita y alcance",
        text: "Revisamos el espacio y concretamos qué trabajos hay que ejecutar.",
      },
      {
        title: "Presupuesto",
        text: "Detallamos partidas, materiales y plazos antes de empezar.",
      },
      {
        title: "Ejecución",
        text: "Implementamos los trabajos y mantenemos el espacio ordenado.",
      },
      {
        title: "Entrega",
        text: "Revisamos el resultado contigo y cerramos los remates.",
      },
    ],
    faqs: [
      {
        question: "¿Hacéis obra nueva?",
        answer:
          "Sí. Ejecutamos obra nueva según el proyecto y la dirección técnica aportados. No redactamos el proyecto de arquitectura.",
      },
      {
        question: "¿Qué incluye una reforma integral?",
        answer:
          "Depende del estado del inmueble. Puede incluir demolición, albañilería, instalaciones, alicatados, suelos, pintura y acabados.",
      },
      {
        question: "¿Trabajáis en Valencia y Gran Canaria?",
        answer:
          "Sí. Ejecutamos trabajos en Valencia y Gran Canaria. Escríbenos con la ubicación para confirmar disponibilidad.",
      },
    ],
    image: images.bano1,
    gallery: [images.bano2, images.construccion, images.suelo1, images.suelo2, images.cesped1, images.cesped3],
    whatsappMessage:
      "Hola, quiero presupuesto para una obra o reforma.",
    metaTitle:
      "Construcción y reformas en Valencia y Gran Canaria | Lozartico",
    metaDescription:
      "Ejecución de obra nueva y reformas integrales en Valencia y Gran Canaria. Baños, cocinas, alicatados, pintura y suelos.",
    related: ["instalaciones", "impermeabilizacion"],
  },
  {
    slug: "instalaciones",
    category: "instalaciones",
    eyebrow: "Fontanería, electricidad y climatización",
    title: "Instalaciones",
    heroText:
      "Implementamos fontanería, electricidad y climatización en viviendas, locales y comunidades de Valencia y Gran Canaria.",
    introTitle: "Instalaciones integradas en el trabajo",
    introText:
      "Revisamos la instalación existente y ejecutamos la solución acordada: renovación, reparación o instalación nueva. Cuando forma parte de una reforma, implementamos los trabajos en el orden acordado.",
    benefitsTitle: "Qué implementamos",
    benefits: [
      {
        title: "Fontanería",
        text: "Fugas, bajantes, tuberías, sanitarios, grifería y renovación de instalaciones.",
      },
      {
        title: "Electricidad",
        text: "Cuadros, acometidas, puntos de luz, mecanismos e iluminación.",
      },
      {
        title: "Climatización",
        text: "Aire acondicionado split, sistemas por conductos y mantenimiento.",
      },
    ],
    steps: [
      {
        title: "Revisión",
        text: "Comprobamos la instalación y el alcance del trabajo.",
      },
      {
        title: "Presupuesto",
        text: "Definimos materiales, actuaciones y plazos.",
      },
      {
        title: "Ejecución",
        text: "Implementamos la instalación cuidando acabados y limpieza.",
      },
      {
        title: "Comprobación",
        text: "Verificamos el funcionamiento y resolvemos dudas de uso.",
      },
    ],
    faqs: [
      {
        question: "¿Trabajáis en comunidades y fincas?",
        answer:
          "Sí. Atendemos bajantes, zonas comunes y reparaciones para comunidades y administradores de fincas.",
      },
      {
        question: "¿Instaláis aire acondicionado?",
        answer:
          "Sí. Instalamos equipos split y sistemas por conductos, además de realizar su mantenimiento.",
      },
      {
        question: "¿En qué zonas trabajáis?",
        answer:
          "Trabajamos en Valencia y Gran Canaria. Escríbenos con la ubicación y el tipo de instalación.",
      },
    ],
    image: images.aire,
    gallery: [],
    whatsappMessage: "Hola, quiero presupuesto para una instalación.",
    metaTitle:
      "Fontanería, electricidad y climatización en Valencia y Gran Canaria | Lozartico",
    metaDescription:
      "Instalaciones de fontanería, electricidad y climatización en Valencia y Gran Canaria. Reparaciones, renovaciones y mantenimiento.",
    related: ["construccion-reformas", "mantenimiento"],
  },
  {
    slug: "impermeabilizacion",
    category: "impermeabilizacion",
    eyebrow: "Impermeabilización",
    title: "Impermeabilización de terrazas, tejados y fachadas",
    heroText:
      "Ejecutamos trabajos de impermeabilización en terrazas, cubiertas, tejados y fachadas de Valencia y Gran Canaria.",
    introTitle: "Resolver la filtración desde el origen",
    introText:
      "Revisamos el soporte, los encuentros y el drenaje antes de aplicar el sistema. El objetivo es proteger la superficie y evitar que el problema vuelva.",
    benefitsTitle: "Qué impermeabilizamos",
    benefits: [
      {
        title: "Terrazas y cubiertas",
        text: "Tratamiento de juntas, encuentros y sumideros para evitar la entrada de agua.",
      },
      {
        title: "Tejados",
        text: "Revisión y protección de cubiertas inclinadas y puntos vulnerables.",
      },
      {
        title: "Fachadas",
        text: "Sellado de fisuras y puntos de entrada de agua en paramentos exteriores.",
      },
    ],
    steps: [
      {
        title: "Revisión",
        text: "Comprobamos el soporte, el drenaje y el origen de la filtración.",
      },
      {
        title: "Presupuesto",
        text: "Definimos el sistema, los materiales y el alcance.",
      },
      {
        title: "Ejecución",
        text: "Preparamos la superficie e implementamos la impermeabilización.",
      },
      {
        title: "Revisión final",
        text: "Comprobamos el acabado y explicamos el mantenimiento básico.",
      },
    ],
    faqs: [
      {
        question: "¿Impermeabilizáis tejados y fachadas?",
        answer:
          "Sí. Trabajamos en terrazas, cubiertas, tejados y fachadas. Revisamos primero el origen de la filtración.",
      },
      {
        question: "¿Se puede impermeabilizar sin cambiar el pavimento?",
        answer:
          "Depende del estado del soporte y del sistema. Lo valoramos después de revisar la superficie.",
      },
      {
        question: "¿Trabajáis en Valencia y Gran Canaria?",
        answer:
          "Sí. Realizamos trabajos de impermeabilización en Valencia y Gran Canaria.",
      },
    ],
    image: images.tejado,
    gallery: [images.patio],
    whatsappMessage: "Hola, quiero presupuesto para impermeabilización.",
    metaTitle:
      "Impermeabilización en Valencia y Gran Canaria | Lozartico",
    metaDescription:
      "Impermeabilización de terrazas, cubiertas, tejados y fachadas en Valencia y Gran Canaria. Soluciones frente a filtraciones y humedades.",
    related: ["construccion-reformas", "mantenimiento"],
  },
  {
    slug: "mantenimiento",
    category: "mantenimiento",
    eyebrow: "Comunidades y fincas",
    title: "Mantenimiento de comunidades y fincas",
    heroText:
      "Reparamos y mantenemos comunidades y fincas en Valencia y Gran Canaria: bajantes, filtraciones, zonas comunes y actuaciones puntuales.",
    introTitle: "Un interlocutor para el mantenimiento de la finca",
    introText:
      "Atendemos la necesidad concreta, revisamos el alcance y ejecutamos la reparación sin añadir trabajos que no sean necesarios.",
    benefitsTitle: "Qué resolvemos",
    benefits: [
      {
        title: "Bajantes y filtraciones",
        text: "Reparación y sustitución de bajantes, filtraciones y elementos comunes.",
      },
      {
        title: "Zonas comunes",
        text: "Escaleras, portales, patios y otras zonas de uso compartido.",
      },
      {
        title: "Reparaciones y revisiones",
        text: "Actuaciones puntuales y mantenimiento para comunidades y administradores.",
      },
    ],
    steps: [
      {
        title: "Consulta",
        text: "Nos trasladas la necesidad de la comunidad o del administrador.",
      },
      {
        title: "Revisión",
        text: "Visitamos la finca y valoramos el alcance.",
      },
      {
        title: "Presupuesto",
        text: "Preparamos una propuesta con trabajos y materiales.",
      },
      {
        title: "Ejecución",
        text: "Implementamos la reparación y cuidamos la limpieza.",
      },
    ],
    faqs: [
      {
        question: "¿Trabajáis con administradores de fincas?",
        answer:
          "Sí. Atendemos comunidades y administradores de fincas en Valencia y Gran Canaria.",
      },
      {
        question: "¿Reparáis bajantes y filtraciones?",
        answer:
          "Sí. Reparamos bajantes, filtraciones y elementos comunes, ejecutando los oficios necesarios.",
      },
      {
        question: "¿Hacéis mantenimiento periódico?",
        answer:
          "Valoramos cada caso y proponemos la revisión o reparación que corresponda.",
      },
    ],
    image: images.finca,
    gallery: [images.suelo1, images.suelo2],
    whatsappMessage: "Hola, quiero presupuesto para mantenimiento.",
    metaTitle:
      "Mantenimiento de comunidades y fincas en Valencia y Gran Canaria | Lozartico",
    metaDescription:
      "Mantenimiento de comunidades y fincas en Valencia y Gran Canaria. Bajantes, filtraciones, zonas comunes y reparaciones.",
    related: ["instalaciones", "construccion-reformas"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service) {
  return service.related
    .map((slug) => getService(slug))
    .filter((related): related is Service => Boolean(related));
}
