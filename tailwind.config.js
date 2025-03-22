/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "love-pink": "#FF69B4",
        "light-pink": "#FBB6FF",
        peach: "#FFD3B8",
        "bg-pink": "#FFF5F5",
      },
      fontFamily: {
        lilita: ['"Lilita One"', "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
