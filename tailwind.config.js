/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#331A15",
        secondary: "#1B1A1A",
        accent: "#E3B577",
        accent2: "#EA4744",
        dark: "#331A15",
        light: "#F4F3F0",
        "text-primary": "#5C5B5B",
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1320px",
      },
    },
    fontFamily: {
      rancho: ["Rancho", "cursive"],
      sans: ["Nunito", "sans-serif"],
    },
    backgroundImage: {
      'header-pattern': "url('src/assets/header-bg.png')",
      'footer-pattern': "url('src/assets/footer.png')",
      'footer-bottom': "url('src/assets/footer-bg.png')",
      'watermark-1': "url('src/assets/cup-watermark.png')",
      'watermark-2': "url('src/assets/watermark-2.png')",
    },
  },
  plugins: [
    require('daisyui'),
  ],
}