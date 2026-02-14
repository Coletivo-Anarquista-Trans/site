"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import CyberResourceIcon from "@/components/atoms/CyberResourceIcon";

export default function SaudeMental() {
    return (
        <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
            <CyberContainer className="w-full max-w-4xl border border-accent1 p-1 crt-screen crt-curvature crt-reflection granular-effect">
                <CyberContainer className="border border-accent1 p-6">
                    <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
                        Saúde Mental
                    </CyberContainer>

                    <CyberContainer className="text-accent1 space-y-6">
                        <section id="cartilha-1">
                            <h2 className="text-xl font-bold text-accent5 mb-4">Profissionais</h2>
                            <p className="text-accent1 mb-4">
                                Listas de profissionais de saúde mental.
                            </p>
                            <div className="flex items-center">
                                <CyberResourceIcon type="link" className="text-accent1 mr-2" />
                                <a href="https://www.revistaestudostransviades.org/lista-de-profissionais" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">
                                    Lista de profissionais | Estudos Transviades
                                </a>
                            </div>

                            <div className="flex items-center">
                                <CyberResourceIcon type="link" className="text-accent1 mr-2" />
                                <a href="https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vQBCl7flmc6Q4-JI6L4RhcdQZquIh-qlKr8oGF_YDKELDBlOqve3vyv2fqGBeOQVhuVBGYu1ijAUMha/pubhtml?gid=453695488&single=true&pli=1" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">
                                    Lista de Indicações - Psicólogues Não-Mono
                                </a>
                            </div>
                        </section>

                        
                    </CyberContainer>
                </CyberContainer>
            </CyberContainer>
        </CyberContainer>
    );
} 