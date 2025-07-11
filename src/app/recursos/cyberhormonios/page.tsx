// app/recursos/cyberhormonios/page.tsx
"use client";

import { resourcesByCategory } from "@/data/resources";
import CyberCategorySection from "@/components/organism/CyberCategorySection";
import CyberContainer from "@/components/atoms/CyberContainer";
import { useCyberSection } from "@/context/CyberSectionsContext/CyberSections";
import { useEffect } from "react";

export default function CyberhormoniosPage() {
  const { registerCyberSection } = useCyberSection();
  const resources = resourcesByCategory["Cyberhormônios"] || [];

  useEffect(() => {
    registerCyberSection("recursos", "cyberhormonios", "Cyberhormônios");
  }, [registerCyberSection]);

  return (
    <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
      <CyberContainer className="w-full max-w-4xl">
        <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
          Cyberhormônios
        </CyberContainer>

        <CyberContainer className="text-accent1 mb-6 text-center">
          Recursos para customização de personagem online.
        </CyberContainer>

        <CyberCategorySection
          id="cyberhormonios"
          title="Cyberhormônios"
          resources={resources}
        />
      </CyberContainer>
    </CyberContainer>
  );
} 