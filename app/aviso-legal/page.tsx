import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/content/site";
import { canonical, indexableRobots } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Aviso legal",
  robots: indexableRobots,
  description:
    "Información legal sobre el sitio web de Lozartico Servicios Integrales, S.L.U., empresa de construcción, reformas e instalaciones.",
  alternates: canonical("/aviso-legal/"),
};

export default function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso legal" updated="Noviembre de 2026">
      <h2>1. Titular del sitio</h2>
      <p>
        Este sitio web pertenece a <strong>{siteConfig.legalName}</strong>, con
        domicilio social en {siteConfig.address.street},{" "}
        {siteConfig.address.postalCode}{" "}
        {siteConfig.address.locality} ({siteConfig.address.municipality}),
        {siteConfig.address.region}, España.
      </p>
      <p>
        Delegación en {siteConfig.delegation.street},{" "}
        {siteConfig.delegation.postalCode} {siteConfig.delegation.locality},{" "}
        {siteConfig.delegation.region}. Inscrita en el {siteConfig.registry}.
      </p>
      <p>
        Para cualquier consulta puedes escribir a{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> o llamar
        al <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>.
      </p>

      <h2>2. Objeto</h2>
      <p>
        El sitio tiene carácter informativo y presenta los servicios de
        construcción, reformas, instalaciones y climatización que realiza
        Lozartico en Valencia y Gran Canaria, así como proyectos realizados y
        vías de contacto.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El acceso a este sitio es gratuito. La persona usuaria se compromete a
        utilizar los contenidos de forma lícita y a no realizar actuaciones que
        puedan dañar el sitio, impedir su funcionamiento o vulnerar derechos de
        terceros.
      </p>
      <p>
        La información publicada tiene carácter orientativo y no constituye una
        oferta contractual. Cualquier presupuesto o compromiso de servicio se
        formaliza de forma individual con el cliente.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Los textos, fotografías, logotipos, diseño y demás contenidos de este
        sitio están protegidos por la normativa de propiedad intelectual e
        industrial. No se permite su reproducción, distribución o comunicación
        pública sin autorización expresa del titular, salvo en los casos
        permitidos por la ley.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        Lozartico trabaja para que la información del sitio sea correcta y esté
        actualizada, pero no puede garantizar la ausencia de errores ni la
        disponibilidad permanente del servicio. La información puede
        modificarse sin previo aviso.
      </p>
      <p>
        El titular no se responsabiliza de los daños derivados del uso
        inadecuado del sitio ni del contenido de páginas externas enlazadas.
      </p>

      <h2>6. Enlaces externos</h2>
      <p>
        Este sitio incluye enlaces a servicios de terceros como WhatsApp,
        Google Maps, Google Reviews, Instagram y TikTok. El acceso a esos
        servicios se rige por sus propias condiciones y políticas de
        privacidad.
      </p>

      <h2>7. Legislación aplicable</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española. Las
        posibles controversias se someterán a los juzgados y tribunales que
        correspondan conforme a la normativa aplicable.
      </p>
    </LegalPage>
  );
}
