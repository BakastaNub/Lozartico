# Lozartico

Sitio web de Lozartico Servicios Integrales, S.L.U.: construcción, reformas y mantenimiento en Valencia, Gran Canaria y Lanzarote, incluido césped artificial.

La web se organiza en cuatro servicios: construcción y reformas, instalaciones, impermeabilización y mantenimiento. La empresa ejecuta los trabajos; no redacta proyectos de arquitectura ni asume la dirección facultativa.

- Repositorio: [BakastaNub/Lozartico](https://github.com/BakastaNub/Lozartico)
- Crédito de diseño y desarrollo: [Wilsolution](https://wilsolution.com)
- Stack: Next.js 15, React 19, TypeScript, CSS propio y exportación estática
- Diseño: navy, dorado y crema
- Rutas: portada, 4 servicios, aviso legal y privacidad
- Cobertura: Valencia, Gran Canaria y Lanzarote, con mapas de las tres zonas
- Despliegue: GitHub → Netlify → https://lozartic.es

## Requisitos

- Node.js 20 o superior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

La web estará disponible en `http://localhost:3000`.

## Comandos

```bash
npm run dev        # servidor de desarrollo
npm run build      # genera la exportación estática en out/
npm run preview    # sirve out/ en local
npm run typecheck  # comprobación de TypeScript
npm run lint       # ESLint
npm run images     # optimiza imágenes y regenera la portada social
npm run icons      # genera favicon e iconos con fondo azul
```

## Despliegue

Netlify está conectado a la rama `main` y es la única plataforma de despliegue. La configuración está en `netlify.toml`: build `npm run build`, publish `out`, variables de entorno y redirecciones 301 de las URLs antiguas.

## Configuración

El dominio público está configurado en `.env.production` como `NEXT_PUBLIC_SITE_URL=https://lozartic.es`. Sin esta variable no se generan URLs canónicas, Open Graph absolutas ni entradas en el sitemap.

Para cambiar de dominio, actualiza `.env.production` y vuelve a ejecutar `npm run build`.

## SEO

La web incluye metadatos por página, keywords, canonical, Open Graph, Twitter Card, robots, sitemap, datos estructurados `GeneralContractor`, `Service`, `FAQPage` y `BreadcrumbList`.

No se usa texto oculto ni cloaking. Google ignora las meta keywords y penaliza el contenido invisible; el posicionamiento se basa en contenido visible, estructura, enlaces internos, mapas y datos verificables.

Canonical, sitemap y URLs absolutas se generan con el dominio `https://lozartic.es`.

## Estructura

```text
app/                 Páginas, layout, SEO, sitemap, robots y estilos globales
components/          Secciones y componentes reutilizables
content/             Servicios, trabajos, reseñas y datos de empresa
lib/                 Utilidades de contacto, SEO y datos estructurados
public/              Imágenes optimizadas, iconos y redirecciones legacy
scripts/             Generación reproducible de imágenes e iconos
legacy/              Fuentes originales de fotos, logo e icono
```

La web se genera como sitio estático en `out/`. Netlify compila desde GitHub y publica ese directorio.

## Servicios

- `/construccion-reformas`: obra nueva, reformas integrales, reformas de baños, cocinas, alicatados, pintura, suelos y césped artificial.
- `/instalaciones`: fontanería, electricidad y climatización.
- `/impermeabilizacion`: terrazas, cubiertas, tejados y fachadas.
- `/mantenimiento`: comunidades, fincas, bajantes y zonas comunes.

Las antiguas URLs de Valencia y Gran Canaria redirigen a estas páginas.

## Datos de empresa

- Razón social: Lozartico Servicios Integrales, S.L.U.
- Sede social: C/ Maldonado, 18 · 35110 Vecindario (Santa Lucía de Tirajana), Las Palmas
- Delegación: C/ Emilia Pardo Bazán, 13 · 46018 Valencia
- Registro Mercantil: Las Palmas, hoja GC-63367

Los datos completos se muestran en el aviso legal y en la política de privacidad.

## Logo e icono

El logo original está en `legacy/brand/lozartico-sl-source.svg`. La versión usada por la web mantiene el fondo azul y el texto original, con esquinas redondeadas y más margen interior:

- `public/images/logo-lozartico.webp`

El icono original está en `legacy/brand/lozartico.ico`. De ahí se generan el favicon y los iconos de aplicación con fondo azul y texto blanco en `public/`.

## Antes de publicar

- Revisar la documentación legal antes de publicarla.
- Revisar los datos de contacto si cambian.
- Revisar las reseñas y los textos de los trabajos con el titular del negocio.
- Añadir las fotos de conductos de climatización cuando estén disponibles.
- Revisar los mapas de Valencia, Gran Canaria y Lanzarote.
- Verificar Google Search Console y Google Business Profile.
- Comprobar el deploy de Netlify desde `out/`.


