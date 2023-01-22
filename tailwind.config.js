/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        moveUp:{
          '0%':{ transform: "translate-y-[20px]"},
          '100%':{transform: "translate-y-[0px]"}
        }
      }
    },
  },
  plugins: [  require('tailwind-scrollbar')],
  
};
