/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js,css}'],
  theme: {
    extend: {
      fontSize: {
        odinaka: "10rem",
        maintitles: "2rem",
      },
      fontFamily: {
        perm: ['"Permanent Marker", cursive;'],
        moncodo: ['"Macondo", cursive;'],
        gloria: ['"Gloria", cursive;'],
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "black"
          }  
        }
      },
      animation: {
        typing: "typing 4s steps(20) infinite alternate, blink 2s infinite"
      }
    },
  },
  plugins: [],
}

