const colors = require('tailwindcss/colors')

module.exports = {
  content: ['src/**/*.tsx'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        accent: colors.teal,
        primary: colors.amber,
      },
      fontFamily: {
        body: ['var(--font-radiance)', 'sans-serif'],
        display: ['var(--font-reaver)', 'sans-serif'],
      },
    },
  },
}
