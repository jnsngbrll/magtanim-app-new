/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#E9F7EF',
          100: '#A9DFBF',
          200: '#28B463',
        },
        secondary: {
          default: '#FFFFFF',
          100: '#F1F2F4',
          200: '#808080',
        },
        accent: {
          default: '#333333',
          100: '#252526',
          200: '#1E1E1E',
        },
      },
    },
  },
  plugins: [],
};

// <reference types="nativewind/types" />
