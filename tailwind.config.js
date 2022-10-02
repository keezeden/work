const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '<placeholder>',
        secondary: '<placeholder>'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
