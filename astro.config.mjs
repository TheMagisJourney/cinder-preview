import { defineConfig } from 'astro/config';

// Vercel root: base '/'
// GitHub Pages: BASE_PATH=/cinder-preview/ npm run build
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://cinder-preview-orpin.vercel.app',
  base,
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
