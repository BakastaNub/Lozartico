# Lozartico

Sitio web de Lozartico Servicios Integrales, S.L.U.: construcción, reforma y mantenimiento, alicatados, pintura, impermeabilización de terrazas y fachadas, fontanería, electricidad, climatización y césped artificial en Valencia y Gran Canaria.

Web estática, responsive y accesible, sin formularios y con contacto directo por WhatsApp, teléfono y email.

- Repositorio: [BakastaNub/Lozartico](https://github.com/BakastaNub/Lozartico)
- Crédito de diseño y desarrollo: [Wilsolution](https://wilsolution.com)
- Stack: Next.js 15, React 19, TypeScript, CSS propio y exportación estática
- Diseño: navy, dorado y crema
- Rutas: portada, 9 landings de servicio, aviso legal y privacidad
- Cobertura: mapas de Valencia y Gran Canaria

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

## Configuración

El dominio público se configura con `NEXT_PUBLIC_SITE_URL`. Sin esta variable no se generan URLs canónicas, Open Graph absolutas ni entradas en el sitemap.

Crea `.env.local` en la raíz:

```bash
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

Después vuelve a ejecutar `npm run build`.

## Estructura

```text
app/                 Páginas, layout, SEO, sitemap, robots y estilos globales
components/          Secciones y componentes reutilizables
content/             Servicios, proyectos, reseñas, FAQs y datos de empresa
lib/                 Utilidades de contacto, SEO y datos estructurados
public/              Imágenes optimizadas, iconos y redirecciones legacy
scripts/             Generación reproducible de imágenes y Open Graph
legacy/              Fuentes originales de fotos, logo e icono
```

La web se genera como sitio estático en `out/`. Ese directorio es el que debe publicarse en GitHub Pages o en cualquier hosting estático.

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

- Configurar `NEXT_PUBLIC_SITE_URL` con el dominio definitivo.
- Revisar la documentación legal antes de publicarla.
- Revisar los datos de contacto si cambian.
- Revisar las reseñas y los textos de proyecto con el titular del negocio.
- Añadir las fotos de conductos de climatización cuando estén disponibles.
- Revisar la cobertura y los mapas de Valencia y Gran Canaria.
- Actualizar el workflow de GitHub Pages si se publica desde `out/`.
