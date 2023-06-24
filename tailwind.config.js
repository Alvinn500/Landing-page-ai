/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html'
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'primary': '#7C26BF',
        'accent' : '#E8B00E',
        'second' : '#A444EF',
      },
      screens: {
        '2xl' : '1320',
      },
    },
  },
  plugins: [],
}

