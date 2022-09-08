/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      color: {
        'semi-transparent': 'rgba(0, 0, 0, 0.9)'
      },
      height: {
        hero: 'calc(100vh - 6.5rem)',
        banner: '95%',
      },
      alignItems: {
        between: 'space-between',
      },
    },
  },
  plugins: [],
}
