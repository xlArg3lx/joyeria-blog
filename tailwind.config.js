/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.jsx",
    ],
    theme: {
      extend: {
        colors: {
          'gold': {
            50: '#fbf8f0',
            100: '#f7f1d8',
            200: '#f0e4b1',
            300: '#e6d087',
            400: '#d8ba5c',
            500: '#c9a33d',
            600: '#9e7e42',
            700: '#876b37',
            800: '#5e492c',
            900: '#473921',
          },
        },
        fontFamily: {
          'sans': ['"Inter"', 'sans-serif'],
          'serif': ['"Cormorant Garamond"', 'serif'],
        },
      },
    },
    plugins: [],
  }
