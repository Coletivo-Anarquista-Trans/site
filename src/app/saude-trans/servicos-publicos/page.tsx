"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import CyberResourceIcon from "@/components/atoms/CyberResourceIcon";
import CyberDropdown from "@/components/molecules/CyberDropdown";

export default function ServicosPublicos() {
    // Rio de Janeiro services content
    const rjServicesContent = (
        <div className="space-y-4">
            <div className="border border-accent1 p-4">
                <h3 className="text-lg font-bold text-accent5 mb-3">Amb. de Saúde Int. de Travestis e Transexuais João W. Nery</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>Endereço: Av. Ernani do Amaral Peixoto, 169 - Centro, Niterói, RJ</li>
                    <li>Contato: (21) 2717-8140</li>
                </ul>
            </div>
        </div>
    );

    // São Paulo services content
    const spServicesContent = (
        <div className="space-y-4">
            <div className="border border-accent1 p-4">
                <h3 className="text-lg font-bold text-accent5 mb-3">Rede Sampa Trans</h3>
                <div className="space-y-2">
                    <p className="text-accent3 text-sm">Centros de atendimento disponíveis por região:</p>
                    <div className="flex items-center">
                        <CyberResourceIcon type="link" className="text-accent1 mr-2" />
                        <a href="https://drive.prefeitura.sp.gov.br/cidade/secretarias/upload/saude/Rede_SAMPA_Trans_16_6_2023.pdf" target="_blank" rel="noopener noreferrer" className="text-accent1 hover:underline">
                            Documento oficial com lista de centros
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
            <CyberContainer className="w-full max-w-4xl border border-accent1 p-1 crt-screen crt-curvature crt-reflection granular-effect">
                <CyberContainer className="border border-accent1 p-6">
                    <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
                        Serviços públicos de saúde
                    </CyberContainer>

                    <CyberContainer className="text-accent1 mb-6">
                        <p className="font-bold mb-4">
                            Dispositivos legais para a população trans no Brasil
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>Portaria n. 457, de 21 de agosto de 2008 - Define as diretrizes nacionais para o processo transexalizador no Sistema Único de Saúde (SUS), a serem implantadas em todos os estados e na unidade federal.</li>
                            <li>Portaria n. 2803, de 19 de novembro de 2013 - Redefine e amplia o processo transexualizador no Sistema Único de Saúde (SUS).</li>
                            <li>Resolução nº 11, de 18 de dezembro de 2014 - Estabelece os parâmetros para a inclusão dos itens "orientação sexual", "identidade de gênero" e "nome social" nos boletins de ocorrência emitidos pelas autoridades policiais no Brasil.</li>
                            <li>Decreto nº 8.727, de 28 de abril de 2016 - Dispõe sobre o uso do nome social e o reconhecimento da identidade de gênero de pessoas travestis e transexuais no âmbito da administração pública federal direta, autárquica e fundacional.</li>
                            <li>Provimento nº 73/28 de junho de 2018 - Regulamentou a retificação do registro civil e todos os cartórios de registro de pessoas do Brasil ficaram obrigados a realizar a alteração de nome e marcador de gênero nas certidões de nascimento.</li>
                            <li>Portaria nº 1.370, de 21 de junho de 2019 - Inclui oficialmente na tabela de procedimentos, medicamentos, óteses, próteses e materiais especiais do SUS um novo procedimento relacionado à redesignação sexual de pessoas transmasculinas.</li>
                            <li>Portaria nº 1.693, de 10 de maio de 2024 - Garante que procedimentos de ginecologia, obstetrícia, urologia e proctologia no SUS estejam acessíveis a todas as pessoas, independentemente do sexo registrado, com base na identidade de gênero autodeterminada.</li>
                        </ul>
                    </CyberContainer>

                    {/* Services by Region */}
                    <CyberContainer className="space-y-4">
                        <h2 className="text-xl font-bold text-accent5 mb-4">Serviços por região</h2>

                        {/* Rio de Janeiro */}
                        <CyberDropdown
                            title="Rio de Janeiro"
                            content={rjServicesContent}
                            className="w-full max-w-4xl"
                        />

                        {/* São Paulo */}
                        <CyberDropdown
                            title="São Paulo"
                            content={spServicesContent}
                            className="w-full max-w-4xl"
                        />
                    </CyberContainer>
                </CyberContainer>
            </CyberContainer>
        </CyberContainer>
    );
} 