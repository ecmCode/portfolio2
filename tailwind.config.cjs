const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')


/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fadein-slow': 'fadein 0.9s ease-in forwards',
        'fadein-fast': 'fadein 0.5s ease-in forwards',
        'fadeout-slow': 'fadeout 0.9s ease-in forwards',
        'fadeout-fast': 'fadeout 0.5s ease-in forwards',
      },
      keyframes: {
        fadein: {
          '0%' : {opacity: 0},
          '100%' : {opacity: 1 },
        },
        fadeout: {
          '0%' : {opacity: 1},
          '100%' : {opacity: 0 },
        }
      }
    },
    colors: {
      transparent:colors.transparent,
      title:colors.sky[900],
      primary: colors.sky[600],
      secondary: colors.cyan[500],
      white:colors.sky[100],
      black:colors.slate[900],
      gray:colors.slate[400],
      // ...
    }
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.7xl') },
        'h2': { fontSize: theme('fontSize.5xl') },
        'h3': { fontSize: theme('fontSize.4xl') },
        'h4': { fontSize: theme('fontSize.2xl') },
        'p': { fontSize: theme('fontSize.md') },
        'li': { fontSize: theme('fontSize.md') },
        'label': { fontSize: theme('fontSize.lg') },
      })
    })
  ]
}
