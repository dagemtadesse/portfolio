/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#212529',
      },
      fontFamily: {
        Montserrat: 'Montserrat',
      },
    },
  },
  plugins: [],
}
