export const site = {
  name: 'Little Joy Books',
  tagline: 'Gentle stories for the littlest hearts.',
  description:
    'Little Joy Books is a pre-launch children\u2019s imprint creating warm, affirming picture books for ages 0\u20133. Join the list for early reader previews.',
  url: 'https://littlejoybooks.com',
  ogImage: '/og/default.png',
  twitter: '@littlejoybooks',
  locale: 'en_US',
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/book/baby-affirmations', label: 'The Book' },
  { href: '/about', label: 'About' },
] as const;

export const book = {
  slug: 'baby-affirmations',
  title: 'Baby Affirmations',
  subtitle: 'A first book of tiny, tender truths.',
  ages: '0\u20133',
  pages: 24,
  format: 'Board book',
  releaseWindow: 'Fall 2026',
  cover: '/og/default.png',
  blurb:
    'Soft rhythms and soothing refrains remind little ones that they are loved, safe, and wonderfully themselves. Designed for cuddly bedtime reads and gentle morning hellos.',
  spreads: [
    { line: 'You are loved.', note: 'Opening spread' },
    { line: 'You are safe.', note: 'Morning light' },
    { line: 'You are kind.', note: 'Garden scene' },
    { line: 'You are enough, exactly as you are.', note: 'Closing spread' },
  ],
} as const;
