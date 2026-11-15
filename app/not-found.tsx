import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRightIcon, WhatsAppIcon } from "@/components/Icons";
import { whatsappHref } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="eyebrow">Error 404</span>
        <h1>Esta página no existe</h1>
        <p>
          Puede que el enlace haya cambiado o que la página ya no esté
          disponible. Desde aquí puedes volver al inicio o escribirnos
          directamente.
        </p>
        <div className="not-found__actions">
          <Link className="btn btn--primary" href="/">
            Volver al inicio
            <ArrowRightIcon size={18} />
          </Link>
          <a
            className="btn btn--dark"
            href={whatsappHref("Hola, quiero solicitar un presupuesto.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} />
            Pedir presupuesto
          </a>
        </div>
        <nav className="not-found__links" aria-label="Enlaces útiles">
          <Link href="/#servicios">Servicios</Link>
          <Link href="/#proyectos">Proyectos</Link>
          <Link href="/#opiniones">Opiniones</Link>
          <Link href="/#contacto">Contacto</Link>
        </nav>
      </div>
    </section>
  );
}
