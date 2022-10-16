/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter-Regular", "sans-serif"],
        heading: ["Inter-Regular", "sans-serif"],
      },
      colors: {
        "lizar-hard-green": "#24FE41",
        "lizar-lemon-green": "#FDFC47",
      },
    },
  },
  plugins: [],
};
