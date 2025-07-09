// app/recursos/page.tsx
"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import { FaFolder } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface DirectoryItem {
    id: string;
    name: string;
    path: string;
    description: string;
}

export default function Resources() {
    const router = useRouter();

    const directories: DirectoryItem[] = [
        {
            id: "cyberhormônios",
            name: "cyberhormônios",
            path: "/recursos/cyberhormonios",
            description: "Recursos úteis de customização de personagem e informações gerais"
        },
        {
            id: "para-as-ruas",
            name: "para-as-ruas",
            path: "/recursos/para-as-ruas",
            description: "Recursos para ativismo e vida nas ruas"
        }
    ];

    const handleDirectoryClick = (path: string) => {
        router.push(path);
    };

    return (
        <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
            <CyberContainer className="w-full max-w-4xl border border-accent1 p-1 crt-screen crt-curvature crt-reflection granular-effect">
                <CyberContainer className="border border-accent1 p-6">
                    <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
                        Recursos
                    </CyberContainer>

                    <CyberContainer className="text-accent1 text-center mb-8">
                        Recursos úteis de customização de personagem e informações gerais.
                        <br />
                        <span className="text-accent5">
                            Tem algum recurso? Mande pra gente em: cats-trans@riseup.net
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
                            <span>drwxr-xr-x 2 cats-coletivo-anarquista-trans 4096 {new Date().toLocaleDateString('pt-BR')}.</span>
                        </div>
                    </CyberContainer>
                </CyberContainer>
            </CyberContainer>
        </CyberContainer>
    );
}
