# Little Joy Books — Pre-launch Site

Static marketing site for Little Joy Books, a children's book imprint for ages 0–3.

## Stack

- Astro 4 (static output, no SSR)
- Tailwind CSS 3 with a custom warm-neutral palette (cream / oat / taupe / cocoa / ink)
- TypeScript (strict)
- Fonts via `@fontsource`: Fredoka (display) + Inter (body)
- `@astrojs/sitemap` for `sitemap-index.xml`

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output to ./dist
npm run preview
```

## Structure

```
src/
  components/   SEO, Header, Footer, Hero, EmailCapture, BookPreview, BrandSnippet
  content/      site.ts — shared copy + book metadata
  layouts/      BaseLayout.astro
  pages/        /, /about, /thank-you, /book/baby-affirmations
  styles/       global.css (Tailwind + font-face imports)
public/         favicons, og image, robots.txt, manifest, logo
```

## Placeholders

`public/favicon-32.png`, `public/apple-touch-icon.png`, and `public/og/default.png`
are solid-color cream placeholders. Replace with real artwork before launch.
The SVG logo (`public/logo.svg`, `public/favicon.svg`) is a simple stand-in
— swap in the brand artwork when available.

## Email capture

Forms currently `GET /thank-you` with the email in the query string. Wire up to
your ESP (ConvertKit, Buttondown, Mailchimp) by swapping the form `action`.
