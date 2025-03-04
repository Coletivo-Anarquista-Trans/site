"use client";

import { createContext, useContext, useState } from "react";

type Theme =
  | "default-theme"
  | "new-theme"
  | "cyberpunk-purple-theme"
  | "cyberpunk-red-theme";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("default-theme");

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      switch (prevTheme) {
        case "default-theme":
          return "new-theme";
        case "new-theme":
          return "cyberpunk-purple-theme";
        case "cyberpunk-purple-theme":
          return "cyberpunk-red-theme";
        case "cyberpunk-red-theme":
          return "default-theme";
        default:
          return "default-theme";
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
