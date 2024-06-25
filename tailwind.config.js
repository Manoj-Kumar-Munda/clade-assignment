/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        "btn-primary-bg": "#DC4A2D",
        "btn-primary-border": "#FED3CA",
        "btn-secondary-bg": "#FEF4F2",
        "btn-secondary-border": "#DC4A2D",
        "black-text": "#4F4F4F",
        "light-gray": "#888888"
      },
      boxShadow: {
        "skills-btn" : "0px 4px 4px 0px #00000014 inset",
        "btn" : "0px 4px 4px 0px #00000040",
        "nav-inset": "0px 4px 4px 0px #00000040 inset",
        "header" : "0px 4px 4px 0px #D9D9D91A"
      }
    },
  },
  plugins: [],
};
