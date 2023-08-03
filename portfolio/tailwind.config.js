/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      'xs': '0px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        "page-bg": '#f3f2ef',
        "my-blue": "#0f5199"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'bebas-neue': ['"Bebas Neue"', 'cursive'],
        'orbitron': ['"Orbitron"', 'sans-serif'],
        'lato': ['"Roboto"', 'sans-serif'],
      },
      fontSize: {
        sm: '0.8rem',
        md: '1rem',
        lg: '1.25rem',
        'xl': '1.563rem',
        '2xl': '1.953rem',
        '3xl': '2.441rem',
        '4xl': '3.052rem',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20) 2000ms infinite alternate, blink .7s infinite"
      }
    },
  },
}
