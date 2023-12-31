/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-text": "#262626",
        "background": "#ffffff",
        "inactive": "#D3D3D3",
        "shade-one": "#2E8362",
        "shade-two": "#ECF5F1"
      },
      fontFamily:{
        'sans': ['Open Sans'],
        'sans-serif': ['Poppins']
      },
      fontSize:{
        "xl": "1.25rem"
      },
      lineHeight:{
        "xl": "normal"
      }
      
    },
  },
  plugins: [],
}
