const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.trueGray,
        gray: colors.warmGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
