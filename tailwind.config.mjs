/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5EFE4',
        oat: '#E8DFD0',
        taupe: '#B8997A',
        cocoa: '#8B6F4E',
        ink: '#3E3A36',
        stone: '#A6A29B',
      },
      fontFamily: {
        display: ['"Fredoka"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '65ch',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(62, 58, 54, 0.18)',
      },
    },
  },
  plugins: [],
};
