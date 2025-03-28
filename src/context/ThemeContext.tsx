"use client";

import { createContext, useContext, useState } from "react";

type Theme =
  | "default-theme"
  | "new-theme"
  | "dark-violet"
  | "neon-aqua"
  | "cyberpunk-violet"
  | "cyberpunk-crimson"
  | "paleta-um"
  | "paleta-dois"
  | "paleta-tres";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("neon-aqua");

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
          return "paleta-um";
        case "paleta-um":
          return "paleta-dois";
        case "paleta-dois":
          return "paleta-tres";
        case "paleta-tres":
          return "dark-violet";
        default:
          return "dark-violet"; // Fallback, should never be reached
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
