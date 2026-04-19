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

## Email capture (MailerLite)

The site uses MailerLite's Universal embedded-form script. The universal
snippet (with account `2277770`) is loaded once in `BaseLayout.astro`.
`EmailCapture.astro` just renders a `<div class="ml-embedded" data-form="...">`
and MailerLite injects the form at runtime.

To wire it up:

1. Build your embedded form in the MailerLite dashboard.
2. In the dashboard form settings, enable:
   - GDPR consent checkbox (Settings -> "GDPR")
   - Honeypot / bot protection (enabled by default on MailerLite forms)
   - "After signup" behavior -> redirect to `/thank-you`
   - Automation to deliver the Baby Affirmation Cards printable
3. Copy the `data-form` value from the embed snippet.
4. Set `PUBLIC_MAILERLITE_FORM_CODE` in `.env` to that value.

Styling for the injected form lives under `.ljb-mailerlite` in `global.css`
and is scoped with `!important` because MailerLite inlines most of its own
styles.
