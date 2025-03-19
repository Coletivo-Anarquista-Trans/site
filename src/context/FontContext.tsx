"use client";

import React, { createContext, useContext, useState } from "react";

interface FontContextType {
  font: string;
  fontSize: number;
  setFont: (font: string) => void;
  setFontSize: (size: number) => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export function FontProvider({ children }: { children: React.ReactNode }) {
  const [font, setFont] = useState<string>("Chakra Petch");
  const [fontSize, setFontSize] = useState<number>(16);

  return (
    <FontContext.Provider value={{ font, fontSize, setFont, setFontSize }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
}
