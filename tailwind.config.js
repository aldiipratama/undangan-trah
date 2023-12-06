/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake", "dracula"],
    darkTheme: "dracula",
  },
};
