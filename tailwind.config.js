const colors = require('tailwindcss/colors')
const { guessProductionMode } = require('@ngneat/tailwind');

module.exports = {
  prefix: '',
  purge: {
    enabled: guessProductionMode(),
    content: [
      './apps/**/*.{html,ts}',
      './libs/**/*.{html,ts}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.trueGray,
        gray: colors.warmGray
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};
