/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "768px",
      md: "1024px",
      // lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      white: "#ffffff",
      "white-gray": "#353535",
      "white-gray-light": "#BBBBBB",
      orange: "#0fb9ed",
      purple: "#9C1AE0",
      "orange-dark": "#29235c",
      "dark-grey": "#473C33",
      "light-grey": "#473C33",
      light: "#29235c",
      "light-100": "#F7F7F7",
      brown: "#473C33",
      red: "#850000",
      black: "#000",
    },
    extend: {},
  },
  plugins: [],
};
