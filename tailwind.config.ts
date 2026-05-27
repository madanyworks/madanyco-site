import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          900: "#050505",
          800: "#0a0a0a",
          700: "#121212",
          600: "#1a1a1a",
        },
        bone: {
          DEFAULT: "#f5f0eb",
          50: "#fbf8f4",
          100: "#f5f0eb",
          200: "#ebe3d8",
        },
        sand: "#f0e0d0",
        blush: {
          DEFAULT: "#d4a89a",
          400: "#e1b8aa",
          500: "#d4a89a",
          600: "#c9968a",
          700: "#b88476",
        },
        coral: "#ff7a59",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        "mega": "clamp(3.5rem, 12vw, 11rem)",
        "huge": "clamp(2.5rem, 8vw, 6.5rem)",
        "big":  "clamp(2rem, 5vw, 4rem)",
      },
      letterSpacing: {
        "tightest": "-0.045em",
        "tighter":  "-0.035em",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 80s linear infinite",
        "marquee-fast": "marquee 22s linear infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
