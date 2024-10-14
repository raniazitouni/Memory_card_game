/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        atheletic: ["Athletic_Pro", "sans-serif"],
      },
      colors: {
        "etic-red": "#E51F1C",
        "etic-green": "#009945",
        "etic-yellow": "#FDCD00",
        "etic-bleu": "#0060A9",
        "etic-grey": "#EFEFEF",
      },
    },
  },
  plugins: [],
};
