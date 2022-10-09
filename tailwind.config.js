/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'offwhite': '#FEFFFF',
        'lightblue': '#DEF2F1',
        'primary': '#3AAFA9',
        'darkblue': '#2B7A78',
        'offblack': '#17252A'


      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Signika': ['Signika'],
        'Raleway': ['Raleway']
      },

    },
  },
  plugins: [],
}
