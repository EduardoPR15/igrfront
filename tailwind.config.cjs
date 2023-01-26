/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'rubik': ['Rubik' , 'sans'],
      'Kanit':[ 'Kanit', 'sans'],
       'h900-black': ['Roboto', 'sans', 'black', 'xl', '56px'],
       'Roboto': ['Roboto', 'sans'],
    },

    extend: {
      colors:{
        'primary-blue': '#0C255D',
        'primary-cyan': '#0BCFDC',
        'secondary-blue': '#002C96',
      },
    },
  },
  plugins: [],
}
