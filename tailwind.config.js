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
        OpenSans: 'Open+Sans'
      },
      backgroundImage: {
        blur: 'url(/background.svg)',
        gradient: 'linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)',
        blob: 'url(/blob.svg)'
      }
    },
  },
  plugins: [],
}
