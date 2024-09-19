/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    colors: {
      orange: "#f35a05",
      title_color: "#07040c",
      content_color: "#585967",
    },
    fontFamily: {
      sans: ["Ubuntu"],
      inter: ["Inter"],
    },
    extend: {},
  },
  plugins: [],
};
