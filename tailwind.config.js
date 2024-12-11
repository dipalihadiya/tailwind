/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./dist/index.html','./dist/pages/*'],
  theme: {
    fontFamily: {
      'sans':[' Poppins, sans-serif'],
      'serif':['Lobster, cursive']
    },
    colors: colors,
    extend: {},
  },
  plugins: [],
}