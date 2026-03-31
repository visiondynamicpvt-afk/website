# Vision Dynamic Website

## Overview
This project is the Vision Dynamic marketing website built with Vite, React, TypeScript, and Tailwind CSS.

## Getting Started (Local Development)
1. Install dependencies:
	npm install
2. Start the dev server:
	npm run dev
3. Open:
	http://localhost:8080

## Common MIME Error Fix
If you see this error in the browser console:

Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "application/octet-stream".

Cause:
- The app is being served as raw source files instead of through Vite.
- `index.html` points to `/src/main.tsx`, and `.tsx` must be transformed by Vite before the browser can run it.

Fix:
1. Do not open `index.html` directly in the browser.
2. Do not use a generic static server to serve the source folder.
3. Run the app with Vite:
	npm run dev

## Production Build and Deployment
1. Build the app:
	npm run build
2. Preview the production build locally:
	npm run preview
3. Deploy only the `dist` output folder to your hosting provider.

GitHub Pages and Cloudflare are both supported:
- GitHub Pages deployment is handled by [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
- `dist/404.html` is generated from the built app so React Router refreshes work on GitHub Pages.
- `public/_redirects` supports Cloudflare Pages SPA fallback if you use Cloudflare Pages.
- `public/CNAME` keeps the custom domain in the built output.

For custom domains, keep the CNAME in `public/CNAME` so it is copied into `dist` during build.

## Tech Stack
- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-ui
