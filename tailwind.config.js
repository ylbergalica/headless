/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js', //match any number of directories deep and any js file
  ],
  theme: {
    extend: {
      colors: {
        nightsky: {
          500: '#2d3b6b',
          550: '#1d3a9b',
          700: '#17234b',
          750: '#2a49b0',
          100: '#1d3a9b80',
        }
      },
      boxShadow: {
        glow: '0 0 10px var(--tw-shadow-colored)',
      }
    },
  },
  plugins: [],
}

