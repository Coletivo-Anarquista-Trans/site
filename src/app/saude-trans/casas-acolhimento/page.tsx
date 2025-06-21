"use client";

import CyberContainer from "@/components/atoms/CyberContainer";

export default function CasasAcolhimento() {
    return (
        <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
            <CyberContainer className="w-full max-w-4xl border border-accent1 p-1 crt-screen crt-curvature crt-reflection granular-effect">
                <CyberContainer className="border border-accent1 p-6">
                    <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
                        Casas de acolhimento
                    </CyberContainer>

                    <CyberContainer className="text-accent1 space-y-6">
                        <section id="casa-1">
                            <h2 className="text-xl font-bold text-accent5 mb-4">Casa 1</h2>
                            <p className="text-accent1 mb-4">
                                Casa de acolhida de jovens LGBT+, centro cultural e clínica de saúde mental gratuita.
                            </p>
                            <div className="space-y-2">
                                <ul className="list-disc list-inside">
                                    <li>Endereço: Rua Adoniran Barbosa, 151 - Bela Vista, São Paulo - SP</li>
                                    <li>Contato: contato@casaum.org</li>
                                    <li>Instagram: @casaum</li>
                                    <li>Site: <a href="https://www.casaum.org" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">https://www.casaum.org</a></li>
                                </ul>
                            </div>
                        </section>

                        <section id="casa-2">
                            <h2 className="text-xl font-bold text-accent5 mb-4">Casa Nem</h2>
                            <p className="text-accent1 mb-4">
                                Centro de acolhida LGBTQIAPN+ (com atendimento noturno).
                            </p>
                            <div className="space-y-2">
                                <ul className="list-disc list-inside">
                                    <li>Endereço: Rio de Janeiro - RJ</li>
                                    <li>Contato: (21) 96519-2569</li>
                                    <li>Instagram: @casanem_</li>
                                </ul>
                            </div>
                        </section>

                        <section id="casa-3">
                            <h2 className="text-xl font-bold text-accent5 mb-4">Casa Florescer</h2>
                            <p className="text-accent1 mb-4">
                                Centro de acolhida para travestis e mulheres transexuais em situação de vulnerabilidade.
                            </p>
                            <div className="space-y-2">
                                <ul className="list-disc list-inside">
                                    <li>Endereço: Rua Prates, 1101 - Bom Retiro, São Paulo - SP</li>
                                    <li>Contato: (11) 3228-0502</li>
                                    <li>Instagram: @casaflorescer1</li>
                                </ul>
                            </div>
                        </section>

                        <section id="casa-4">
                            <h2 className="text-xl font-bold text-accent5 mb-4">Casa João Nery</h2>
                            <p className="text-accent1 mb-4">
                                Centro de acolhida para homens trans e pessoas transmasculinas em situação de vulnerabilidade.
                            </p>
                            <div className="space-y-2">
                                <ul className="list-disc list-inside">
                                    <li>Endereço: Rua Carlos Escobar, 86 - Santana, São Paulo - SP</li>
                                    <li>Contato: caejoaonery@gmail.com</li>
                                    <li>Instagram: @cajoaonery</li>
                                </ul>
                            </div>
                        </section>

                        <section id="casa-4">
                            <h2 className="text-xl font-bold text-accent5 mb-4">Casa Miga</h2>
                            <p className="text-accent1 mb-4">
                                Centro de referência e casa de acolhimento para pessoas LGBTIA+ do Norte e refugiadas expulsas de casa e/ou em situação de vulnerabilidade social.
                            </p>
                            <div className="space-y-2">
                                <ul className="list-disc list-inside">
                                    <li>Endereço: Rua Silva Ramos, 839 - Manaus, AM</li>
                                    <li>Contato: contato@casamiga.org</li>
                                    <li>Instagram: @casamigalgbt</li>
                                    <li>Site: <a href="https://linktr.ee/casamigalgbt" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">linktr.ee/casamigalgbt</a></li>
                                </ul>
                            </div>
                        </section>
                    </CyberContainer>
                </CyberContainer>
            </CyberContainer>
        </CyberContainer>
    );
} 