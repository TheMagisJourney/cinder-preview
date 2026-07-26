# Cinder Preview - Live Deploy

## Primary share link (Vercel)

**https://cinder-preview-orpin.vercel.app/**

### Door deep links
- Home/Dating: https://cinder-preview-orpin.vercel.app/
- Dating: https://cinder-preview-orpin.vercel.app/dating/
- Career: https://cinder-preview-orpin.vercel.app/career/
- Acting: https://cinder-preview-orpin.vercel.app/acting/
- Portfolio: https://cinder-preview-orpin.vercel.app/portfolio/

## GitHub Pages (also fixed)

**https://themagisjourney.github.io/cinder-preview/**

Build with: `BASE_PATH=/cinder-preview/ SITE_URL=https://themagisjourney.github.io npm run build`

## QA (2026-07-26)
Playwright desktop + mobile on all 5 routes:
- 0 broken images
- 0 mojibake symbols
- 9/9 images loaded per page
- Hero uses side-by-side before/after with object-position center 18% (faces framed)

## Fixes shipped
1. Vercel base path was `/cinder-preview/` (GH Pages) - assets 404 on Vercel root. Now base `/` for Vercel.
2. Double-encoded UTF-8 (em dash/arrows) replaced with ASCII-safe punctuation and HTML entities.
3. Hero no longer full-bleed single crop of portrait bottoms - side-by-side before|after with face-priority object-position.