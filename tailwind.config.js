/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          soft: '#8284FA',
          dark: '#5E60CE',
        },
        secondary: {
          soft: '#4EA8DE',
          dark: '#1E6F9F',
        },
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        danger: '#E25858',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
