/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#032055",
        secondary: "#0a1e5e",
        background: "#001232",
        backgroundSecond: "#001539",
        borderColor: "#11326f",
        bshover: "rgb(59 55 188 / 50%)",
        textSecondary: "#9aace5",
      },
      screens: {
        mobile: "575px",
        tablet: "768px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
