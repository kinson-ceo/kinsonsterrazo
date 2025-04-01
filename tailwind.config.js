/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
          950: "#042F2E",
        },
        terrazzo: {
          red: "#FF6B6B",
          teal: "#4ECDC4",
          yellow: "#FFE66D",
          darkblue: "#1A535C",
          white: "#F7FFF7",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        terrazzo: "0 4px 20px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "class",
};
