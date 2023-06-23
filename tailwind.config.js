/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1280px", // atau sesuaikan dengan nilai yang diinginkan
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#002057",
        secondary: "#ff7b00",
      },
    },
  },
  plugins: [],
};
