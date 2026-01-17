"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import CyberImageGallery from "@/components/organism/CyberImageGallery";

export default function BancoDeImagensPage() {
  return (
    <CyberContainer className="min-h-screen bg-background text-foreground px-4 py-8">
      <CyberContainer className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-accent1 mb-8 text-center">
          Banco de Imagens
        </h1>

        <CyberImageGallery />
      </CyberContainer>
    </CyberContainer>
  );
}
