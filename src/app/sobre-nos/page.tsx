"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import CyberSidebar from "../../components/organism/CyberSidebar";

export default function QuemSomosNos() {
    return (
        <>
            <CyberContainer
                className={"bg-background min-h-screen text-foreground flex flex-col items-center justify-items-center"}
            >
                <CyberSidebar glowingBorders normalBorders />
                <CyberContainer className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                    <div className="inline-block justify-normal whitespace-normal p-8 break-words w-auto h-auto min-w-[48rem] max-w-md">
                        <CyberContainer unevenBorders glowingBorders className="text-center text-4xl p-4 m-14 w-auto h-auto">
                            Quem Somos
                        </CyberContainer>
                        <CyberContainer className={"text-center text-base p-2 m-4 w-auto h-auto"}>
                            {/* Add your content here */}
                            <p>
                                Somos um coletivo dedicado a promover a liberdade e a autonomia dos corpos e mentes marginalizados. Nossa missão é construir um mundo onde todas as pessoas possam viver plenamente suas identidades e expressões, sem as restrições impostas pelo sistema capitalista e patriarcal.
                            </p>
                            <br />
                            <p>
                                Acreditamos na descentralização do poder e na construção de comunidades autônomas e colaborativas. Trabalhamos para garantir o acesso a tecnologias de afirmação corporal, saúde, moradia e alimentação para todos, especialmente para aqueles que são mais marginalizados pela sociedade.
                            </p>
                            <br />
                            <p>
                                Nossa luta é pela justiça social, pela igualdade e pela liberdade. Junte-se a nós nessa jornada para transformar o mundo e construir um futuro melhor para todos.
                            </p>
                        </CyberContainer>
                    </div>
                </CyberContainer>
            </CyberContainer>
        </>
    );
}