/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        newsBackground:"#F8F8F8",
        newsTextColor:"#2E3E5F"
      }
    },
  },
  plugins: [],
};
