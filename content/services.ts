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
  category: "climatizacion" | "reformas" | "impermeabilizacion";
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
  icon: "air" | "home" | "terrace" | "wrench";
  title: string;
  description: string;
  bullets: string[];
  whatsappMessage: string;
  links: { label: string; href: string }[];
};

const images = {
  aire: {
    src: "/images/hero-aire-acondicionado.webp",
    alt: "Instalación y mantenimiento de aire acondicionado por Lozartico",
    width: 1080,
    height: 1440,
  },
  bano: {
    src: "/images/proyecto-bano.webp",
    alt: "Baño moderno reformado por Lozartico en Valencia",
    width: 1080,
    height: 1349,
  },
  armario: {
    src: "/images/proyecto-armario.webp",
    alt: "Habitación con armario empotrado reformada por Lozartico en Canarias",
    width: 1080,
    height: 1349,
  },
  habitacion: {
    src: "/images/proyecto-habitacion.webp",
    alt: "Habitación reformada en azul y blanco por Lozartico",
    width: 1080,
    height: 1349,
  },
  patio: {
    src: "/images/proyecto-patio.webp",
    alt: "Patio exterior reformado e impermeabilizado por Lozartico",
    width: 1080,
    height: 1349,
  },
};

export const homeServices: HomeService[] = [
  {
    id: "climatizacion",
    icon: "air",
    title: "Climatización",
    description:
      "Instalación y mantenimiento de aire acondicionado split y multisplit, calefacción y ventilación para viviendas y negocios.",
    bullets: [
      "Aire acondicionado split y multisplit",
      "Calefacción y bomba de calor",
      "Ventilación y renovación de aire",
    ],
    whatsappMessage: "Hola, quiero presupuesto para aire acondicionado.",
    links: [
      { label: "Valencia", href: "/aire-acondicionado-valencia" },
      { label: "Gran Canaria", href: "/aire-acondicionado-gran-canaria" },
    ],
  },
  {
    id: "reformas",
    icon: "home",
    title: "Reformas integrales",
    description:
      "Transformamos viviendas y locales con reformas completas de baños, cocinas, habitaciones y espacios interiores.",
    bullets: [
      "Reforma de baños y cocinas",
      "Reformas de viviendas y locales",
      "Patios, terrazas y exteriores",
    ],
    whatsappMessage: "Hola, quiero presupuesto para una reforma.",
    links: [
      { label: "Valencia", href: "/reformas-valencia" },
      { label: "Gran Canaria", href: "/reformas-gran-canaria" },
    ],
  },
  {
    id: "impermeabilizacion",
    icon: "terrace",
    title: "Impermeabilización",
    description:
      "Protegemos terrazas, cubiertas y patios frente a filtraciones, humedades y goteras con soluciones duraderas.",
    bullets: [
      "Terrazas y cubiertas",
      "Filtraciones y humedades",
      "Acabados exteriores",
    ],
    whatsappMessage: "Hola, necesito impermeabilizar una terraza.",
    links: [
      {
        label: "Ver servicio",
        href: "/impermeabilizacion-terrazas",
      },
    ],
  },
  {
    id: "mantenimiento",
    icon: "wrench",
    title: "Mantenimiento",
    description:
      "Revisiones periódicas y asistencia para mantener los equipos de climatización funcionando de forma eficiente.",
    bullets: [
      "Revisión y limpieza de equipos",
      "Contratos de mantenimiento",
      "Asistencia técnica",
    ],
    whatsappMessage: "Hola, quiero información sobre mantenimiento.",
    links: [],
  },
];

export const services: Service[] = [
  {
    slug: "aire-acondicionado-valencia",
    category: "climatizacion",
    eyebrow: "Climatización en Valencia",
    title: "Aire acondicionado en Valencia",
    heroText:
      "Instalamos soluciones de climatización pensadas para viviendas, oficinas y locales de Valencia. Estudiamos el espacio, recomendamos el sistema adecuado y cuidamos cada detalle de la instalación.",
    introTitle: "Climatización para el clima de Valencia",
    introText:
      "Una instalación bien dimensionada ayuda a conseguir confort, un consumo controlado y un equipo que funcione correctamente durante todo el año. Valoramos superficie, orientación y uso de la estancia antes de proponer una solución.",
    benefitsTitle: "Soluciones de climatización",
    benefits: [
      {
        title: "Aire acondicionado split",
        text: "Una opción eficiente para dormitorios, salones, despachos y estancias que necesitan climatización individual.",
      },
      {
        title: "Sistemas multisplit",
        text: "Climatización coordinada para varias estancias, con una instalación limpia y adaptada al espacio disponible.",
      },
      {
        title: "Estudio y presupuesto",
        text: "Analizamos la superficie, la orientación y el uso real para recomendar el equipo y la instalación adecuados.",
      },
    ],
    steps: [
      {
        title: "Contacto",
        text: "Cuéntanos qué espacio quieres climatizar y dónde está la vivienda o el local.",
      },
      {
        title: "Estudio del espacio",
        text: "Revisamos metros, orientación, distribución y necesidades de confort.",
      },
      {
        title: "Instalación",
        text: "Coordinamos el montaje con cuidado de acabados, conducciones y limpieza.",
      },
      {
        title: "Revisión final",
        text: "Comprobamos el funcionamiento y te explicamos el uso y mantenimiento básico.",
      },
    ],
    faqs: [
      {
        question: "¿Qué tipo de aire acondicionado me conviene?",
        answer:
          "Depende del número de estancias, los metros y el uso. Un split es práctico para una habitación; un multisplit permite climatizar varias zonas con una unidad exterior.",
      },
      {
        question: "¿Estudiáis el espacio antes de presupuestar?",
        answer:
          "Sí. Antes de proponer un equipo valoramos superficie, orientación, distribución y uso para que la solución sea coherente con el espacio.",
      },
      {
        question: "¿Trabajáis en toda la provincia de Valencia?",
        answer:
          "Atendemos Valencia y municipios de la provincia según disponibilidad. Escríbenos con la ubicación y te confirmamos.",
      },
    ],
    image: images.aire,
    gallery: [],
    whatsappMessage: "Hola, quiero presupuesto para aire acondicionado en Valencia.",
    metaTitle: "Aire acondicionado en Valencia | Instalación y climatización | Lozartico",
    metaDescription:
      "Instalación de aire acondicionado en Valencia para viviendas, oficinas y locales. Split, multisplit y climatización adaptada al espacio. Presupuesto por WhatsApp.",
    related: ["aire-acondicionado-gran-canaria", "reformas-valencia"],
  },
  {
    slug: "aire-acondicionado-gran-canaria",
    category: "climatizacion",
    eyebrow: "Climatización en Canarias",
    title: "Aire acondicionado en Gran Canaria",
    heroText:
      "Instalación de aire acondicionado y climatización para hogares, oficinas y locales en Las Palmas de Gran Canaria y otros puntos de la isla.",
    introTitle: "Confort durante todo el año en Gran Canaria",
    introText:
      "Elegimos la solución según el tamaño del espacio, su uso y las necesidades de temperatura. Una instalación correcta es tan importante como el equipo elegido.",
    benefitsTitle: "Climatización para viviendas y negocios",
    benefits: [
      {
        title: "Split para viviendas",
        text: "Una opción práctica para climatizar dormitorios, salones y espacios individuales con una instalación adaptada.",
      },
      {
        title: "Sistemas multisplit",
        text: "Para varias habitaciones o zonas que necesitan climatización coordinada y una instalación limpia.",
      },
      {
        title: "Climatización para negocios",
        text: "Soluciones para oficinas y locales que necesitan confort para trabajadores y clientes.",
      },
    ],
    steps: [
      {
        title: "Contacto",
        text: "Indícanos dónde está la vivienda o el negocio y qué espacio quieres climatizar.",
      },
      {
        title: "Estudio del espacio",
        text: "Valoramos tamaño, uso, orientación y exposición al calor.",
      },
      {
        title: "Instalación",
        text: "Realizamos el montaje cuidando conducciones, acabados y limpieza.",
      },
      {
        title: "Revisión final",
        text: "Verificamos el funcionamiento y resolvemos tus dudas de uso.",
      },
    ],
    faqs: [
      {
        question: "¿Instaláis en Las Palmas y en toda Gran Canaria?",
        answer:
          "Trabajamos en Las Palmas de Gran Canaria y en distintos puntos de la isla. Escríbenos con la ubicación para confirmar disponibilidad.",
      },
      {
        question: "¿Qué solución necesito para varias habitaciones?",
        answer:
          "Un multisplit suele ser una buena opción cuando se quieren climatizar varias estancias con una sola unidad exterior. Lo valoramos según el espacio.",
      },
      {
        question: "¿Cómo pido presupuesto?",
        answer:
          "Envíanos un mensaje por WhatsApp o un email con la zona, los metros aproximados y qué espacios quieres climatizar.",
      },
    ],
    image: images.aire,
    gallery: [],
    whatsappMessage: "Hola, quiero presupuesto para aire acondicionado en Gran Canaria.",
    metaTitle: "Aire acondicionado en Gran Canaria | Instalación y climatización | Lozartico",
    metaDescription:
      "Instalación de aire acondicionado en Las Palmas y Gran Canaria para viviendas, oficinas y locales. Soluciones split y multisplit. Presupuesto por WhatsApp.",
    related: ["aire-acondicionado-valencia", "reformas-gran-canaria"],
  },
  {
    slug: "reformas-valencia",
    category: "reformas",
    eyebrow: "Construcción y reformas en Valencia",
    title: "Reformas integrales en Valencia",
    heroText:
      "Reformas integrales para viviendas y locales, con especial atención a baños, cocinas, patios y distribución de espacios. Coordinamos el proyecto para que el resultado sea funcional y duradero.",
    introTitle: "Una obra bien planificada empieza antes de levantar nada",
    introText:
      "Analizamos el estado del espacio y el objetivo de la reforma para definir los trabajos necesarios, los materiales y los acabados. La coordinación es clave para que cada parte de la obra tenga sentido.",
    benefitsTitle: "Qué podemos reformar",
    benefits: [
      {
        title: "Reformas de viviendas",
        text: "Transformación de espacios interiores para mejorar distribución, acabados, funcionalidad y confort.",
      },
      {
        title: "Baños y cocinas",
        text: "Reformas completas con demolición, revestimientos, instalaciones y montaje según el proyecto.",
      },
      {
        title: "Patios y exteriores",
        text: "Pavimentos, impermeabilización y acabados para renovar espacios exteriores y prepararlos para su uso diario.",
      },
    ],
    steps: [
      {
        title: "Visita y medición",
        text: "Revisamos el estado del inmueble, los metros y las necesidades de la reforma.",
      },
      {
        title: "Planificación",
        text: "Definimos trabajos, materiales, acabados y el orden de la obra.",
      },
      {
        title: "Ejecución",
        text: "Coordinamos los oficios y cuidamos la limpieza y los detalles durante el proceso.",
      },
      {
        title: "Entrega",
        text: "Revisamos el resultado contigo y resolvemos los últimos ajustes.",
      },
    ],
    faqs: [
      {
        question: "¿Qué incluye una reforma integral?",
        answer:
          "Depende del estado del inmueble y del objetivo. Puede incluir demolición, albañilería, instalaciones, revestimientos, carpintería y acabados.",
      },
      {
        question: "¿Hacéis reformas de baños y cocinas?",
        answer:
          "Sí. Trabajamos reformas completas de baños y cocinas, coordinando fontanería, electricidad, revestimientos y montaje.",
      },
      {
        question: "¿Cómo se planifica la obra?",
        answer:
          "Primero visitamos el espacio y definimos el alcance. Después preparamos el presupuesto y organizamos los trabajos para minimizar molestias.",
      },
    ],
    image: images.bano,
    gallery: [images.armario, images.habitacion],
    whatsappMessage: "Hola, quiero presupuesto para una reforma en Valencia.",
    metaTitle: "Reformas integrales en Valencia | Baños, cocinas y patios | Lozartico",
    metaDescription:
      "Reformas integrales en Valencia para viviendas y locales. Reformas de baños, cocinas, patios y espacios interiores con planificación y acabados duraderos.",
    related: ["reformas-gran-canaria", "impermeabilizacion-terrazas"],
  },
  {
    slug: "reformas-gran-canaria",
    category: "reformas",
    eyebrow: "Construcción y reformas en Gran Canaria",
    title: "Reformas integrales en Gran Canaria",
    heroText:
      "Reformas integrales y renovación de viviendas y locales en Las Palmas de Gran Canaria y otros puntos de la isla, con atención a la planificación, las instalaciones y los acabados.",
    introTitle: "Espacios renovados para vivir y trabajar mejor",
    introText:
      "Adaptamos los trabajos al estado del inmueble y al uso previsto, desde una reforma de baño hasta una renovación más completa. Materiales, ventilación y exposición solar son factores clave en Canarias.",
    benefitsTitle: "Reformas para cada necesidad",
    benefits: [
      {
        title: "Reforma de vivienda",
        text: "Actualización de distribución, revestimientos, instalaciones y acabados para conseguir un espacio cómodo.",
      },
      {
        title: "Baños y cocinas",
        text: "Renovación de superficies, instalaciones y elementos de uso diario, cuidando diseño y resistencia.",
      },
      {
        title: "Interiores y exteriores",
        text: "Mejoras en habitaciones, patios y otros espacios para adaptar el inmueble a nuevas necesidades.",
      },
    ],
    steps: [
      {
        title: "Visita y medición",
        text: "Revisamos el estado del inmueble y escuchamos qué quieres conseguir.",
      },
      {
        title: "Planificación",
        text: "Definimos trabajos, materiales y acabados adaptados al clima y al uso.",
      },
      {
        title: "Ejecución",
        text: "Coordinamos la obra y mantenemos el espacio ordenado durante los trabajos.",
      },
      {
        title: "Entrega",
        text: "Revisamos el resultado contigo y cerramos los detalles finales.",
      },
    ],
    faqs: [
      {
        question: "¿Reformáis viviendas y locales en Gran Canaria?",
        answer:
          "Sí. Trabajamos en Las Palmas de Gran Canaria y otros puntos de la isla, tanto en viviendas como en locales.",
      },
      {
        question: "¿Qué materiales convienen en Canarias?",
        answer:
          "La elección depende del uso y la exposición. Valoramos humedad, ventilación, sol y resistencia para proponer materiales duraderos.",
      },
      {
        question: "¿Cómo empiezo una reforma?",
        answer:
          "Escríbenos con la ubicación, el tipo de espacio y lo que quieres cambiar. Concertamos una visita y preparamos el presupuesto.",
      },
    ],
    image: images.armario,
    gallery: [images.habitacion],
    whatsappMessage: "Hola, quiero presupuesto para una reforma en Gran Canaria.",
    metaTitle: "Reformas integrales en Gran Canaria | Viviendas y locales | Lozartico",
    metaDescription:
      "Reformas integrales en Gran Canaria para viviendas y locales. Baños, cocinas, interiores y exteriores con planificación y acabados duraderos.",
    related: ["reformas-valencia", "aire-acondicionado-gran-canaria"],
  },
  {
    slug: "impermeabilizacion-terrazas",
    category: "impermeabilizacion",
    eyebrow: "Terrazas, cubiertas y patios",
    title: "Impermeabilización de terrazas",
    heroText:
      "Protegemos terrazas, cubiertas y patios con soluciones profesionales, duraderas y adaptadas al estado de cada superficie en Valencia y Gran Canaria.",
    introTitle: "Soluciones contra filtraciones, humedades y goteras",
    introText:
      "Aplicamos soluciones profesionales para terrazas, cubiertas y patios con un enfoque estético, técnico y duradero. El objetivo es resolver el origen del problema y dejar un acabado limpio.",
    benefitsTitle: "Qué resolvemos",
    benefits: [
      {
        title: "Filtraciones y goteras",
        text: "Localizamos los puntos críticos y tratamos juntas, fisuras y encuentros que permiten la entrada de agua.",
      },
      {
        title: "Humedades",
        text: "Preparamos el soporte y aplicamos el sistema de impermeabilización adecuado a cada superficie.",
      },
      {
        title: "Acabado duradero",
        text: "Buscamos una solución funcional que se integre con la estética de la vivienda o el negocio.",
      },
    ],
    steps: [
      {
        title: "Diagnóstico",
        text: "Revisamos el soporte, los sumideros, las juntas y el origen de la entrada de agua.",
      },
      {
        title: "Preparación",
        text: "Limpiamos y preparamos la superficie para que el sistema se adhiera correctamente.",
      },
      {
        title: "Impermeabilización",
        text: "Sellamos los puntos críticos y aplicamos el sistema adecuado al tipo de terraza.",
      },
      {
        title: "Acabado final",
        text: "Revisamos el resultado y dejamos la superficie limpia y protegida.",
      },
    ],
    faqs: [
      {
        question: "¿Cuándo conviene impermeabilizar una terraza?",
        answer:
          "Cuando aparecen filtraciones, humedades, juntas deterioradas o fisuras, y también como prevención en superficies expuestas al agua y al sol.",
      },
      {
        question: "¿Se puede impermeabilizar sin cambiar el pavimento?",
        answer:
          "Depende del estado del soporte y del sistema elegido. Lo valoramos tras revisar la terraza y explicamos las opciones disponibles.",
      },
      {
        question: "¿Trabajáis en Valencia y Canarias?",
        answer:
          "Sí. Realizamos impermeabilización de terrazas, cubiertas y patios en Valencia, Gran Canaria y zonas de servicio según disponibilidad.",
      },
    ],
    image: images.patio,
    gallery: [],
    whatsappMessage: "Hola, necesito impermeabilizar una terraza.",
    metaTitle: "Impermeabilización de terrazas en Valencia y Gran Canaria | Lozartico",
    metaDescription:
      "Impermeabilización de terrazas, cubiertas y patios en Valencia y Gran Canaria. Soluciones contra filtraciones, humedades y goteras con acabados duraderos.",
    related: ["reformas-valencia", "reformas-gran-canaria"],
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
