/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins"
      },
      colors: {
        primary: '#173561',
        secondary: '#F5F5F5',
        textcol: '#726E6E'
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-120%)"}
        }
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",


      // '2xl': {'max': '1535px'},
      // // => @media (max-width: 1535px) { ... }

      // 'xl': {'max': '1279px'},
      // // => @media (max-width: 1279px) { ... }

      // 'lg': {'max': '1023px'},
      // // => @media (max-width: 1023px) { ... }

      // // 'md': {'max': '767px'},
      // // => @media (max-width: 767px) { ... }
     

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'xs': {'max':'414px'}
     
    },
    variants: {
      extend: {
        padding: ['hover', 'focus'],
      },
    },
    

  },
  plugins: [],
}

