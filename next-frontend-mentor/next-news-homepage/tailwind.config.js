/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      softOrange: "#E9AB53",
      softRed: "#F15E50",
      offWhite: "#FFFDFA",
      grayishBlue: "#C5C6CE",
      darkGrayishBlue: "#5D5F79",
      veryDarkBlue: "#00001A",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
