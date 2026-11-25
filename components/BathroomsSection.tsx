import Image from "next/image";
import Link from "next/link";

import { CheckIcon } from "./Icons";

const bathroomWorks = [
  "Reformas integrales de baños",
  "Cambio de bañera por ducha",
  "Alicatado y revestimientos",
  "Instalación de sanitarios y grifería",
  "Fontanería",
  "Electricidad",
  "Otros trabajos de remodelación",
];

export function BathroomsSection() {
  return (
    <section className="section section--cream bathrooms" id="reformas-banos">
      <div className="container about__grid">
        <div className="about__media" data-reveal>
          <div className="about__media-main">
            <Image
              src="/images/reforma-bano-1.webp"
              alt="Baño reformado con alicatado y mampara de cristal"
              width={1080}
              height={1920}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div className="about__media-secondary">
            <Image
              src="/images/reforma-bano-2.webp"
              alt="Detalle de reforma de baño con sanitarios y revestimiento"
              width={1080}
              height={1920}
              sizes="(max-width: 900px) 45vw, 22vw"
            />
          </div>
        </div>

        <div className="about__copy" data-reveal>
          <span className="eyebrow">Baños</span>
          <h2>Reformas y remodelación de baños</h2>
          <p>
            Dentro de nuestros trabajos de construcción y reformas ejecutamos
            también reformas de baños, adaptadas al estado del espacio y al uso
            que va a tener.
          </p>

          <ul className="bathrooms__list">
            {bathroomWorks.map((work) => (
              <li key={work}>
                <CheckIcon size={16} />
                {work}
              </li>
            ))}
          </ul>

          <p>
            Un ejemplo real es el baño reformado en Gran Canaria que puedes ver
            en <Link href="/#trabajos">nuestros trabajos realizados</Link>.
          </p>

          <Link className="btn btn--dark" href="#contacto">
            Pedir presupuesto de baño
          </Link>
        </div>
      </div>
    </section>
  );
}
