/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#212529',
        green: 'rgba(106, 153,78,.6)'
      },
      fontFamily: {
        Montserrat: 'Montserrat',
        OpenSans: 'Open+Sans'
      },
      backgroundImage: {
        blur: 'url(/background.svg)',
        gradient: 'linear-gradient(-225deg, #5D9FFF 0%, #fff 50%, #6BBBFF 100%)',
        blob: 'url(/blob.svg)'
      }
    },
  },
  plugins: [],
}
