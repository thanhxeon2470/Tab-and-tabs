module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'orange-941': '#E77941',
        'gray-DAF': '#919DAF',
        'white-9EA': '#E8E9EA',
        'dark': '#1E2A3A',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}