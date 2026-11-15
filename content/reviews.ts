export type Review = {
  name: string;
  role: string;
  rating: number;
  text: string;
  source: "original" | "google";
};

export const reviews: Review[] = [
  {
    name: "Marcelo V.",
    role: "Propietario en Valencia",
    rating: 5,
    text: "Instalaron el aire acondicionado en mi casa en dos días. Trabajo limpio, precio justo y el resultado es perfecto. Muy recomendables en Valencia.",
    source: "original",
  },
  {
    name: "Ana G.",
    role: "Propietaria en Gran Canaria",
    rating: 5,
    text: "Reformaron el baño completo en Canarias en una semana. El acabado es increíble, parece sacado de una revista. Profesionales de verdad.",
    source: "original",
  },
  {
    name: "Roberto H.",
    role: "Empresa cliente",
    rating: 5,
    text: "Contratamos el mantenimiento anual de nuestros equipos de climatización. Siempre puntuales y resolutivos. No cambiaríamos de empresa.",
    source: "original",
  },
];
