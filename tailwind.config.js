const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    'src/components/**/*.tsx',
    'src/layouts/**/*.tsx',
    'src/pages/**/*.tsx',
    'src/styles/*.scss'
  ],
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
