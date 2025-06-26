"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import CyberResourceIcon from "@/components/atoms/CyberResourceIcon";
import CyberDropdown from "@/components/molecules/CyberDropdown";

export default function ServicosPublicos() {
    // Acre services content
    const acServicesContent = (
        <div className="space-y-4">
            <div className="border border-accent1 p-4">
                <h3 className="text-lg font-bold text-accent5 mb-3">Centro de Referência LGBT do Acre</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        Endereço: Rua Francisco Mangabeira, 33 - Bosque, Rio Branco, AC
                    </li>
                    <li>
                        Telefone: (68) 3215-2310
                    </li>
                    <li>
                        E-mail: crsejudh@ac.gov.br
                    </li>
                </ul>
            </div>
        </div>
    );

    // Amazonas services content
    const amServicesContent = (
        <div className="space-y-4">
            <div className="border border-accent1 p-4">
                <h3 className="text-lg font-bold text-accent5 mb-3">Universidade Estadual do Amazonas - Ambulatório de Diversidade Sexual e Gênero</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        Endereço: Rua Codajás, 26, Cachoeirinha, AM
                    </li>
                    <li>
                        Telefone: (92) 3612-4200 / 4208 / 4217
                    </li>
                    <li>
                        E-mail: dirpam@policodajas.am.gov.br
                    </li>
                </ul>
            </div>
        </div>
    );

    // Ceará services content
    const ceServicesContent = (
        <div className="space-y-4">
            <div className="border border-accent1 p-4">
                <h3 className="text-lg font-bold text-accent5 mb-3">Ambulatório de Saúde Trans do Hospital de Saúde Mental Frota Pinto</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        Endereço: Rua Vicente Nobre Macêdo, s/n - Messejana, Fortaleza, CE
                    </li>
                    <li>
                        Telefone: (85) 3101-4348
                    </li>
                </ul>
            </div>
        </div>
    );

    // Distrito Federal services content
    const dfServicesContent = (
        <div className="space-y-4">
            <div className="border border-accent1 p-4">
                <h3 className="text-lg font-bold text-accent5 mb-3">Distrito Federal Ambulatório Trans do Hospital Dia</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        Endereço: Asa Sul EQS 508/509 - Asa Sul, Brasília, DF
                    </li>
                    <li>
                        Telefone: (61) 3445-7529 / 3445-7521
                    </li>
                </ul>
            </div>
        </div>
    );

    // Espírito Santo services content
    const esServicesContent = (
        <div className="space-y-4">
            <div className="border border-accent1 p-4">
                <h3 className="text-lg font-bold text-accent5 mb-3">Hospital Universitário Cassiano Antônio de Moraes</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        Endereço: Av. Mal. Campos, 1355 - Santos Dumont, Vitória, ES
                    </li>
                    <li>
                        Telefone: (27) 3335-7100
                    </li>
                </ul>
            </div>
        </div>
    );

    // Goiás services content
    const goServicesContent = (
        <div className="space-y-4">
            <div className="border border-accent1 p-4">
                <h3 className="text-lg font-bold text-accent5 mb-3">Univ Fed. de Goiás – Hospital das Clínicas da Universidade Federal de Goiás</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        Endereço: 1ª Avenida, S/N - Setor Leste Universitário, Goiânia, GO
                    </li>
                    <li>
                        Telefone: (62) 3269-8200
                    </li>
                </ul>
            </div>

            <div className="border border-accent1 p-4">
                <h3 className="text-lg font-bold text-accent5 mb-3">Ambulatório de Transexualidade do Hospital Geral de Goiânia Alberto Rassi</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        Endereço: Av. Anhanguera, 6479 - St. Oeste, Goiânia, GO
                    </li>
                    <li>
                        Telefone: (62) 3209-9800
                    </li>
                </ul>
            </div>
        </div>
    );

    // Rio de Janeiro services content
    const rjServicesContent = (
        <div className="space-y-4">
            <div className="border border-accent1 p-4">
                <h3 className="text-lg font-bold text-accent5 mb-3">Amb. de Saúde Int. de Travestis e Transexuais João W. Nery</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>Endereço: Av. Ernani do Amaral Peixoto, 169 - Centro, Niterói, RJ</li>
                    <li>Telefone: (21) 2717-8140</li>
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
                        Serviços Públicos de Saúde
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
                        <span className="text-accent3 text-sm">Fonte: <a className="text-accent3 hover:underline" href="https://www.saudelgbtqia.com/assistenciaestadual" target="_blank" rel="noopener noreferrer">ambulatórios estaduais de saúde trans e centros de acolhimento LGBTQIA+</a></span>

                        {/* Acre */}
                        <CyberDropdown
                            title="Acre"
                            content={acServicesContent}
                            className="w-full max-w-4xl"
                        />

                        {/* Amazonas */}
                        <CyberDropdown
                            title="Amazonas"
                            content={amServicesContent}
                            className="w-full max-w-4xl"
                        />

                        {/* Ceará */}
                        <CyberDropdown
                            title="Ceará"
                            content={ceServicesContent}
                            className="w-full max-w-4xl"
                        />

                        {/* Distrito Federal */}
                        <CyberDropdown
                            title="Distrito Federal"
                            content={dfServicesContent}
                            className="w-full max-w-4xl"
                        />

                        {/* Espírito Santo */}
                        <CyberDropdown
                            title="Espírito Santo"
                            content={esServicesContent}
                            className="w-full max-w-4xl"
                        />

                        {/* Goiás */}
                        <CyberDropdown
                            title="Goiás"
                            content={goServicesContent}
                            className="w-full max-w-4xl"
                        />

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