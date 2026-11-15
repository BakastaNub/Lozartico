# Lozartico

Sitio web de Lozartico: climatización, reformas integrales e impermeabilización de terrazas en Valencia y Gran Canaria.

Esta es la primera versión base del proyecto: una web estática, responsive y accesible, sin formularios, con contacto directo por WhatsApp, teléfono y email.

- Repositorio: [BakastaNub/Lozartico](https://github.com/BakastaNub/Lozartico)
- Stack: Next.js 15, React 19, TypeScript, CSS propio, exportación estática
- Diseño: navy, dorado y crema
- Rutas: portada, 5 landings de servicio, aviso legal y privacidad

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
content/             Servicios, proyectos, reseñas, FAQs y datos de contacto
lib/                 Utilidades de contacto, SEO y datos estructurados
public/              Imágenes optimizadas, iconos y redirecciones legacy
scripts/             Generación reproducible de imágenes y Open Graph
legacy/              Fuentes originales de fotos, iconos y logo
```

La web se genera como sitio estático en `out/`. Ese directorio es el que debe publicarse en GitHub Pages o en cualquier hosting estático.

## Logo

El logo original está en `legacy/brand/lozartico-sl-source.svg`. Las versiones ligeras usadas por la web son:

- `public/images/logo-lozartico-nav.webp`
- `public/images/logo-lozartico-footer.webp`

## Antes de publicar

- Configurar `NEXT_PUBLIC_SITE_URL` con el dominio definitivo.
- Completar CIF/NIF y dirección fiscal en las páginas legales.
- Confirmar la razón social, el horario y los años de experiencia.
- Revisar los textos legales y las reseñas con el titular del negocio.
- Actualizar el workflow de GitHub Pages si se publica desde `out/`.
