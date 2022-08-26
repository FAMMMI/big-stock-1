/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctorstheme: {
          primary: "#4406c9",
          secondary: "#9f4de8",
          accent: "#071536",
          neutral: "#b29ff5",
          velvet: "#902C3E",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
