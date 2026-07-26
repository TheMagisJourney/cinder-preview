import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://themagisjourney.github.io/cinder-preview/
// For Vercel root domain, set base: '/' and rebuild.
export default defineConfig({
  site: 'https://themagisjourney.github.io',
  base: '/cinder-preview/',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});