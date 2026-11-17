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
    | "reformas"
    | "fontaneria"
    | "electricidad"
    | "climatizacion"
    | "impermeabilizacion"
    | "cesped"
    | "fincas";
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
  icon: "air" | "home" | "terrace" | "wrench" | "bolt" | "leaf" | "building";
  title: string;
  description: string;
  bullets: string[];
  whatsappMessage: string;
  links: { label: string; href: string }[];
};

const images = {
  construccion: {
    src: "/images/construccion.webp",
    alt: "Obra de construcción y reforma realizada por Lozartico",
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
    alt: "Detalle de reforma de baño con acabados de calidad de Lozartico",
    width: 1080,
    height: 1920,
  },
  tejado: {
    src: "/images/impermeabilizacion-tejado.webp",
    alt: "Trabajo de impermeabilización de tejado y cubierta de Lozartico",
    width: 900,
    height: 1200,
  },
  aire: {
    src: "/images/hero-aire-acondicionado.webp",
    alt: "Instalación y mantenimiento de aire acondicionado por Lozartico",
    width: 1080,
    height: 1440,
  },
  armario: {
    src: "/images/proyecto-armario.webp",
    alt: "Habitación con armario empotrado reformada por Lozartico",
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
  suelo1: {
    src: "/images/instalacion-suelo-1.webp",
    alt: "Instalación de suelo durante una reforma de Lozartico",
    width: 1080,
    height: 1440,
  },
  suelo2: {
    src: "/images/instalacion-suelo-2.webp",
    alt: "Detalle de instalación de suelo y borde de puerta",
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
    id: "reformas",
    icon: "home",
    title: "Reformas y construcción",
    description:
      "Reformas integrales de viviendas, locales y comunidades. Coordinamos alicatados, pintura, suelos, impermeabilización, fontanería y electricidad.",
    bullets: [
      "Reformas integrales y alicatados",
      "Pintura, suelos e impermeabilización",
      "Coordinación de todos los oficios",
    ],
    whatsappMessage: "Hola, quiero presupuesto para una reforma.",
    links: [
      { label: "Valencia", href: "/reformas-valencia" },
      { label: "Gran Canaria", href: "/reformas-gran-canaria" },
      { label: "Impermeabilización", href: "/impermeabilizacion-terrazas" },
      { label: "Césped artificial", href: "/cesped-artificial" },
    ],
  },
  {
    id: "fontaneria",
    icon: "wrench",
    title: "Fontanería",
    description:
      "Renovamos y reparamos instalaciones de fontanería en baños, cocinas y comunidades, incluyendo bajantes de fincas y soluciones para filtraciones.",
    bullets: [
      "Baños y cocinas",
      "Bajantes de fincas",
      "Renovación de instalaciones",
    ],
    whatsappMessage: "Hola, quiero presupuesto para fontanería.",
    links: [{ label: "Ver servicio", href: "/fontaneria" }],
  },
  {
    id: "electricidad",
    icon: "bolt",
    title: "Electricidad",
    description:
      "Instalaciones eléctricas para viviendas, locales y empresas, con atención a acometidas, cuadros de potencia y seguridad de la instalación.",
    bullets: [
      "Acometidas industriales y residenciales",
      "Cuadros de potencia",
      "Instalaciones y mejoras eléctricas",
    ],
    whatsappMessage: "Hola, quiero presupuesto para electricidad.",
    links: [{ label: "Ver servicio", href: "/electricidad" }],
  },
  {
    id: "climatizacion",
    icon: "air",
    title: "Climatización",
    description:
      "Instalación y mantenimiento de aire acondicionado split y conductos para viviendas, oficinas y locales que necesitan confort durante todo el año.",
    bullets: [
      "Aire acondicionado split",
      "Sistemas por conductos",
      "Mantenimiento de equipos",
    ],
    whatsappMessage: "Hola, quiero presupuesto para aire acondicionado.",
    links: [
      { label: "Valencia", href: "/aire-acondicionado-valencia" },
      { label: "Gran Canaria", href: "/aire-acondicionado-gran-canaria" },
    ],
  },
  {
    id: "cesped",
    icon: "leaf",
    title: "Césped artificial",
    description:
      "Instalación de césped artificial en terrazas, patios y jardines, con preparación de la base y acabados adaptados al espacio.",
    bullets: [
      "Terrazas, patios y jardines",
      "Preparación de la base",
      "Acabados y mantenimiento",
    ],
    whatsappMessage: "Hola, quiero presupuesto para césped artificial.",
    links: [{ label: "Ver servicio", href: "/cesped-artificial" }],
  },
  {
    id: "fincas",
    icon: "building",
    title: "Administración de fincas",
    description:
      "Reformas, reparaciones y mantenimiento para comunidades y administradores de fincas, con coordinación de zonas comunes y bajantes.",
    bullets: [
      "Comunidades y administradores",
      "Bajantes y zonas comunes",
      "Reformas y mantenimiento",
    ],
    whatsappMessage:
      "Hola, quiero presupuesto para una finca o comunidad.",
    links: [{ label: "Ver servicio", href: "/administracion-fincas" }],
  },
];

export const services: Service[] = [
  {
    slug: "reformas-valencia",
    category: "reformas",
    eyebrow: "Construcción y reformas en Valencia",
    title: "Reformas integrales en Valencia",
    heroText:
      "Reformas integrales para viviendas, locales y comunidades en Valencia. Coordinamos albañilería, alicatados, pintura, suelos, fontanería, electricidad e impermeabilización.",
    introTitle: "Una obra bien planificada empieza antes de levantar nada",
    introText:
      "Analizamos el estado del espacio y el objetivo de la reforma para definir los trabajos necesarios, los materiales y los acabados. La coordinación es clave para que cada parte de la obra tenga sentido.",
    benefitsTitle: "Qué podemos reformar",
    benefits: [
      {
        title: "Reformas integrales",
        text: "Transformación de viviendas, locales y comunidades para mejorar distribución, acabados, funcionalidad y confort.",
      },
      {
        title: "Baños, cocinas y suelos",
        text: "Reformas completas con demolición, alicatado, fontanería, electricidad, revestimientos y montaje.",
      },
      {
        title: "Terrazas, fachadas y pintura",
        text: "Impermeabilización, reparación de superficies, pintura y acabados para proteger y renovar el inmueble.",
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
        question: "¿Hacéis reformas de baños, cocinas y suelos?",
        answer:
          "Sí. Trabajamos reformas completas de baños y cocinas, además de instalación de suelos, alicatados, pintura y acabados.",
      },
      {
        question: "¿En qué zonas trabajáis?",
        answer:
          "Trabajamos en Valencia. Escríbenos con la ubicación para confirmar disponibilidad.",
      },
    ],
    image: images.bano1,
    gallery: [images.bano2, images.construccion, images.suelo1, images.suelo2],
    whatsappMessage:
      "Hola, quiero presupuesto para una reforma en Valencia.",
    metaTitle:
      "Reformas integrales en Valencia | Baños, cocinas y suelos | Lozartico",
    metaDescription:
      "Reformas integrales en Valencia. Baños, cocinas, alicatados, pintura, suelos, fontanería, electricidad e impermeabilización.",
    related: [
      "reformas-gran-canaria",
      "impermeabilizacion-terrazas",
      "cesped-artificial",
    ],
  },
  {
    slug: "impermeabilizacion-terrazas",
    category: "impermeabilizacion",
    eyebrow: "Impermeabilización de terrazas y fachadas",
    title: "Impermeabilización de terrazas y fachadas",
    heroText:
      "Protegemos terrazas, cubiertas, tejados y fachadas frente a filtraciones, humedades y goteras en Valencia.",
    introTitle: "Soluciones contra filtraciones, humedades y goteras",
    introText:
      "Aplicamos soluciones para terrazas, cubiertas, tejados y fachadas con un enfoque técnico y duradero. El objetivo es resolver el origen del problema y dejar un acabado limpio.",
    benefitsTitle: "Qué resolvemos",
    benefits: [
      {
        title: "Filtraciones y goteras",
        text: "Localizamos los puntos críticos y tratamos juntas, fisuras y encuentros que permiten la entrada de agua.",
      },
      {
        title: "Terrazas, tejados y fachadas",
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
        text: "Sellamos los puntos críticos y aplicamos el sistema adecuado al tipo de superficie.",
      },
      {
        title: "Acabado final",
        text: "Revisamos el resultado y dejamos la superficie limpia y protegida.",
      },
    ],
    faqs: [
      {
        question: "¿Cuándo conviene impermeabilizar una terraza o fachada?",
        answer:
          "Cuando aparecen filtraciones, humedades, juntas deterioradas o fisuras, y también como prevención en superficies expuestas al agua y al sol.",
      },
      {
        question: "¿Se puede impermeabilizar sin cambiar el pavimento?",
        answer:
          "Depende del estado del soporte y del sistema elegido. Lo valoramos tras revisar la superficie y explicamos las opciones disponibles.",
      },
      {
        question: "¿Trabajáis en Valencia?",
        answer:
          "Sí. Realizamos impermeabilización de terrazas, cubiertas, tejados y fachadas en Valencia.",
      },
    ],
    image: images.tejado,
    gallery: [images.patio, images.cesped1],
    whatsappMessage:
      "Hola, necesito impermeabilizar una terraza o fachada.",
    metaTitle:
      "Impermeabilización de terrazas y fachadas en Valencia | Lozartico",
    metaDescription:
      "Impermeabilización de terrazas, cubiertas, tejados y fachadas en Valencia. Soluciones contra filtraciones, humedades y goteras.",
    related: ["reformas-valencia", "reformas-gran-canaria", "cesped-artificial"],
  },
  {
    slug: "fontaneria",
    category: "fontaneria",
    eyebrow: "Fontanería en Valencia",
    title: "Fontanería para viviendas, locales y fincas",
    heroText:
      "Renovamos y reparamos instalaciones de fontanería en baños, cocinas y comunidades. Atendemos bajantes de fincas, filtraciones y mejoras de instalación en Valencia.",
    introTitle: "Instalaciones de fontanería bien resueltas",
    introText:
      "Revisamos el estado de la instalación y el origen del problema antes de proponer una solución. Trabajamos tanto en reformas completas como en reparaciones y renovaciones puntuales.",
    benefitsTitle: "Qué hacemos",
    benefits: [
      {
        title: "Baños y cocinas",
        text: "Renovación de tuberías, aparatos sanitarios, grifería y conexiones en reformas de baño y cocina.",
      },
      {
        title: "Bajantes de fincas",
        text: "Reparación y sustitución de bajantes y elementos comunes para comunidades y administradores de fincas.",
      },
      {
        title: "Filtraciones y reparaciones",
        text: "Localizamos fugas y resolvemos filtraciones con el menor impacto posible en el espacio.",
      },
    ],
    steps: [
      {
        title: "Consulta",
        text: "Nos cuentas qué ocurre y en qué tipo de espacio, vivienda o comunidad.",
      },
      {
        title: "Revisión",
        text: "Comprobamos la instalación y el origen del problema.",
      },
      {
        title: "Presupuesto",
        text: "Explicamos la solución, los materiales y el coste antes de intervenir.",
      },
      {
        title: "Ejecución",
        text: "Realizamos el trabajo cuidando la limpieza y el acabado final.",
      },
    ],
    faqs: [
      {
        question: "¿Trabajáis en comunidades y fincas?",
        answer:
          "Sí. Atendemos bajantes, elementos comunes y reparaciones para comunidades y administradores de fincas.",
      },
      {
        question: "¿Hacéis fontanería en reformas completas?",
        answer:
          "Sí. Coordinamos la fontanería con albañilería, alicatado, electricidad y acabados en reformas de baños y cocinas.",
      },
      {
        question: "¿En qué zonas trabajáis?",
        answer:
          "Trabajamos en Valencia. Escríbenos con la ubicación para confirmar disponibilidad.",
      },
    ],
    image: images.bano2,
    gallery: [images.bano1, images.finca],
    whatsappMessage: "Hola, quiero presupuesto para fontanería.",
    metaTitle: "Fontanería en Valencia | Lozartico",
    metaDescription:
      "Fontanería para viviendas, locales y fincas en Valencia. Baños, cocinas, bajantes, filtraciones y renovación de instalaciones.",
    related: ["reformas-valencia", "administracion-fincas"],
  },
  {
    slug: "electricidad",
    category: "electricidad",
    eyebrow: "Electricidad en Valencia",
    title: "Electricidad para viviendas, locales y empresas",
    heroText:
      "Instalaciones eléctricas y mejoras de seguridad para viviendas, locales y empresas. Trabajamos acometidas industriales y residenciales, cuadros de potencia y renovación de instalaciones.",
    introTitle: "Instalaciones seguras y bien dimensionadas",
    introText:
      "Analizamos la instalación existente y las necesidades de uso para proponer una solución segura. Un cuadro bien dimensionado y una instalación ordenada son la base de cualquier reforma.",
    benefitsTitle: "Qué hacemos",
    benefits: [
      {
        title: "Acometidas",
        text: "Acometidas industriales y residenciales adaptadas a la potencia y al uso previsto.",
      },
      {
        title: "Cuadros de potencia",
        text: "Instalación, renovación y organización de cuadros eléctricos con protecciones adecuadas.",
      },
      {
        title: "Instalaciones interiores",
        text: "Puntos de luz, tomas, iluminación y mejoras eléctricas en reformas de viviendas y locales.",
      },
    ],
    steps: [
      {
        title: "Consulta",
        text: "Nos cuentas qué necesitas y qué tipo de espacio o instalación tienes.",
      },
      {
        title: "Revisión",
        text: "Comprobamos la instalación, la potencia y las condiciones de seguridad.",
      },
      {
        title: "Propuesta",
        text: "Definimos el trabajo, los materiales y el presupuesto.",
      },
      {
        title: "Ejecución",
        text: "Realizamos la instalación y dejamos el espacio ordenado y seguro.",
      },
    ],
    faqs: [
      {
        question: "¿Hacéis acometidas industriales?",
        answer:
          "Sí. Trabajamos acometidas industriales y residenciales, además de cuadros de potencia y mejoras de instalación.",
      },
      {
        question: "¿Coordináis la electricidad con una reforma?",
        answer:
          "Sí. Integramos la instalación eléctrica en el plan de reforma para coordinar puntos, cuadro y acabados.",
      },
      {
        question: "¿En qué zonas trabajáis?",
        answer:
          "Trabajamos en Valencia. Escríbenos con la ubicación y el tipo de instalación.",
      },
    ],
    image: images.construccion,
    gallery: [],
    whatsappMessage: "Hola, quiero presupuesto para electricidad.",
    metaTitle: "Electricidad en Valencia | Lozartico",
    metaDescription:
      "Electricidad para viviendas, locales y empresas en Valencia. Acometidas industriales y residenciales, cuadros de potencia e instalaciones.",
    related: ["reformas-valencia", "administracion-fincas"],
  },
  {
    slug: "aire-acondicionado-valencia",
    category: "climatizacion",
    eyebrow: "Climatización en Valencia",
    title: "Aire acondicionado en Valencia",
    heroText:
      "Instalamos soluciones de climatización para viviendas, oficinas y locales de Valencia. Estudiamos el espacio y cuidamos cada detalle de la instalación.",
    introTitle: "Climatización adaptada al espacio",
    introText:
      "Una instalación bien dimensionada ayuda a conseguir confort, un consumo controlado y un equipo que funcione correctamente durante todo el año. Valoramos superficie, orientación y uso antes de proponer una solución.",
    benefitsTitle: "Soluciones de climatización",
    benefits: [
      {
        title: "Aire acondicionado split",
        text: "Una opción eficiente para dormitorios, salones, despachos y estancias que necesitan climatización individual.",
      },
      {
        title: "Sistemas por conductos",
        text: "Climatización integrada para varias estancias, con una instalación limpia y adaptada al espacio disponible.",
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
          "Depende del número de estancias, los metros y el uso. Un split es práctico para una habitación; un sistema por conductos permite climatizar varias zonas de forma integrada.",
      },
      {
        question: "¿Estudiáis el espacio antes de presupuestar?",
        answer:
          "Sí. Antes de proponer un equipo valoramos superficie, orientación, distribución y uso para que la solución sea coherente con el espacio.",
      },
      {
        question: "¿Trabajáis en Valencia?",
        answer:
          "Atendemos Valencia. Escríbenos con la ubicación y te confirmamos disponibilidad.",
      },
    ],
    image: images.aire,
    gallery: [],
    whatsappMessage:
      "Hola, quiero presupuesto para aire acondicionado en Valencia.",
    metaTitle:
      "Aire acondicionado en Valencia | Instalación y climatización | Lozartico",
    metaDescription:
      "Instalación de aire acondicionado en Valencia para viviendas, oficinas y locales. Split, conductos y climatización adaptada al espacio.",
    related: [
      "reformas-valencia",
      "aire-acondicionado-gran-canaria",
      "impermeabilizacion-terrazas",
    ],
  },
  {
    slug: "cesped-artificial",
    category: "cesped",
    eyebrow: "Césped artificial en Valencia",
    title: "Instalación de césped artificial",
    heroText:
      "Instalamos césped artificial en terrazas, patios y jardines de Valencia. Preparamos la base y cuidamos el acabado para que el resultado se vea natural y dure.",
    introTitle: "Un exterior cómodo y siempre verde",
    introText:
      "Valoramos el uso del espacio, el drenaje y el tipo de superficie antes de proponer la solución. El césped artificial permite disfrutar de terrazas y jardines con un mantenimiento mínimo.",
    benefitsTitle: "Qué instalamos",
    benefits: [
      {
        title: "Terrazas y patios",
        text: "Césped artificial adaptado a terrazas, patios y balcones, con preparación de la superficie y remates.",
      },
      {
        title: "Jardines y zonas comunes",
        text: "Soluciones para jardines, comunidades y espacios exteriores que necesitan un acabado verde y duradero.",
      },
      {
        title: "Base y acabados",
        text: "Preparamos la base, cuidamos las uniones y revisamos el resultado para que el acabado quede limpio.",
      },
    ],
    steps: [
      {
        title: "Visita y medición",
        text: "Revisamos la superficie, el uso y las condiciones del espacio.",
      },
      {
        title: "Preparación",
        text: "Adecuamos la base y resolvemos drenaje y remates.",
      },
      {
        title: "Instalación",
        text: "Colocamos el césped y cuidamos uniones y bordes.",
      },
      {
        title: "Revisión",
        text: "Comprobamos el acabado y te explicamos el mantenimiento básico.",
      },
    ],
    faqs: [
      {
        question: "¿Se puede instalar césped artificial en una terraza?",
        answer:
          "Sí, siempre que la superficie y el drenaje sean adecuados. Revisamos el espacio antes de proponer la instalación.",
      },
      {
        question: "¿Qué mantenimiento necesita?",
        answer:
          "El mantenimiento es mínimo: limpieza, cepillado puntual y revisión de uniones y bordes.",
      },
      {
        question: "¿Trabajáis en Valencia?",
        answer:
          "Sí. Instalamos césped artificial en Valencia.",
      },
    ],
    image: images.cesped1,
    gallery: [images.cesped2, images.cesped3],
    whatsappMessage: "Hola, quiero presupuesto para césped artificial.",
    metaTitle:
      "Césped artificial en Valencia | Instalación | Lozartico",
    metaDescription:
      "Instalación de césped artificial en terrazas, patios y jardines de Valencia. Preparación de base, drenaje y acabados.",
    related: ["reformas-valencia", "impermeabilizacion-terrazas"],
  },
  {
    slug: "administracion-fincas",
    category: "fincas",
    eyebrow: "Administración de fincas y comunidades",
    title: "Reformas y mantenimiento para fincas",
    heroText:
      "Trabajamos con administradores de fincas y comunidades en Valencia. Atendemos reformas, reparaciones, bajantes y zonas comunes con coordinación y documentación clara.",
    introTitle: "Un interlocutor para las necesidades de la finca",
    introText:
      "Las comunidades necesitan respuestas claras y trabajos bien coordinados. Revisamos la necesidad, proponemos la solución y organizamos la intervención para minimizar molestias.",
    benefitsTitle: "Qué resolvemos",
    benefits: [
      {
        title: "Comunidades y administradores",
        text: "Reformas y reparaciones en zonas comunes con un interlocutor directo para administradores y vecinos.",
      },
      {
        title: "Bajantes y zonas comunes",
        text: "Reparación de bajantes, filtraciones y elementos comunes coordinando los oficios necesarios.",
      },
      {
        title: "Reformas y mantenimiento",
        text: "Mejoras en escaleras, portales, patios y otros espacios de la finca.",
      },
    ],
    steps: [
      {
        title: "Consulta",
        text: "Nos trasladas la necesidad de la comunidad o del administrador.",
      },
      {
        title: "Revisión",
        text: "Visitamos la finca y valoramos el alcance del trabajo.",
      },
      {
        title: "Presupuesto",
        text: "Preparamos una propuesta con trabajos, materiales y plazos.",
      },
      {
        title: "Ejecución",
        text: "Coordinamos la intervención y cuidamos la limpieza de las zonas comunes.",
      },
    ],
    faqs: [
      {
        question: "¿Trabajáis con administradores de fincas?",
        answer:
          "Sí. Atendemos comunidades y administradores de fincas en Valencia.",
      },
      {
        question: "¿Podéis reparar bajantes y zonas comunes?",
        answer:
          "Sí. Coordinamos fontanería, albañilería y acabados para resolver bajantes, filtraciones y mejoras en zonas comunes.",
      },
      {
        question: "¿Cómo se gestiona el presupuesto?",
        answer:
          "Revisamos la necesidad, preparamos una propuesta y explicamos el alcance antes de intervenir.",
      },
    ],
    image: images.finca,
    gallery: [images.suelo1, images.suelo2],
    whatsappMessage:
      "Hola, quiero presupuesto para una finca o comunidad.",
    metaTitle:
      "Administración de fincas y comunidades en Valencia | Lozartico",
    metaDescription:
      "Reformas y mantenimiento para fincas, comunidades y administradores de fincas en Valencia. Bajantes, zonas comunes y reparaciones.",
    related: ["fontaneria", "electricidad"],
  },
  {
    slug: "reformas-gran-canaria",
    category: "reformas",
    eyebrow: "Construcción y reformas en Gran Canaria",
    title: "Reformas integrales en Gran Canaria",
    heroText:
      "Reformas integrales y renovación de viviendas, locales y comunidades en Las Palmas de Gran Canaria y otros puntos de la isla, con planificación, instalaciones y acabados coordinados.",
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
        title: "Baños, cocinas y fontanería",
        text: "Renovación de superficies, instalaciones y elementos de uso diario, cuidando diseño y resistencia.",
      },
      {
        title: "Interiores, exteriores y fachadas",
        text: "Mejoras en habitaciones, patios, terrazas y fachadas para adaptar el inmueble a nuevas necesidades.",
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
          "Sí. Trabajamos en Las Palmas de Gran Canaria y otros puntos de la isla, tanto en viviendas como en locales y comunidades.",
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
    image: images.bano1,
    gallery: [images.armario, images.habitacion, images.tejado],
    whatsappMessage:
      "Hola, quiero presupuesto para una reforma en Gran Canaria.",
    metaTitle:
      "Reformas integrales en Gran Canaria | Viviendas y locales | Lozartico",
    metaDescription:
      "Reformas integrales en Gran Canaria para viviendas, locales y comunidades. Baños, cocinas, alicatados, pintura e impermeabilización con acabados duraderos.",
    related: [
      "reformas-valencia",
      "aire-acondicionado-gran-canaria",
      "impermeabilizacion-terrazas",
    ],
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
        title: "Sistemas por conductos",
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
          "Un sistema por conductos o multisplit suele ser una buena opción cuando se quieren climatizar varias estancias. Lo valoramos según el espacio.",
      },
      {
        question: "¿Cómo pido presupuesto?",
        answer:
          "Envíanos un mensaje por WhatsApp o un email con la zona, los metros aproximados y qué espacios quieres climatizar.",
      },
    ],
    image: images.aire,
    gallery: [],
    whatsappMessage:
      "Hola, quiero presupuesto para aire acondicionado en Gran Canaria.",
    metaTitle:
      "Aire acondicionado en Gran Canaria | Instalación y climatización | Lozartico",
    metaDescription:
      "Instalación de aire acondicionado en Las Palmas y Gran Canaria para viviendas, oficinas y locales. Soluciones split y conductos. Presupuesto por WhatsApp.",
    related: ["aire-acondicionado-valencia", "reformas-gran-canaria"],
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
