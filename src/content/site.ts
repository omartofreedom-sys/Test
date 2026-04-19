export const site = {
  name: 'Little Joy Books',
  tagline: 'Little words. Big hearts.',
  description:
    'Little Joy Books makes warm, affirming board books for ages 0–3. Join the list for the free Baby Affirmation Cards and launch-day access.',
  url: 'https://littlejoybooks.com',
  ogImage: '/og/default.png',
  twitter: '@littlejoybooks',
  locale: 'en_US',
  parentImprint: {
    name: 'Kid Wealth Wizards',
    url: 'https://kidwealthwizards.com',
  },
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/book/baby-affirmations', label: 'The Book' },
  { href: '/about', label: 'About' },
] as const;

export const leadMagnet = {
  name: 'Baby Affirmation Cards',
  promise: 'Get the free Baby Affirmation Cards + launch-day access',
  shortPromise: 'Get the free printable + launch-day access',
  cta: 'Send me the cards',
  hint: 'A printable set of 10 affirmations, plus first dibs on the book. Unsubscribe anytime.',
} as const;

export const book = {
  slug: 'baby-affirmations',
  title: 'Baby Affirmations',
  subtitle: 'A first book of tiny, tender truths.',
  illustrator: 'Emmily Coutinho',
  ages: '0–3',
  pages: 24,
  format: 'Board book',
  status: 'Coming soon',
  releaseWindow: 'Fall 2026',
  cover: '/books/baby-affirmations-cover.png',
  coverAlt:
    'Baby Affirmations book cover — five smiling babies on a soft peach background, illustrated by Emmily Coutinho.',
  blurb:
    'Soft rhythms and soothing refrains remind little ones that they are loved, safe, and wonderfully themselves. Designed for cuddly bedtime reads and gentle morning hellos.',
  affirmations: [
    'You are loved.',
    'You are safe.',
    'You are kind.',
    'You are brave.',
    'You are curious.',
    'You are gentle.',
    'You are strong.',
    'You are patient.',
    'You are a good friend.',
    'You are enough, exactly as you are.',
  ],
  spreads: [
    {
      line: 'You are loved.',
      note: 'Opening spread',
      scene: 'A baby tucked into a grown-up’s shoulder at the end of the day.',
    },
    {
      line: 'You are brave.',
      note: 'Middle spread',
      scene: 'A toddler taking a wobbly first step toward open arms.',
    },
    {
      line: 'You are enough, exactly as you are.',
      note: 'Closing spread',
      scene: 'Five little ones together under a soft morning sun.',
    },
  ],
} as const;

export const valueProps = [
  {
    title: 'Every child on the page',
    body:
      'Warm, diverse casts so every baby can point and say, \u201Cthat’s me.\u201D No tokens, just tenderness.',
    icon: 'people',
  },
  {
    title: 'Grounded in how little brains grow',
    body:
      'Affirmations shaped with early-childhood research on attachment, repetition, and the soothing power of a caregiver’s voice.',
    icon: 'brain',
  },
  {
    title: 'Made for ages 0–3',
    body:
      'Short lines, steady rhythm, chunky board pages, rounded corners. Built for small hands and sleepy bedtimes.',
    icon: 'moon',
  },
] as const;
