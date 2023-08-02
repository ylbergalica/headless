/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js', //match any number of directories deep and any js file
  ],
  theme: {
    extend: {
      colors: {
        myColor: {
          100: 'red',
          200: 'darkred',
        }
      }
    },
  },
  plugins: [],
}

