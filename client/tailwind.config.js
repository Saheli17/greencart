// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4fbf8b',
        primaryDull: '#44ae7c',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      // fontFamily: {
      //   outfit: ['Outfit', 'sans-serif'],
      // },
    },
  },
  plugins: [],
};


