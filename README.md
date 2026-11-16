# Lozartico

Sitio web de Lozartico Servicios Integrales, S.L.U.: construcción y reformas integrales, alicatados, pintura, impermeabilización de terrazas y fachadas, fontanería, electricidad y climatización en Valencia y Gran Canaria.

Web estática, responsive y accesible, sin formularios y con contacto directo por WhatsApp, teléfono y email.

- Repositorio: [BakastaNub/Lozartico](https://github.com/BakastaNub/Lozartico)
- Stack: Next.js 15, React 19, TypeScript, CSS propio y exportación estática
- Diseño: navy, dorado y crema
- Rutas: portada, 7 landings de servicio, aviso legal y privacidad

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
public/              Imágenes optimizadas, iconos, PDF y redirecciones legacy
scripts/             Generación reproducible de imágenes y Open Graph
legacy/              Fuentes originales de fotos, logo e icono
```

La web se genera como sitio estático en `out/`. Ese directorio es el que debe publicarse en GitHub Pages o en cualquier hosting estático.

## Datos de empresa

- Razón social: Lozartico Servicios Integrales, S.L.U.
- NIF: B19391390
- Sede social: C/ Maldonado, 18 · 35110 Vecindario (Santa Lucía de Tirajana), Las Palmas
- Delegación: C/ Emilia Pardo Bazán, 13 · 46018 Valencia
- Registro Mercantil: Las Palmas, hoja GC-63367

Los datos completos se muestran en el aviso legal y en la política de privacidad.

## Logo e icono

El logo original está en `legacy/brand/lozartico-sl-source.svg`. Las versiones usadas por la web son:

- `public/images/logo-lozartico-nav.webp`
- `public/images/logo-lozartico-footer.webp`

El icono original está en `legacy/brand/lozartico.ico`. De ahí se generan el favicon y los iconos de aplicación en `public/`.

## Acreditaciones

La sección de acreditaciones de la portada enlaza el manual del Sistema de Gestión Ambiental ISO 14001:2015:

`public/docs/sistema-gestion-ambiental-iso-14001-lozartico.pdf`

## Antes de publicar

- Configurar `NEXT_PUBLIC_SITE_URL` con el dominio definitivo.
- Revisar el PDF y la documentación legal antes de publicarlos.
- Revisar los datos de contacto si cambian.
- Revisar las reseñas y los textos de proyecto con el titular del negocio.
- Actualizar el workflow de GitHub Pages si se publica desde `out/`.
