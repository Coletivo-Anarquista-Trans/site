import type { Config } from "tailwindcss";

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
    },
  },
  darkMode: "class", // Enables manual theme toggling
  mode: "jit",
  plugins: [],
} satisfies Config;

