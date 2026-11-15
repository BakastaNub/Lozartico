import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/content/site";
import { canonical, indexableRobots } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Política de privacidad",
  robots: indexableRobots,
  description:
    "Cómo trata Lozartico SL los datos personales recibidos a través de WhatsApp, email o teléfono.",
  alternates: canonical("/privacidad/"),
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad" updated="Noviembre de 2026">
      <h2>1. Responsable del tratamiento</h2>
      <p>
        El responsable del tratamiento de los datos personales es{" "}
        <strong>{siteConfig.legalName}</strong>, con domicilio profesional en{" "}
        {siteConfig.address.locality} ({siteConfig.address.region}), España.
        Puedes contactar en{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <h2>2. Qué datos tratamos</h2>
      <p>
        Este sitio no incluye formularios de contacto. Los datos personales se
        reciben únicamente cuando decides escribirnos por WhatsApp, email o
        llamarnos por teléfono. En esos casos podemos tratar:
      </p>
      <ul>
        <li>Datos de identificación y contacto, como nombre, teléfono o email.</li>
        <li>La zona en la que se encuentra el servicio solicitado.</li>
        <li>
          La información que nos facilites sobre el espacio, el proyecto o la
          necesidad que quieres resolver.
        </li>
      </ul>
      <p>
        No solicitamos datos especialmente protegidos. Te pedimos que no
        incluyas información sensible que no sea necesaria para atender tu
        consulta.
      </p>

      <h2>3. Para qué usamos los datos</h2>
      <ul>
        <li>Responder a tus consultas y solicitudes de información.</li>
        <li>Preparar presupuestos y valorar la viabilidad del servicio.</li>
        <li>Gestionar la relación con el cliente y la ejecución del trabajo.</li>
        <li>Cumplir las obligaciones legales que resulten aplicables.</li>
      </ul>

      <h2>4. Base jurídica</h2>
      <p>
        El tratamiento se basa en el consentimiento que otorgas al contactarnos
        (artículo 6.1.a del RGPD), en la ejecución de un contrato o la
        aplicación de medidas precontractuales (artículo 6.1.b) y, cuando
        corresponda, en el cumplimiento de obligaciones legales (artículo
        6.1.c).
      </p>

      <h2>5. Conservación</h2>
      <p>
        Los datos se conservan durante el tiempo necesario para atender la
        consulta y, si surge una relación contractual, durante el plazo
        necesario para su gestión y para cumplir las obligaciones legales
        aplicables. Después se eliminan o se anonimizan de forma segura.
      </p>

      <h2>6. Destinatarios y servicios externos</h2>
      <p>
        No vendemos ni cedemos datos personales a terceros con fines
        publicitarios. Para comunicarte con nosotros puedes utilizar WhatsApp,
        email o teléfono, servicios que aplican sus propias condiciones y
        políticas de privacidad.
      </p>
      <p>
        Podemos contar con proveedores tecnológicos necesarios para el
        funcionamiento del sitio, el correo electrónico o la gestión del
        negocio, que actúan como encargados del tratamiento y ofrecen
        garantías adecuadas. Algunos proveedores pueden implicar transferencias
        internacionales de datos amparadas por los mecanismos previstos en la
        normativa de protección de datos.
      </p>

      <h2>7. Tus derechos</h2>
      <p>
        Puedes solicitar el acceso a tus datos, su rectificación, supresión,
        limitación del tratamiento, portabilidad y oposición, así como retirar
        el consentimiento prestado. Para ejercer estos derechos, escríbenos a{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> indicando
        el derecho que deseas ejercer y adjuntando la información necesaria
        para identificar tu solicitud.
      </p>
      <p>
        Si consideras que el tratamiento no se ajusta a la normativa, puedes
        presentar una reclamación ante la Agencia Española de Protección de
        Datos a través de{" "}
        <a
          href="https://www.aepd.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.aepd.es
        </a>
        .
      </p>

      <h2>8. Cookies</h2>
      <p>
        Este sitio no utiliza cookies propias de analítica ni de publicidad. Los
        servicios externos a los que puedes acceder mediante enlaces, como
        WhatsApp, Google Maps, Google Reviews, Instagram o TikTok, pueden
        utilizar sus propias cookies una vez accedes a sus páginas.
      </p>

      <h2>9. Seguridad</h2>
      <p>
        Aplicamos medidas razonables para proteger la información frente a
        accesos no autorizados, pérdida o alteración. Ningún sistema es
        completamente infalible, pero revisamos nuestras prácticas para mantener
        un nivel de seguridad adecuado.
      </p>

      <h2>10. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política para adaptarla a cambios normativos o
        de funcionamiento del sitio. La versión vigente será la publicada en
        esta página.
      </p>
    </LegalPage>
  );
}
