import Link from "next/link";
import type { ReactNode } from "react";

import { ChevronLeftIcon } from "./Icons";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <section className="legal">
      <div className="container legal__inner">
        <Link className="legal__back" href="/">
          <ChevronLeftIcon size={16} />
          Volver al inicio
        </Link>
        <span className="eyebrow">Información legal</span>
        <h1>{title}</h1>
        <p className="legal__updated">Última actualización: {updated}</p>
        <div className="legal__content">{children}</div>
      </div>
    </section>
  );
}
