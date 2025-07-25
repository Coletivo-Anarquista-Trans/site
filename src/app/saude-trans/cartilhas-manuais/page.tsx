"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import CyberResourceIcon from "@/components/atoms/CyberResourceIcon";

export default function CartilhasManuais() {
    return (
        <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
            <CyberContainer className="w-full max-w-4xl border border-accent1 p-1 crt-screen crt-curvature crt-reflection granular-effect">
                <CyberContainer className="border border-accent1 p-6">
                    <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
                        Cartilhas e Manuais
                    </CyberContainer>

                    <CyberContainer className="text-accent1 space-y-6">
                        <section id="cartilha-1">
                            <h2 className="text-xl font-bold text-accent5 mb-4">Cartilha de Retificação de Documentos</h2>
                            <p className="text-accent1 mb-4">
                                Guia completo para retificação do registro civil de pessoas trans.
                            </p>
                            <div className="flex items-center">
                                <CyberResourceIcon type="link" className="text-accent1 mr-2" />
                                <a href="https://drive.google.com/file/d/1W1Bleu0LgUIPlpiLkK4g5SlCg8OBtcEK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">
                                    Acessar o guia ANTRA e Casa 1
                                </a>
                            </div>

                            <div className="flex items-center">
                                <CyberResourceIcon type="link" className="text-accent1 mr-2" />
                                <a href="https://drive.google.com/file/d/1aqPMKN9WQcgqQA1ITORML-_0FCNNIBbH/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">
                                    Acessar o guia do poupatrans
                                </a>
                            </div>
                        </section>

                        <section id="manual-1">
                            <h2 className="text-xl font-bold text-accent5 mb-4">DIY HRT Directory</h2>
                            <p className="text-accent1 mb-4">
                                Informações sobre terapia hormonal DIY (Do It Yourself).
                            </p>
                            <div className="flex items-center">

                                <CyberResourceIcon type="link" className="text-accent1 mr-2" />
                                <a href="https://diyhrt.wiki/index" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">
                                    https://diyhrt.wiki/index
                                </a>
                                <span className="text-accent3 text-sm ml-2">
                                    [em inglês]
                                </span>
                            </div>
                        </section>

                        <section id="manual-2">
                            <h2 className="text-xl font-bold text-accent5 mb-4">Guia DIY de Hormonização Transfeminina</h2>
                            <p className="text-accent1 mb-4 text-accent1">
                                Guia específico para hormonização transfeminina.
                            </p>
                            <div className="flex items-center">
                                <CyberResourceIcon type="link" className="text-accent1 mr-2" />
                                <a href="https://drive.google.com/file/d/1mf8n0iVmFJQyfvMFDFtXkfgA5TbOMtV7/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">
                                    Acessar a zine
                                </a>
                                <span className="text-accent3 text-sm ml-2">
                                    [em inglês]
                                </span>
                            </div>
                        </section>

                        <section id="manual-3">
                            <h2 className="text-xl font-bold text-accent5 mb-4">Introdução à Hormonização Transmasculina</h2>
                            <div className="flex items-center">
                                <CyberResourceIcon type="link" className="text-accent1 mr-2" />
                                <a href="https://drive.google.com/file/d/1SGgoHgv3kEENZV4Rv_SVFNyf_FDRgnQI/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">
                                    Acessar a zine
                                </a>
                            </div>
                        </section>

                        <section id="manual-4">
                            <h2 className="text-xl font-bold text-accent5 mb-4">Guia DIY de Hormonização Transmasculina</h2>
                            <div className="flex items-center">
                                <CyberResourceIcon type="link" className="text-accent1 mr-2" />
                                <a href="https://drive.google.com/file/d/1orM7Pc8sfVfnyxnsiW7YKoTyViKwMA_a/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">
                                    Acessar a zine
                                </a>
                                <span className="text-accent3 text-sm ml-2">
                                    [em inglês]
                                </span>
                            </div>
                        </section>

                        <section id="manual-5">
                            <h2 className="text-xl font-bold text-accent5 mb-4">Transfeminine Science</h2>
                            <div className="flex items-center">
                                <CyberResourceIcon type="link" className="text-accent1 mr-2" />
                                <a href="https://transfemscience.org/" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">
                                    https://transfemscience.org/
                                </a>
                                <span className="text-accent3 text-sm ml-2">
                                    [em inglês]
                                </span>
                            </div>
                        </section>

                        <section id="manual-5">
                            <h2 className="text-xl font-bold text-accent5 mb-4">Guia de Alistamento Militar para Pessoas Trans</h2>
                            <div className="flex items-center">
                                <CyberResourceIcon type="link" className="text-accent1 mr-2" />
                                <a href="https://drive.google.com/file/d/1dqZBqkivbzAibQVSWtzpfPlxL1g_otUL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">
                                    Acessar o guia
                                </a>
                            </div>
                        </section>
                    </CyberContainer>
                </CyberContainer>
            </CyberContainer>
        </CyberContainer>
    );
} 