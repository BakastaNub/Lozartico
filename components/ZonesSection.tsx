import type { CSSProperties } from "react";

import { ArrowUpRightIcon, MapPinIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

const coverage = [
  {
    index: "01",
    title: "Valencia",
    subtitle: "Servicio en Valencia",
    map: "https://www.openstreetmap.org/export/embed.html?bbox=-0.78%2C39.20%2C-0.08%2C39.78&layer=mapnik&marker=39.4699%2C-0.3763",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Valencia",
  },
  {
    index: "02",
    title: "Gran Canaria",
    subtitle: "Servicio en Gran Canaria",
    map: "https://www.openstreetmap.org/export/embed.html?bbox=-15.95%2C27.65%2C-15.25%2C28.25&layer=mapnik&marker=27.8431%2C-15.4450",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Gran+Canaria",
  },
  {
    index: "03",
    title: "Lanzarote",
    subtitle: "Servicio en Lanzarote",
    map: "https://www.openstreetmap.org/export/embed.html?bbox=-13.95%2C28.80%2C-13.35%2C29.30&layer=mapnik&marker=29.0469%2C-13.5899",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Lanzarote",
  },
];

export function ZonesSection() {
  return (
    <section className="section section--white zones" id="zonas">
      <div className="container">
        <SectionHeading
          eyebrow="Cobertura"
          title="Tres zonas, el mismo servicio"
          text="Trabajamos en Valencia, Gran Canaria y Lanzarote con el mismo equipo y los mismos servicios."
        />

        <div className="coverage-grid">
          {coverage.map((zone, index) => (
            <article
              className="coverage-card"
              key={zone.title}
              data-reveal
              style={
                {
                  "--reveal-delay": `${index * 100}ms`,
                } as CSSProperties
              }
            >
              <div className="coverage-card__map">
                <iframe
                  src={zone.map}
                  title={`Mapa de cobertura en ${zone.title}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="coverage-card__body">
                <div className="coverage-card__heading">
                  <span className="coverage-card__index">{zone.index}</span>
                  <MapPinIcon size={20} />
                </div>
                <h3>{zone.title}</h3>
                <p className="coverage-card__subtitle">{zone.subtitle}</p>

                <a
                  className="coverage-card__external"
                  href={zone.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir mapa en Google Maps
                  <ArrowUpRightIcon size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
