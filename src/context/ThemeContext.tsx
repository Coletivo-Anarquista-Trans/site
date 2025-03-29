"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Theme =
  | "dark-violet"
  | "light-dark-violet"
  | "neon-aqua"
  | "light-neon-aqua"
  | "cyberpunk-violet"
  | "light-cyberpunk-violet"
  | "cyberpunk-crimson"
  | "paleta-um"
  | "light-paleta-um"
  | "paleta-dois"
  | "light-paleta-dois"
  | "paleta-tres"
  | "light-paleta-tres";

type ThemeCategory = 
  | "dark"
  | "light"
  | "default";

type ThemeContextType = {
  theme: Theme;
  themeCategory: ThemeCategory;
  toggleTheme: () => void
  setThemeCategory: (category: ThemeCategory) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("neon-aqua");

  const [themeCategory, setThemeCategory] = useState<ThemeCategory>(() => {
    if (["neon-aqua", "dark-violet", "cyberpunk-violet", "paleta-um", "paleta-dois", "paleta-tres"].includes(theme)) {
      return "dark";
    } else if (["cyberpunk-crimson","light-dark-violet", "light-cyberpunk-violet", "light-paleta-um", "light-paleta-dois", "light-paleta-tres"].includes(theme)) {
      return "light";
    } else {
      return "default"; // Fallback for the user's default theme
    }
  });

  useEffect(() => {
    if (
      [
        "neon-aqua",
        "dark-violet",
        "cyberpunk-violet",
        "paleta-um",
        "paleta-dois",
        "paleta-tres",
      ].includes(theme)
    ) {
      setThemeCategory("dark");
    } else if (
      [
        "cyberpunk-crimson",
        "light-dark-violet",
        "light-cyberpunk-violet",
        "light-paleta-um",
        "light-paleta-dois",
        "light-paleta-tres",
      ].includes(theme)
    ) {
      setThemeCategory("light");
    } else {
      setThemeCategory("default");
    }
  }, [theme]);

  // Toggle between themes within the same category
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      console.log("Current theme:", prevTheme);
      if (themeCategory === "dark") {
        const darkThemes: Theme[] = [
          "neon-aqua",
          "dark-violet",
          "cyberpunk-violet",
          "paleta-um",
          "paleta-dois",
          "paleta-tres",
        ];
        const currentIndex = darkThemes.indexOf(prevTheme);
        const nextTheme = darkThemes[(currentIndex + 1) % darkThemes.length];
        console.log("Next dark theme:", nextTheme);
        return nextTheme as Theme;
      } else if (themeCategory === "light") {
        const lightThemes: Theme[] = [
          "cyberpunk-crimson",
          "light-dark-violet",
          "light-cyberpunk-violet",
          "light-paleta-um",
          "light-paleta-dois",
          "light-paleta-tres",
        ];
        const currentIndex = lightThemes.indexOf(prevTheme);
        const nextTheme = lightThemes[(currentIndex + 1) % lightThemes.length];
        console.log("Next light theme:", nextTheme);
        return nextTheme as Theme;
      } else {
        return prevTheme; // Default theme remains unchanged
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, themeCategory, toggleTheme, setThemeCategory }}>
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
