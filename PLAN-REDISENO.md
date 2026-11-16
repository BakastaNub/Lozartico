# Plan de rediseño · Lozartico

**Estado:** implementado el 16/11/2026
**Repositorio:** https://github.com/BakastaNub/Lozartico
**Rama de trabajo:** `redesign`

## Objetivo

Reposicionar la web de Lozartico para que la construcción y las reformas sean el servicio principal, manteniendo la climatización como servicio secundario. La web debe transmitir confianza a particulares, administradores de fincas, empresas y licitaciones públicas.

## Decisiones aplicadas

- La portada, el hero, los metadatos y el orden de servicios priorizan reformas y construcción.
- La climatización sigue presente, pero después de reformas, fontanería y electricidad.
- Se mantiene el contacto directo por WhatsApp, teléfono y email, sin formularios.
- La empresa se presenta como Lozartico Servicios Integrales, S.L.U.
- Se elimina la referencia a “+3 años” y se usa “Desde 2024”.
- El teléfono principal sigue siendo el 634 33 25 65.
- El icono de la web se genera a partir de `legacy/brand/lozartico.ico`.
- Las imágenes nuevas se optimizan a WebP y se colocan en hero, proyectos, galerías y secciones de empresa.

## Servicios

1. Reformas y construcción
   - Reformas integrales.
   - Alicatados y pintura.
   - Impermeabilización de terrazas y fachadas.
2. Fontanería
   - Baños y cocinas.
   - Bajantes de fincas.
3. Electricidad
   - Acometidas industriales y residenciales.
   - Cuadros de potencia.
4. Climatización
   - Split.
   - Conductos.
   - Mantenimiento.

Se añadieron las landings `/fontaneria` y `/electricidad`. La landing de impermeabilización se amplió a terrazas, tejados y fachadas.

## Imágenes

- `construccion.webp`: hero principal y landing de reformas.
- `reforma-bano-1.webp`: proyecto de baño y landing de reformas.
- `reforma-bano-2.webp`: galería de reformas y fontanería.
- `impermeabilizacion-tejado.webp`: impermeabilización y proyecto de tejado.
- `equipo-lozartico.webp`: sección de empresa.
- `sede-lozartico.webp`: sección de empresa.
- Las imágenes antiguas se conservan como recursos secundarios.

## Nuevas secciones

- Empresa: equipo, sede, datos legales y registro.
- Clientes: administradores de fincas, empresas privadas y licitaciones públicas.
- Acreditaciones y coberturas: ISO 14001:2015, registro de empresas licitadoras, responsabilidad civil MAPFRE, servicio de prevención ajeno, ROLECE y situación tributaria en Canarias.
- PDF del Sistema de Gestión Ambiental disponible en `public/docs/`.

## Datos legales incorporados

- Razón social: Lozartico Servicios Integrales, S.L.U.
- NIF: B19391390
- Sede social: C/ Maldonado, 18 · 35110 Vecindario (Santa Lucía de Tirajana), Las Palmas
- Delegación: C/ Emilia Pardo Bazán, 13 · 46018 Valencia
- Registro Mercantil: Las Palmas, hoja GC-63367
- Fecha de constitución: 02/09/2024

## Pendiente antes de publicar

- Configurar el dominio definitivo en `NEXT_PUBLIC_SITE_URL`.
- Revisar el PDF y las páginas legales antes de publicarlas.
- Añadir el certificado ISO 14001 emitido si se quiere mostrar además del manual.
- Revisar las reseñas y los textos de proyecto con el cliente.
- Añadir el certificado ISO 14001 emitido si se quiere mostrar además del manual del SGA.
- Actualizar el workflow de GitHub Pages para publicar `out/`.
