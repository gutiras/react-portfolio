/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // 👈 Enable dark mode with class
  theme: {
    extend: {
      colors: {
        gutuBlue: '#2563eb', // 🌈 your custom brand color
      },
       animation: {
      fadeIn: 'fadeIn 0.3s ease-in-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      }
    },
  },
  plugins: [],
}}
