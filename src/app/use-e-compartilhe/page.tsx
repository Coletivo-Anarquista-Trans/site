// app/use-e-compartilhe/page.tsx
"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import { useRouter } from "next/navigation";
import { FaFolder } from "react-icons/fa";

interface DirectoryItem {
    id: string;
    name: string;
    path: string;
    description: string;
}

export default function UseECompartilhe() {
    const router = useRouter();

    const directories: DirectoryItem[] = [
        {
            id: "recursos",
            name: "recursos",
            path: "/use-e-compartilhe/recursos",
            description: "Recursos úteis de customização de personagem, autodefesa e informações gerais"
        },
        {
            id: "banco-de-imagens",
            name: "banco-de-imagens",
            path: "/use-e-compartilhe/banco-de-imagens",
            description: "Banco de imagens para uso livre em projetos pessoais e coletivos"
        },
    ];

    const handleDirectoryClick = (path: string) => {
        router.push(path);
    };

    return (
        <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
            <CyberContainer className="w-full max-w-4xl border border-accent1 p-1 crt-screen crt-curvature crt-reflection granular-effect">
                <CyberContainer className="border border-accent1 p-6">
                    <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
                        Use e Compartilhe!
                    </CyberContainer>

                    <CyberContainer className="text-accent1 text-center mb-8">
                        ...
                        <br />
                        <span className="text-accent5">
                            Mande pra gente em: cats-trans@riseup.net
                        </span>
                    </CyberContainer>

                    <CyberContainer className="border border-accent1 p-4 bg-background">
                        <div className="text-accent1 mb-4 font-mono text-sm">
                            <span className="text-accent5">total {directories.length}</span>
                        </div>

                        <div className="space-y-2">
                            {directories.map((dir) => (
                                <div
                                    key={dir.id}
                                    className="flex items-center p-3 hover:bg-accent1 hover:text-background cursor-pointer border border-transparent hover:border-accent1 transition-all duration-200"
                                    onClick={() => handleDirectoryClick(dir.path)}
                                >
                                    <FaFolder
                                        size={24}
                                        className="text-accent5 mr-4 flex-shrink-0"
                                    />
                                    <div className="flex-1">
                                        <div className="font-mono text-accent5 group-hover:text-background mb-1">
                                            {dir.name}/
                                        </div>
                                        <div className="text-sm text-accent3 group-hover:text-background">
                                            {dir.description}
                                        </div>
                                    </div>
                                    <div className="text-accent3 text-sm font-mono ml-4">
                                        &gt;
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-accent1 text-accent3 text-xs font-mono">
                            <span>drwxr-xr-x {directories.length} cats-coletivo-anarquista-trans 1312 {new Date().toLocaleDateString('pt-BR')}.</span>
                        </div>
                    </CyberContainer>
                </CyberContainer>
            </CyberContainer>
        </CyberContainer>
    )
}