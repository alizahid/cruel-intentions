const colors = require('tailwindcss/colors')

module.exports = {
  content: ['src/**/*.tsx', 'src/styles/*.css'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        accent: colors.teal,
        primary: colors.amber
      }
    },
    fontFamily: {
      body: ['Satoshi', 'sans-serif']
    }
  }
}
