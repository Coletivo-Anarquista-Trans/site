"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import CyberCategorySection from "@/components/organism/CyberCategorySection";
import { useCyberSection } from "@/context/CyberSectionsContext/CyberSections";
import { resourcesByCategory } from "@/data/resources";
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

        <CyberContainer className="text-accent1 mb-6 text-center">
          Recursos úteis de customização de personagem e informações gerais
          <br />
          <span className="text-accent5">
            Tem algum recurso? Mande em: cats-trans@riseup.net
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
