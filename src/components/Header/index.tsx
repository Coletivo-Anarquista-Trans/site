"use client";

import { useTheme } from "@/context/ThemeContext";

export default function Header() {
      const { theme, toggleTheme } = useTheme();
    
    return (
      <header
        className={`${theme} w-full bg-background flex flex-row justify-between`}
      >
        
          <span className="text-accent1">a</span>
        
      </header>
    );
}