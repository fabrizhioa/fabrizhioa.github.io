/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        iconsbg: "url('/Icons_bg.png')"
      },
      animation: {
        "opacityInOut": "opacityInOut 7s ease-in-out 1",
        "opacityIn": "opacityIn 7s ease-in-out 1"
      },
      keyframes:{
        opacityInOut: {
          '0%, 100%': {
            opacity:"0"
          }, "50%": {
            opacity:"1"
          }
        },
        opacityIn: {
          '0%': {
            opacity:"0"
          }, "100%": {
            opacity:"1"
          }
        }

      }
    },
  },
  plugins: [],
}