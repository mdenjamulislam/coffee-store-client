/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily: {
      rancho: ["Rancho", "cursive"],
      sans: ["Nunito", "sans-serif"],
    },
    backgroundImage: {
      'header-pattern': "url('src/assets/header-bg.png')",
      'footer-pattern': "url('src/assets/footer-bg.png')",
    },
  },
  plugins: [
    require('daisyui'),
  ],
}