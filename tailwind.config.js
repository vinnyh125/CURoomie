/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "custom-red": "#C1121F",
        "custom-tan": "#FDF0D5",
        "custom-dark-tan": "#FCE7BD",
        "custom-burgandy":"#780000",
        "custom-navy": "#003049",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], 
        staatliches: ['var(--font-staatliches)', 'sans-serif'],
      },
      textColor: {
        "custom-tan": "#FDF0D5",
        "custom-red": "#C1121F",
        "custom-burgandy": "#780000",
        "custom-navy": "#003049",
      },
    },
  },
  plugins: [],
};
