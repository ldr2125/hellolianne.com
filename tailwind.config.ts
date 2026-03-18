import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f5f4f0",
        surface: "#eceae4",
        border: "#d4cfc7",
        text: "#0f0e0c",
        muted: "#888178",
        accent: "#c17d3c",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        display: ["clamp(3.5rem, 10vw, 8rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        heading: ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
      },
    },
  },
  plugins: [],
};

export default config;
