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
      },
    },
  },
  plugins: [],
}
