import { siteConfig } from "@/content/site";

const defaultMessage = "Hola, me gustaría solicitar un presupuesto.";

export function whatsappHref(message: string = defaultMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailtoHref(service?: string) {
  const subject = service
    ? `Solicitud de presupuesto - ${service}`
    : "Solicitud de presupuesto - Lozartico";

  const lines = [
    "Hola, me gustaría solicitar un presupuesto.",
    "",
    "Nombre:",
    "Teléfono:",
    "Zona (Valencia / Gran Canaria / Lanzarote):",
    service ? `Servicio: ${service}` : "Servicio:",
    "Detalles del trabajo:",
    "",
    "Gracias.",
  ];

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}
