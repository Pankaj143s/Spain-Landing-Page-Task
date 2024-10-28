
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('./src/assets/hero-bg.jpg')",

      }
    },
  },
  plugins: [],
}
