import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#F7F4EF",
          50: "#FCFAF7",
          100: "#F7F4EF",
          200: "#EEE9E1",
          300: "#E3DCD1",
        },
        beige: {
          DEFAULT: "#EEE9E1",
          light: "#F5F1EB",
          dark: "#E1D9CD",
        },
        charcoal: {
          DEFAULT: "#171513",
          light: "#2A2724",
          dark: "#0F0E0C",
          soft: "#3A3632",
        },
        warmgray: {
          DEFAULT: "#625D56",
          light: "#8B847C",
          dark: "#4A4641",
        },
        bordergray: {
          DEFAULT: "#D8D1C7",
          light: "#EAE5DC",
          dark: "#C2BAAE",
        },
        bronze: {
          DEFAULT: "#8B6F47",
          light: "#A4865C",
          dark: "#725835",
          muted: "#B29976",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Georgia", "serif"],
        display: ["var(--font-cormorant)", "Playfair Display", "serif"],
        sans: ["var(--font-jakarta)", "Inter", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.2em",
        wide: "0.15em",
        widest: "0.25em",
      },
      scale: {
        102: "1.02",
        103: "1.03",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
