"use client";

import CyberContainer from "@/components/atoms/CyberContainer";

export default function BancoDeImagens() {
    return (
        <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
            <CyberContainer className="w-full max-w-4xl">
                <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
                    Banco de Imagens
                </CyberContainer>

                <CyberContainer className="text-accent1 mb-6 text-center">
                    Banco de imagens para uso livre em projetos pessoais e coletivos.
                    <br />
                </CyberContainer>
            </CyberContainer>
        </CyberContainer>
    );
}