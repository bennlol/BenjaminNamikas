/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'offwhite': '#DADBDC',
        'lightblue': '#DEF2F1',
        'primary': '#3AAFA9',
        'darkblue': '#2B7A78',
        'offblack': '#01000f'


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
