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
      keyframes: {
        'clip-slide-in': {
          '0%': { 'clip-path': 'inset(0 0 0 100%)' },
          '100%': { 'clip-path': 'inset(0 0 0 0%)' },
        },
        'transform-slide-in': {
          '0%': { width: '0' },
          '1000%': { width: '33.333%' },
        },
        'clip-slide-out': {
          '0%': { 'clip-path': 'inset(0 0 0 0%)' },
          '100%': { 'clip-path': 'inset(0 0 0 100%)' },
        },
        'transform-slide-out': {
          '0%': { width: '33.333%' },
          '1000%': { width: '0%' },
        },
      },
      animation: {
        'clip-slide-in': 'clip-slide-in 300ms linear',
        'transform-slide-in': 'transform-slide-in 300ms linear',
        'clip-slide-out': 'clip-slide-out 300ms linear',
        'transform-slide-out': 'transform-slide-out 300ms linear',
      },
    },
  },
  plugins: [],
}
