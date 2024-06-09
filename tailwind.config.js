/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: ["#cbacf9"],
        secondary: ["#000319"],
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        code: ["Fira Code", "monoscope"],
      },
    },
  },
  plugins: [],
};
