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
      alignItems: {
        between: 'space-between',
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
