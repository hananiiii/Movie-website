/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "blue" : "#001F3F",
         "light-white" : "#F5F5F5"
      }
    },
  },
  plugins: [],
}

