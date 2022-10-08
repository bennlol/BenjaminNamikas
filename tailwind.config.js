/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#18a6b4'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Signika': ['Signika']
      },

    },
  },
  plugins: [],
}
