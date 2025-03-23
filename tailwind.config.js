/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
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
      animation: {
        "fade-in": "fadeIn 1s ease-in forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 1s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "slow-type": "typing 6s ease-out forwards",
        "delayed-fade": "fadeIn 2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
