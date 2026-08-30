/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        apostole: {
          navy: '#0b1524',
          navydeep: '#060c15',
          forest: '#16332b',
          gold: '#d9a73d',
          goldlight: '#e8c468',
          cream: '#f4ede1',
          ember: '#c97b3c',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
