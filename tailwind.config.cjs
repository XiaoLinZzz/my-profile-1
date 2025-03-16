/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dancing-script": ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
