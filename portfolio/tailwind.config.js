/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        "page-bg": '#f3f2ef',
        "my-blue": "0a66c2"
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
