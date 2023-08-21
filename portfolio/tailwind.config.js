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
        '5xs': ['4px', '6px'],
        '4xs': ['6px', '8px'], 
        '3xs': ['8px', '10px'], 
        '2xs': ['10px', '12px'],
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        md: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
        '2xl': ['32px', '40px'],
        '3xl': ['40px', '48px'],
        '4xl': ['48px', '56px'],
        
      },
      screens: {
        'xs': '0px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
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
