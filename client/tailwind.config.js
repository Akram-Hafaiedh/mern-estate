/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        48: 'repeat(48, minmax(0,1fr))',
        24: 'repeat(24, minmax(0,1fr))',
        12: 'repeat(12, minmax(0,1fr))',
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

