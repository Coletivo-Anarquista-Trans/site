"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import Link from "next/link";

export default function QuemSomosNos() {
  return (
    <>
      <CyberContainer
        className={
          "bg-background min-h-screen text-foreground flex flex-col items-center justify-center p-4"
        }
      >
        <CyberContainer className="flex flex-col gap-4 w-full max-w-4xl">
          {/* Main content container */}
          <div className="w-full p-4 md:p-8">
            <CyberContainer
              
              className="text-center text-3xl md:text-4xl p-4 my-8 md:my-14 border border-accent1"
            >
              <b>Quem Somos</b>
            </CyberContainer>
            <CyberContainer
              className={
                "text-center text-sm md:text-base p-2 md:p-4 my-4 w-full"
              }
            >
              <p>
                Somos um coletivo buscando garantir a liberdade e{" "}
                <b>autonomia dos corpos e mentes marginalizades</b>.
              </p>
              <br />
              <p>
                Todas as pessoas devem{" "}
                <b>dominar a produção do próprio corpo</b>, sem as restrições
                impostas pelo cistema.
              </p>
              <br />
              <p>
                Acreditamos na construção de comunidades autônomas e
                colaborativas, proporcionando{" "}
                <b>experiências sociais fora do cistema</b>.
              </p>
              <br />
              <p>
                Acesso a tecnologias de afirmação corporal, saúde, moradia e
                alimentação para todos, especialmente para aqueles que são mais
                marginalizados pela sociedade é nosso objetivo.
              </p>
              <br />
              <p>
                Retome as tecnologias roubadas de nós, não deixe-os ter nossos
                amores e corpos.
              </p>
              <br />
              <p>
                Se quer saber como faremos isso,{" "}
                <Link href="/manifesto#section-2" target="_blank" >
                  <u>clique aqui.</u>
                </Link>
              </p>
            </CyberContainer>
          </div>

          {/* Integrantes container */}
          <div className="w-full p-2 md:p-4">
            <CyberContainer
              unevenBorders
              className="text-center text-3xl md:text-4xl p-2 my-4 w-full"
            >
              <b>Integrantes</b>
            </CyberContainer>
          </div>

          {/* Members grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-2 md:p-4 w-full">
            {/* Mazrine container */}
            <CyberContainer
              unevenBorders
              className="text-center text-xl md:text-2xl p-2 h-12 md:h-16 flex items-center justify-center"
            >
              <b>Mazrine</b>
            </CyberContainer>
            {/* Lynx container */}
            <CyberContainer
              unevenBorders
              className="text-center text-xl md:text-2xl p-2 h-12 md:h-16 flex items-center justify-center"
            >
              <b>Lynx</b>
            </CyberContainer>
            {/* Ini container */}
            <CyberContainer
              unevenBorders
              className="text-center text-xl md:text-2xl p-2 h-12 md:h-16 flex items-center justify-center"
            >
              <b>iniari</b>
            </CyberContainer>
            {/* V container */}
            <CyberContainer
              unevenBorders
              className="text-center text-xl md:text-2xl p-2 h-12 md:h-16 flex items-center justify-center"
            >
              <b>V</b>
            </CyberContainer>
            {/* n3o container */}
            <CyberContainer
              unevenBorders
              className="text-center text-xl md:text-2xl p-2 h-12 md:h-16 flex items-center justify-center"
            >
              <b>n3o</b>
            </CyberContainer>
            {/* Yu container */}
            <CyberContainer
              unevenBorders
              className="text-center text-xl md:text-2xl p-2 h-12 md:h-16 flex items-center justify-center"
            >
              <b>Yu</b>
            </CyberContainer>
            {/* Fefe container */}
            <CyberContainer
              unevenBorders
              className="text-center text-xl md:text-2xl p-2 h-12 md:h-16 flex items-center justify-center"
            >
              <b>Fefe</b>
            </CyberContainer>
            {/* Kia container */}
            <CyberContainer
              unevenBorders
              className="text-center text-xl md:text-2xl p-2 h-12 md:h-16 flex items-center justify-center"
            >
              <b>Kia</b>
            </CyberContainer>
          </div>
        </CyberContainer>
      </CyberContainer>
    </>
  );
}
