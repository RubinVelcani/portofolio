module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'main': 'Titillium Web, sans-serif'
    },
    extend: {
      colors: {
        mainYellow: '#F5DF4E',
        lightGray: '#F8FAFB',
        mediumGray: '#939599',
        darkGray: '#404448'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
