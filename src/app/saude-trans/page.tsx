// app/saude-trans/page.tsx
"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import CyberDropdown from "@/components/molecules/CyberDropdown";
import { CyberDropdownItem } from "@/types/dropdown";

export default function SaudeTrans() {
    const servicosSaudeItems: CyberDropdownItem[] = [
        {
            id: "sp-servicos",
            label: "São Paulo",
            onClick: () => console.log("São Paulo")
        },
        {
            id: "rj-servicos",
            label: "Rio de Janeiro",
            onClick: () => console.log("Rio de Janeiro")
        }
    ];

    const casasAcolhimentoItems: CyberDropdownItem[] = [
        {
            id: "casa-1",
            label: "Casa 1",
            onClick: () => console.log("Casa SP clicked")
        },
        {
            id: "casa-2",
            label: "Casa Nem",
            onClick: () => console.log("Casa RJ clicked")
        }
    ];

    const cartilhasManuaisItems: CyberDropdownItem[] = [
        {
            id: "cartilha-1",
            label: "Cartilha de Retificação de Documentos",
            onClick: () => console.log("Cartilha 1 clicked")
        },
        {
            id: "manual-1",
            label: "Cartilha de DIY Hormonal",
            onClick: () => console.log("Manual 1 clicked")
        },
        {
            id: "manual-2",
            label: "Cartilha sobre segurança ",
            onClick: () => console.log("Manual 2 clicked"),
            disabled: true
        }
    ];

    return (
        <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
            <CyberContainer className="w-full max-w-4xl border border-accent1 p-1 crt-screen crt-curvature crt-reflection granular-effect">
                <CyberContainer className="border border-accent1 p-6">
                    <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
                        Saúde Trans
                    </CyberContainer>

                    <CyberContainer className="text-accent1 text-center mb-6">
                        Recursos e informações sobre a nossa saúde, incluindo cartilhas, manuais, informações sobre nossos direitos e quais são os serviços públicos de saúde que nos atendem e como acessá-los.
                        <br />
                        <span className="text-accent5">
                            Tem algum recurso? Mande pra gente em: cats-trans@riseup.net
                        </span>
                    </CyberContainer>

                    <div className="space-y-4">
                        <CyberDropdown
                            title="Serviços de Saúde"
                            items={servicosSaudeItems}
                        />

                        <CyberDropdown
                            title="Casas de Acolhimento"
                            items={casasAcolhimentoItems}
                        />

                        <CyberDropdown
                            title="Cartilhas e Manuais"
                            items={cartilhasManuaisItems}
                        />
                    </div>
                </CyberContainer>
            </CyberContainer>
        </CyberContainer>
    )
}