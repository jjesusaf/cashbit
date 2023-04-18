/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        xs:'14px',
        sm: '16px',
        md: '18px',
        xl:'24px',
        xxl:'32px',
        xxxl:'44px' 
      },
      colors:{
        borderGray:'#CFD7D4',
        black1:'#333333',
        white1:'#FFFAF2',
        white2:'#FFFFFF',
        green1:'#2F725A',
        gray1:'#93989A',
        gray2:'#A9A5AC',
        gray3:'#333333',
        rgbagreen:'rgba(66, 168, 70, 0.2);'

      }
      
    },
  },
  plugins: [],
}
