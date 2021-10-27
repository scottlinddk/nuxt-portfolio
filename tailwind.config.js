module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue'
  ],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 10s infinite linear'
      },
      keyframes: {
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)'
          },
          '25%': {
            transform: 'rotate(1deg)'
          },
          '75%': {
            transform: 'rotate(-1deg)'
          }
        }
      }
    }
  },
  // plugins: [require('tailwindcss'), require('autoprefixer')]
}
