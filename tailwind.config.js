/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#0F0F11',
      },
      fontFamily: {
        custom: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}