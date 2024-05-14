/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      rancho: ["Rancho", "cursive"],
      sans: ["Nunito", "sans-serif"],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}