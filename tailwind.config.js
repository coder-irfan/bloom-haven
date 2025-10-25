/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colors: {
          primary: "#FF7F7F",
          secondary: "#FFA4A4",
          white: "#FFFFFF",
          grayLight: "#B0B0B0",
          grayMedium: "#646464",
          grayDark: "#303030",
          accent: "#FFBB0D",
          pinkVeryLight: "#ffe3e3",
          pinkLight: "#FFD0D0",
          pinkSoft: "#FFD3D3",
          whiteshBg: "#ffe8e8",
        },
      },
      backgroundImage: {},
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        subtitle: "clamp(1rem, 2.5vw, 1.5rem)",
        h1: "clamp(1.2rem, 0.9706rem + 4.7059vw, 3rem)",
        h2: "clamp(1.3rem, 3vw, 2.3rem)",
        h3: "clamp(1.1rem, 2vw, 1.3rem)",
        h4: "clamp(1.2rem, 2vw, 1.2rem)",
        description: "clamp(0.85rem, 2vw, 1.2rem)",
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [],
};
