/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontSize: {
        small: "6px",
        medium: "10px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#DB4444",
        secondaryWhite: "#FAFAFA",
        secondaryGreen: "#00FF66",
        footerCol: "#000000",
        searchBg: "#F5F5F5",
        categoriesBg: "rgba(0, 0, 0, 0.3)",
        gradient: "#D9D9D9",
        circle: "#2F2E30",
        linear: "#460346be",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
