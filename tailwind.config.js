// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandOrange: "#f35525", // ✅ your orange
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],       // Inter
      heading: ["var(--font-montserrat)", "sans-serif"], // Montserrat
      },
    },
  },
  plugins: [],
}
