/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E1E2D5",
          200: "#888883"
        }
      }
    },
  },
  plugins: [],
}

