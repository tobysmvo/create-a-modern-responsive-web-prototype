/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        soil: "#7a5a3a",
        clay: "#b97854",
        moss: "#566b4f",
        canopy: "#243a32",
        sand: "#d8c3a5",
        chalk: "#f4efe4",
        basalt: "#1d2420",
        copper: "#bd6f44",
        lagoon: "#2f7274"
      },
      fontFamily: {
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        panel: "0 24px 80px rgba(29, 36, 32, 0.14)",
        line: "inset 0 0 0 1px rgba(36, 58, 50, 0.12)"
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        sweep: "sweep 14s linear infinite",
        rise: "rise 0.7s ease both"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        sweep: {
          "0%": { transform: "translateX(-45%)" },
          "100%": { transform: "translateX(45%)" }
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};
