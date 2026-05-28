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
        // bone = warm cream text colour from brand
        bone: {
          DEFAULT: "#e7e6e0",
          50: "#f2f1ed",
          100: "#e7e6e0",
          200: "#d4d2cb",
        },
        sand: "#f0e0d0",
        // blush = primary brand pink (FC74B6)
        blush: {
          DEFAULT: "#fc74b6",
          300: "#fda6d0",
          400: "#fd8dc4",
          500: "#fc74b6",
          600: "#e85ea1",
          700: "#cc4d8b",
        },
        // hot = high-emphasis magenta for primary CTAs (FF32AF)
        hot: {
          DEFAULT: "#ff32af",
          400: "#ff5cbf",
          500: "#ff32af",
          600: "#e51c97",
        },
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
