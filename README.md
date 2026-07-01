# Enfoca2 — Sitio web de Enfocados.mkt

Sitio de marketing digital para Enfocados.mkt, agencia de Arequipa especializada en fotografía, video, diseño y redes sociales.

## Stack

- **Vite + React 19** — build + UI
- **Tailwind CSS v4** — layout y utilidades (`@tailwindcss/vite`)
- **Motion (motion/react)** — animaciones
- **Cloudflare Workers** — static assets, deploy via Workers Builds
- **GitHub** — auto-deploy en push a `main`

## Comandos

```bash
npm run dev      # dev server en localhost:5173
npm run build    # build de producción → dist/
npm run preview  # preview del build de producción
npm run lint     # ESLint / Oxlint
```

## Estructura

```
src/
  components/     Nav, WhatsAppButton, BokehAmbience
  sections/       Hero, Services, Portfolio, Impact, CTA, Footer
  constants.js    WA_LINK, IG_LINK centralizados
  index.css       design tokens + Tailwind + bokeh CSS
  App.jsx         composición de secciones
public/
  brand/          logo.svg
  favicon.svg, _headers, robots.txt, sitemap.xml, og-image.png
```

## Deploy

Cloudflare Workers Builds conectado al repo GitHub. Cada push a `main` auto-despliega en `enfocados.bamter.com`.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

## Identidad de marca

- **Azul:** `#1E44FF` (primario)
- **Rojo:** `#F03520` (acento, wordplay "Enfoca**2**")
- **Fondo:** `#08080A`
- **Fuentes:** Barlow Condensed (display) + Space Grotesk (cuerpo)
- **Bokeh:** capa ambiental de círculos desenfocados = referencia directa al nombre de su mascota
