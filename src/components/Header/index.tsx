"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  return (
    <header
      className={`${theme} position-fixed w-full bg-background flex flex-row justify-center gap-2 items-center p-4 max-h-[20%] relative border-b-2 border-accent2 mb-4`}
    >
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <button
          key={index}
          className={`bg-transparent outline: none; font-semibold  px-4 rounded shadow relative transition-all duration-300 ${
            selectedButton === index ? "translate-y-2" : ""
          }`}
          onClick={() => handleButtonClick(index)}
        >
          <span className="text-glow-accent2">mysteryous button</span>
          {selectedButton === index && (
            <div
              className="absolute -bottom-2 left-0 w-full h-2 bg-background"
              style={{ transform: "translateY(2px)" }}
            ></div>
          )}
        </button>
      ))}
    </header>
  );
}
