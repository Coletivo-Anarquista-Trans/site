"use client";

import { createContext, useContext, useState } from "react";

type Theme =
  | "dark-violet"
  | "neon-aqua"
  | "cyberpunk-violet"
  | "cyberpunk-crimson";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark-violet");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      switch (prevTheme) {
        case "dark-violet":
          return "neon-aqua";
        case "neon-aqua":
          return "cyberpunk-violet";
        case "cyberpunk-violet":
          return "cyberpunk-crimson";
        case "cyberpunk-crimson":
          return "dark-violet";
        default:
          return "dark-violet";
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
