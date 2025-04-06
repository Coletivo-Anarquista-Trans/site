// app/recursos/page.tsx
"use client";

import { resourcesByCategory } from "@/data/resources";
import CyberCategorySection from "@/components/organism/CyberCategorySection";
import CyberContainer from "@/components/atoms/CyberContainer";
import { useCyberSection } from "@/context/CyberSectionsContext/CyberSections";
import { useEffect } from "react";

export default function Resources() {
  const { registerCyberSection } = useCyberSection();
  const sortedCategories = Object.keys(resourcesByCategory).sort();

  useEffect(() => {
    sortedCategories.forEach((category) => {
      registerCyberSection("recursos", `item-${category}`, category);
    });
  }, [sortedCategories, registerCyberSection]);

  return (
    <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
      <CyberContainer className="w-full max-w-4xl">
        <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
          Recursos
        </CyberContainer>

        <CyberContainer className="font-bold text-accent1 mb-6 text-center">
          Recursos úteis de customização de personagem e informações gerais.
          <br />
          Em breve, mais recursos que não sejam sobre hormonios!
          <br />
          <span className="text-accent5">
            Tem algum recurso? Mande pra gente em cats-trans@riseup.net
          </span>
        </CyberContainer>

        {sortedCategories.map((category) => (
          <CyberCategorySection
            key={category}
            id={`item-${category}`}
            title={category}
            resources={resourcesByCategory[category]}
          />
        ))}
      </CyberContainer>
    </CyberContainer>
  );
}
