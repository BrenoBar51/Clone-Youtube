/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", 
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vermelho: "#ff0000",
        branco: "#ffffff",
        preto: "#000000",
        cinza: "#666666",
      },
    },
    plugins: [],
  },
};