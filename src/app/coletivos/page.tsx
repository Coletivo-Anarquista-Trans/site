//app/coletivos/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useCyberSection } from "@/context/CyberSectionsContext/CyberSections";
import CyberContainer from "@/components/atoms/CyberContainer";
import CyberButton from "@/components/atoms/CyberButton";
import Link from "next/link";

const coletivosData = [
  {
    id: '6',
    title: 'Acervo trans-anarquista',
    type: 'link' as const,
    url: 'https://transanarquismo.noblogs.org/acervo/',
    description: 'Acervo com textos, livros e artigos sobre dissidência de gênero, perspectivas trans-anarquistas sobre o regime de gênero e como resistir e abolí-lo pela libertação do corpo',
    category: 'Livros e Artigos',
    status: 'ONLINE',
    location: 'DIGITAL'
  },
  {
    id: '7',
    title: 'Coletivo Transcentrado',
    type: 'link' as const,
    url: 'https://coletivotranscentrado.com.br/',
    description: 'Site do Coletivo Transcentrado, possui informações sobre processo de transição, e um discord amigável para pessoas trans e com deficiência',
    category: 'Coletivos',
    status: 'ONLINE',
    location: 'BRASIL'
  },
  {
    id: '8',
    title: 'Villain Era',
    type: 'link' as const,
    url: "https://villain-era.carrd.co/#guerra",
    description: 'Coletivo de artistas trans de Juiz de Fora (Minas Gerais), que tem o objetivo de expor, enaltecer, e compartilhar a arte e a poética de seus alunes Trans...e dominar o mundo. Todes criadores e suas diversidades de gênero são bem vindes.',
    category: 'Coletivos',
    status: 'ONLINE',
    location: 'JUIZ DE FORA - MG'
  },
  {
    id: '9',
    title: 'Revolta Anarkokuir',
    type: 'link' as const,
    url: 'https://anarkokuir.hotglue.me/',
    description: 'Coletivo anarquista queer.',
    category: 'Coletivos',
    status: 'ONLINE',
    location: 'DIGITAL'
  },
  {
    id: '10',
    title: 'Revista Estudos Transviades',
    type: 'link' as const,
    url: 'https://www.revistaestudostransviades.com/',
    description: 'A Revista Estudos Transviades propõe um espaço de trocas e produção de conhecimento, livre de demandas academicistas como iniciativa para criar um espaço de acolhimento e divulgação de produções de pessoas transmasculinas.',
    category: 'Coletivos',
    status: 'ONLINE',
    location: 'DIGITAL'
  }
];
const CyberCollectiveCard = ({ collective, index }: { collective: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className="mb-4"
    >
      <CyberContainer
        className="border border-accent1 p-1 w-full crt-screen crt-curvature crt-scanlines crt-reflection granular-effect"
        glowingBorders
      >
        <CyberContainer className="border border-accent1 p-4 bg-background">
          <div className="flex items-center justify-between mb-3">
            <span className="text-accent5 text-sm font-mono">
              [{String(index + 1).padStart(2, '0')}]
            </span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${collective.status === 'ONLINE' ? 'bg-green-400 animate-pulse' : 'bg-red-400'
                  }`} />
                <span className="text-xs text-accent3 font-mono">{collective.status}</span>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-accent1 mb-2 font-mono">
            &gt; {collective.title}
          </h3>

          <p className="text-accent2 text-sm mb-4 leading-relaxed">
            {collective.description}
          </p>

          <CyberContainer className="mt-3">
            <CyberContainer
              className="inline-block border border-accent1 crt-screen crt-curvature crt-reflection granular-effect p-1"
            >
              <CyberContainer
                className="inline-block align-top border border-accent1 crt-screen crt-curvature crt-reflection granular-effect"
              >
                <Link href={collective.url} target="_blank" rel="noopener noreferrer">
                  <CyberButton
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-accent-1 transition-colors"
                  >
                    <span className="ml-1 text-accent1 font-mono">CONECTAR &gt;_</span>
                  </CyberButton>
                </Link>
              </CyberContainer>
            </CyberContainer>
          </CyberContainer>
        </CyberContainer>
      </CyberContainer>
    </motion.div>
  );
};

export default function Coletivos() {
  const { registerCyberSection } = useCyberSection();

  useEffect(() => {
    coletivosData.forEach((collective) => {
      registerCyberSection("coletivos", `coletivo-${collective.id}`, collective.title);
    });
  }, [registerCyberSection]);

  return (
    <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
      <CyberContainer className="w-full max-w-4xl">
        <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
          Coletivos
        </CyberContainer>

        <CyberContainer className="text-accent1 mb-6 text-center">
          Coletividades e redes trans para serem circuladas
          <br />
          <span className="text-accent5">
            Faz parte de um coletivo? Troque ideias com a gente: cats-trans@riseup.net
          </span>
        </CyberContainer>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6"
        >
          <CyberContainer className="border border-accent1 p-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-4">
                <span className="text-accent3">NETWORK STATUS:</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400">CONNECTED</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent3">NODES: {coletivosData.length}</span>
                <span className="text-accent3">PROTOCOL: QUEER-T4T</span>
              </div>
            </div>
          </CyberContainer>
        </motion.div>

        <div className="space-y-2">
          {coletivosData.map((collective, index) => (
            <CyberCollectiveCard
              key={collective.id}
              collective={collective}
              index={index}
            />
          ))}
        </div>
      </CyberContainer>
    </CyberContainer>
  );
}