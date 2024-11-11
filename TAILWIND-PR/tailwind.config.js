/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      theme: {
        screens: {
          'sm': '576px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '992px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1200px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1400px',
          // => @media (min-width: 1536px) { ... }
        }
      },
      
        colors: {
          'navy': '#2b2b2b',
          'lightgray':'#444444',
          'lightblack': '#111111',
        },
      
    },
  },
  plugins: [],
}

