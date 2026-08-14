# Axis — Página web y apps con AppSheet

Sitio web de **Axis**, empresa de Tepic, Nayarit que diseña páginas web y aplicaciones con AppSheet para pymes de México.

## Stack

- [Next.js 16](https://nextjs.org) (App Router + Turbopack)
- React 19
- Fonts optimizadas con `next/font/google` (Space Grotesk, Inter, IBM Plex Mono)

## Estructura

```
src/
├── app/                 # Rutas (App Router)
│   ├── layout.js        # Layout raíz: Header, Footer, metadatos SEO
│   ├── page.js          # Landing principal
│   ├── servicios/       # Servicios
│   ├── como-funciona/   # Proceso
│   ├── ejemplos/        # Demos interactivas (AppSheet)
│   ├── precios/         # Planes y precios
│   ├── faq/             # Preguntas frecuentes (FAQContent.js + metadata)
│   └── contacto/        # Contacto
├── components/          # Componentes compartidos
│   ├── Header.js
│   ├── Footer.js
│   ├── ContactForm.js   # Formulario que envía por WhatsApp con validación
│   ├── NetworkCanvas.js # Animación canvas del hero
│   ├── DemoTabs.js
│   ├── ScrollRevealObserver.js
│   └── WhatsAppFloat.js # Botón flotante de WhatsApp
public/imagenes/         # logo.png, og-image.png
```

## Requisitos

- Node.js 20.9 o superior (recomendado: instalar vía [nvm](https://github.com/nvm-sh/nvm))

## Instalación y uso

```bash
npm install       # solo la primera vez
npm run dev       # servidor de desarrollo → http://localhost:3000
```

Comandos adicionales:

```bash
npm run build     # build de producción
npm run start     # sirve el build de producción
npm run lint      # eslint
```

## Despliegue

El sitio está preparado para desplegarse en [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) desde el repositorio de GitHub.

## Contacto

- WhatsApp / Teléfono: 311 279 4209
- Correo: abraxis@axis-ab.com
- Sitio: https://axis-ab.com
