/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cookie: ['"Cookie"', 'cursive'], // Add the Cookie font here
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // Mengunci tema ke "light" saja
    darkTheme: false, // Menonaktifkan mode dark
  },
}