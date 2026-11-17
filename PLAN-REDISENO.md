# Plan de rediseño · Lozartico

**Estado:** implementado el 17/11/2026
**Repositorio:** https://github.com/BakastaNub/Lozartico
**Rama de trabajo:** `redesign`

## Objetivo

Reorganizar la web alrededor de cuatro servicios claros y evitar el contenido duplicado. La empresa ejecuta obra nueva, reformas y mantenimiento; no redacta proyectos de arquitectura ni asume la dirección facultativa.

## Decisiones aplicadas

- Cuatro servicios: construcción y reformas, instalaciones, impermeabilización y mantenimiento.
- El césped artificial es una instalación general; la imagen de ejemplo corresponde a un espacio cubierto.
- Cuatro páginas de servicio, sin landings duplicadas por provincia.
- Valencia y Gran Canaria tienen la misma presencia y comparten cada servicio.
- “Trabajos realizados” sustituye a “Proyectos”.
- “Mantenimiento de comunidades y fincas” sustituye a “Administración de fincas”.
- Se eliminó el trabajo del armario empotrado y su imagen.
- Se eliminó el PDF público y el CIF/NIF de la web.
- El logo mantiene el fondo azul, el texto original, más margen y esquinas redondeadas.
- El icono tiene fondo azul y texto blanco.
- Se añadió un crédito discreto “Made by Wilsolution” en el footer.

## Páginas

- `/construccion-reformas`
- `/instalaciones`
- `/impermeabilizacion`
- `/mantenimiento`

Las URLs antiguas redirigen a la página correspondiente.

## Portada

1. Hero.
2. Cuatro tarjetas de servicio.
3. Trabajos realizados.
4. Empresa, con una línea compacta de acreditaciones.
5. Cobertura con mapas de Valencia y Gran Canaria.
6. Opiniones.
7. Contacto.

Se eliminaron de la portada el proceso genérico, la sección independiente de clientes, la sección independiente de acreditaciones y las FAQ generales.

## Contenido

- Sustituir “coordinamos” por “implementamos”, “ejecutamos” o “realizamos”.
- No presentar a la empresa como arquitectos ni como redactores de proyectos.
- Mantener la ejecución según el proyecto y la dirección técnica aportados.
- Reducir párrafos y repetir menos los mismos mensajes.
- Cada servicio explica alcance, ejecución, zonas y preguntas concretas.
- No usar promesas genéricas sin documentación.

## Pendiente

- Añadir fotos de conductos de climatización.
- Configurar el dominio definitivo en `NEXT_PUBLIC_SITE_URL`.
- Revisar las reseñas y los textos legales con el cliente.
- Revisar los mapas y la cobertura antes de publicar.
- Actualizar el workflow de GitHub Pages para publicar `out/`.
