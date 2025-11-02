/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor :{
        'primary':'rgb(85 81 277)'
      }
    },
    fontFamily :{
      'hero-font' : 'Sriracha'
    }
  },
  plugins: [],
}

module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        secondary: '#f0f4f8', // Light theme background
      },
    },
  },
  plugins: [],
}