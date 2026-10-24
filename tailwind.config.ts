import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    extend: {
      colors: {
        gold: {
          DEFAULT: "#d7b46a",
          50: "#FAF6EB",
          100: "#F5EECD",
          200: "#EADDA1",
          300: "#DFC872",
          400: "#D7B46A", // Primary brand gold
          500: "#C69F4E",
          600: "#A38036",
          700: "#795E25",
          800: "#534018",
          900: "#2F2309",
        },
        maroon: {
          DEFAULT: "#8C1B22",
          light: "#A4262E",
          dark: "#681217",
          deep: "#4A0C10",
        },
        ivory: {
          DEFAULT: "#FBF7F0",
          light: "#FFFDF9",
          muted: "#F3ECE0",
          card: "#F7F1E6",
        },
        obsidian: {
          DEFAULT: "#0B0B0B",
          surface: "#141414",
          card: "#1C1C1C",
        },
        ink: {
          DEFAULT: "#2A2118", // Warm dark brown foreground
          light: "#4A3B2C",
          muted: "#786551",
          border: "#D8CDBD",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Jost", "sans-serif"],
      },
      letterSpacing: {
        "royal-sm": "0.15em",
        "royal": "0.2em",
        "royal-wide": "0.25em",
        "royal-ultra": "0.35em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          "0%": { opacity: "0", transform: "translateY(-24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ping-slow": {
          "75%, 100%": {
            transform: "scale(1.4)",
            opacity: "0",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-down": "fade-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "shimmer": "shimmer 2.5s infinite linear",
        "marquee": "marquee 35s linear infinite",
        "ping-slow": "ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
