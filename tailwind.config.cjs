const typography = require("@tailwindcss/typography");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: "#000",
      white: "#FFF",
      grey: "#EEE",
    },
    extend: {},
  },
  plugins: [typography],
};
