/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":"url('/public/img/HP_and_Men_Masthead_DT_2880x1280_5ef2ab94cc.jpg')"
      }
    },
  },
  plugins: [],
}