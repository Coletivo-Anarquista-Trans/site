// context/CyberSectionsContext/CyberSections.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface CyberSection {
  id: string;
  parent: string;
  label: string;
}

interface CyberSectionContextType {
  cyberSections: CyberSection[];
  registerCyberSection: (parent: string, id: string, label: string) => void;
  loadSections: (sections: CyberSection[]) => void;
}

const CyberSectionContext = createContext<CyberSectionContextType | undefined>(
  undefined
);

export function CyberSectionProvider({ children }: { children: ReactNode }) {
  const [cyberSections, setCyberSections] = useState<CyberSection[]>([]);

  useEffect(() => {
    const savedSections = localStorage.getItem("cyber-sections");
    if (savedSections) {
      setCyberSections(JSON.parse(savedSections));
    }
  }, []);

  const registerCyberSection = (parent: string, id: string, label: string) => {
    setCyberSections((prev) => {
      const exists = prev.some((s) => s.id === id && s.parent === parent);
      const newSections = exists ? prev : [...prev, { parent, id, label }];
      localStorage.setItem("cyber-sections", JSON.stringify(newSections));
      return newSections;
    });
  };

  const loadSections = (sections: CyberSection[]) => {
    setCyberSections(sections);
    localStorage.setItem("cyber-sections", JSON.stringify(sections));
  };

  return (
    <CyberSectionContext.Provider
      value={{ cyberSections, registerCyberSection, loadSections }}
    >
      {children}
    </CyberSectionContext.Provider>
  );
}

export function useCyberSection() {
  const context = useContext(CyberSectionContext);
  if (!context) {
    throw new Error(
      "useCyberSection must be used within a CyberSectionProvider"
    );
  }
  return context;
}
