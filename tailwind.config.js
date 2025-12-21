/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#ff0440',
        'brand-red-dark': '#B91C1C',
        'brand-dark': 'black',
        'brand-light': '#F9FAFB',
        'brand-hero': '#e30d40',
        'brand-light-text': '#e1d5d5',
        'brand-grid-bg': '#130d0d',
        'brand-maroon': '#4a0404',
        'brand-brown': '#3e2723',
        'brand-brown-light': '#5d4037',
        'brand-dull-white': '#d1d1d1',
      },
    },
  },
  plugins: [],
}
