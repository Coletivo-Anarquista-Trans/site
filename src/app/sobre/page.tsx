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
                <b>autonomia de corpos-mentes marginalizades</b>.
              </p>
              <br />
              <p>
                Todas as pessoas devem{" "}
                <b>dominar a produção do próprio corpo</b>, sem restrições
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
                Desejamos acesso a tecnologias de afirmação corporal, saúde, moradia e
                alimentação para todos, especialmente para aqueles produzindo 
                existências dissidentes e são marginalizados pela sociedade.
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

        </CyberContainer>
      </CyberContainer>
    </>
  );
}
