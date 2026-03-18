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

        <CyberContainer className="text-accent1 mb-6 text-center">
          Arquivos de imagens para uso livre, espalhe! (zines, cartazes, lambes,
          adesivos, etc.)
          <br />
          <span className="text-accent5">
            Quer contribuir com algum material? Mande em: cats-trans@riseup.net
          </span>
        </CyberContainer>

        <CyberImageGallery />
      </CyberContainer>
    </CyberContainer>
  );
}
