module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          350: "#2E5E4E",
          450: "#0D2327",
          950: "#001E26",
        },
        gray: {
          450: "#93A7AA"
        }
      },
      animation: {
        tilt: "tilt 10s infinite linear"
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)"
          },
          "25%": {
            transform: "rotate(1deg)"
          },
          "75%": {
            transform: "rotate(-1deg)"
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("tailwindcss"), require("autoprefixer")]
}
