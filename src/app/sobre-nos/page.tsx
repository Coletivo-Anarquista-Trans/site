"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import Link from "next/link";

export default function QuemSomosNos() {
    return (
        <>
            <CyberContainer
                className={"bg-background min-h-screen text-foreground flex flex-col items-center justify-items-center"}
            >
                <CyberContainer className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
                    <div className="inline-block justify-normal whitespace-normal p-8 break-words w-auto h-auto min-w-[48rem] max-w-md">
                        <CyberContainer unevenBorders glowingBorders className="text-center text-4xl p-4 m-14 w-auto h-auto">
                            <b>Quem Somos</b>
                        </CyberContainer>
                        <CyberContainer className={"text-center text-base p-2 m-4 w-auto h-auto"}>
                            {/* Add your content here */}
                            <p>
                                Somos um coletivo buscando garantir a liberdade e <b>autonomia dos corpos e mentes marginalizades</b>.
                            </p>
                            <br />
                            <p>
                                Todas as pessoas devem <b>dominar a produção do próprio corpo</b>, sem as restrições impostas pelo cistema.
                            </p>
                            <br />
                            <p>
                                Acreditamos na construção de comunidades autônomas e colaborativas, proporcionando <b>experiências sociais fora do cistema</b>.
                            </p>
                            <br />
                            <p>
                                Acesso a tecnologias de afirmação corporal, saúde, moradia e alimentação para todos, especialmente para aqueles que são mais marginalizados pela sociedade é nosso objetivo.
                            </p>
                            <br />
                            <p>
                                Retome as tecnologias roubadas de nós, não deixe-os ter nossos amores e corpos.
                            </p>
                            <br />
                            <p>
                                Se quer saber como faremos isso, <Link href="/manifesto#section-2" target="_blank" ><u>clique aqui.</u></Link>
                            </p>
                        </CyberContainer>
                    </div>
                    {/* Integrantes container */}
                    <div className="inline-block justify-normal whitespace-normal p-2 break-words w-auto h-auto min-w-[48rem] max-w-md">
                        <CyberContainer unevenBorders glowingBorders className="text-center text-4xl p-1 m-1 w-auto h-auto">
                            <b>Integrantes</b>
                        </CyberContainer>
                    </div>
                    {/* Side-by-side containers */}
                    <div className="flex flex-row flex-wrap justify-normal whitespace-normal gap-6 p-2 break-words w-auto h-auto min-w-[12rem] max-w-[48rem]">
                        {/* Mazrine container */}
                        <CyberContainer unevenBorders glowingBorders className="text-center text-4xl p-1 m-1 w-40 h-16">
                            <b>Mazrine</b>
                        </CyberContainer>
                        {/* Lynx container */}
                        <CyberContainer unevenBorders glowingBorders className="text-center text-4xl p-1 m-1 w-40 h-16">
                            <b>Lynx</b>
                        </CyberContainer>
                        {/* Ini container */}
                        <CyberContainer unevenBorders glowingBorders className="text-center text-4xl p-1 m-1 w-40 h-16">
                            <b>iniari</b>
                        </CyberContainer>
                        {/* V container */}
                        <CyberContainer unevenBorders glowingBorders className="text-center text-4xl p-1 m-1 w-40 h-16">
                            <b>V</b>
                        </CyberContainer>
                        {/* n3o container */}
                        <CyberContainer unevenBorders glowingBorders className="text-center text-4xl p-1 m-1 w-40 h-16">
                            <b>n3o</b>
                        </CyberContainer>
                        {/* Yu container */}
                        <CyberContainer unevenBorders glowingBorders className="text-center text-4xl p-1 m-1 w-40 h-16">
                            <b>Yu</b>
                        </CyberContainer>
                        {/* Naor container */}
                        <CyberContainer unevenBorders glowingBorders className="text-center text-4xl p-1 m-1 w-40 h-16">
                            <b>Naor</b>
                        </CyberContainer>
                        {/* Fefe container */}
                        <CyberContainer unevenBorders glowingBorders className="text-center text-4xl p-1 m-1 w-40 h-16">
                            <b>Fefe</b>
                        </CyberContainer>
                        {/* Kia container */}
                        <CyberContainer unevenBorders glowingBorders className="text-center text-4xl p-1 m-1 w-40 h-16">
                            <b>Kia</b>
                        </CyberContainer>

                    </div>
                </CyberContainer>
            </CyberContainer>
        </>
    );
}