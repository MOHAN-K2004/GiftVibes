/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightBlue:"#ebfbff",
        bluecolor:"#012754",
        bluecolor1:"#032754"
       
      },
      fontFamily:{
        intter:[ "Inter", "sans-serif"],
        varela:["Varela Round","sans-serif"]
      }
    },
  },
  plugins: [],
}