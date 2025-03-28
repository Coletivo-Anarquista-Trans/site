import type { Config } from "tailwindcss";
import twGlow from "twglow";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent1: "var(--accent-1)",
        accent2: "var(--accent-2)",
        accent3: "var(--accent-3)",
        accent4: "var(--accent-4)",
        accent5: "var(--accent-5)",
        accent6: "var(--accent-6)",
      },
      boxShadow: {
        focus: "0 0 0 2px var(--accent-2)",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
    },
  },
  darkMode: "class", // Enables manual theme toggling
  mode: "jit",
  plugins: [twGlow],
} satisfies Config;
