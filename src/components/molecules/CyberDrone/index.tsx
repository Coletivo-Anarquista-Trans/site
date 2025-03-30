"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useFont } from "@/context/FontContext";
import CyberButton from "@/components/atoms/CyberButton";

export default function CyberDrone({
  className,
  floating = true,
}: {
  className?: string;
  floating?: boolean;
}) {
  const { theme, toggleTheme } = useTheme();
  const { font, fontSize, setFont, setFontSize } = useFont();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`${
        floating ? "fixed bottom-5 right-5" : "relative"
      } ${className || ""}`}
    >
      {/* Hexagonal Border */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M50 2.5 L95 25 L95 75 L50 97.5 L5 75 L5 25 Z"
          fill="none"
          stroke="var(--accent-1)"
          strokeWidth="5"
        />
      </svg>

      {/* Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="relative w-12 h-12 flex items-center justify-center rounded-full bg-accent-1 text-foreground hover:bg-accent-3 focus:outline-none focus:ring-2 focus:ring-accent-4 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      {/* Settings Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className={`absolute ${
            floating ? "bottom-16 right-0" : "top-16 left-0"
          } w-64 p-4 bg-background rounded-lg shadow-lg border-2 border-accent3`}
          style={{ fontFamily: font, fontSize: `${fontSize}px` }}
        >
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-4 text-accent5">
              Configurações
            </h2>

            {/* Mudar Tema */}
            <div className="mb-4">
              <CyberButton onClick={toggleTheme} unevenBorders>
                <span className="text-accent1">Mudar tema</span>
              </CyberButton>
            </div>

            {/* Seletor de Fonte */}
            <div className="mb-4">
              <label className="block mb-2 text-accent5">Fonte</label>
              <select
                value={font}
                onChange={(e) => setFont(e.target.value)}
                className="w-full p-2 border border-accent1 rounded bg-background text-foreground"
              >
                <option value="Chakra Petch">Chakra Petch</option>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
              </select>
            </div>

            {/* Controle de Tamanho da Fonte */}
            <div className="mb-4">
              <label className="block mb-2 text-accent5">
                Tamanho da Fonte
              </label>
              <input
                type="range"
                min="12"
                max="24"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-sm">{fontSize}px</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
