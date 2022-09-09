/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      height: {
        hero: 'calc(100vh - 6.5rem)',
        banner: '95%',
      },
      minHeight: {
        bannerSmall: '30rem',
      },
      alignItems: {
        between: 'space-between',
      },
      dropShadow: {
        'text': '2px 2px 10px rgba(0, 0, 0, 0.9)',
      },
      animation: {
        fade: 'fade 1.5s',
      },
      keyframes: {
        fade: {
          'from': { opacity: '0.4' },
          'to': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
