/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     backgroundColor: {
      primary: '#c0ebe6',
     
      },
      fontFamily: {
        montserrat: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
        poppins: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

