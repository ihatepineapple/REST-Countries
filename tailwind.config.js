/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "dark-blue": "hsl(209, 23%, 22%)", // dark mode elements
      "very-dark-blue-dark": "hsl(207, 26%, 17%)", // dark mode bg
      "very-dark-blue-light": "hsl(200, 15%, 8%)", // light mode text
      "dark-gray": "hsl(0, 0%, 52%)", // light mode input
      "very-light-gray": "hsl(0, 0%, 98%)", // light mode bg
      "white-color": "hsl(0, 0%, 100%)", // dark mode text || light mode elements
    },
    fontFamily: {
      sans: ["Nunito-sans", "sans-serif"],
    },
    extend: {
      boxShadow: {
        bottom: "0 4px 5px -2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  darkMode: "class",
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
};
