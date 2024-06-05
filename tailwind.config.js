/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#951a2e",
        secondary: "#011f4b",
        accent: "#f58020",
        base: "#fffae6",
        blue: {
          200: "#B3CDE0",
        },
        slate: {
          400: "#6497B1",
        },
        amber: {
          200: "#FBE47E",
          400: "#FFC837",
        },
        white: "#ffffff",
      },
      backgroundImage: {
        "main-pattern": "url('/backgrounds/base_background.png')",
      },
    },
  },
  plugins: [],
};
