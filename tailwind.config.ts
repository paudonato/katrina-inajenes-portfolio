import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF1F8",
          100: "#D7DEEF",
          400: "#5B6E96",
          800: "#101B33",
          900: "#0B1220",
          950: "#070B14",
        },
        charcoal: {
          DEFAULT: "#1C1E22",
          700: "#26292E",
          800: "#1A1C20",
        },
        softblue: {
          300: "#A7C4F5",
          400: "#7DA6F5",
          500: "#4C7EF3",
          600: "#3563D9",
        },
        paper: "#F7F8FA",
        mist: "#EDEFF3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blob: "blob 18s infinite ease-in-out",
        fadeUp: "fadeUp 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
