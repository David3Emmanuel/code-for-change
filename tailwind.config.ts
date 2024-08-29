import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
export default config