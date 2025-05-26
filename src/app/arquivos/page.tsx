"use client";

import React, { useState } from "react";
import CyberContainer from "@/components/atoms/CyberContainer";
import CyberCard from "@/components/molecules/CyberCard";
import { motion } from "framer-motion";
import {
  FaTh,
  FaList,
  FaCompress,
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSortAmountDown,
  FaRandom,
} from "react-icons/fa";
import { useAudio } from "@/context/AudioContext";
import { Tooltip } from "@/components/atoms/Tooltip";
import { getAssetPath } from "@/utils/assetPath";

const books = [
  {
    id: "livro-1",
    title: "Como Hackear: Um manual para derrubar o Cistema",
    author: "i.n.i.a.r.i",
    image: "/trans-archives/como_hackear.jpg",
    url: "https://docs.google.com/document/d/1sBgqRi2aoBhSZ7qPE6PLyyEEyeac1ExmrprAc5O4OUQ/edit?tab=t.0#heading=h.40cqyoe39nq",
  },
  {
    id: "livro-2",
    title: "Diário de uma ciborgue",
    author: "i.n.i.a.r.i",
    description: "O corpo virtual e material como espaço político numa visão ciberfeminista",
    image: "/trans-archives/diario_de_uma_ciborgue.jpg",
    url: "https://docs.google.com/document/d/1njyeH000ht7PCrGDaPXsVp53zJfAlRQgWipZJXpv5Pw/edit?tab=t.0#heading=h.sa0lg6ud6qbk",
  },
  {
    id: "livro-3",
    title: "Um manifesto hacker",
    author: "Mckenzie Wark",
    image: "/trans-archives/um_manifesto_hacker.jpg",
    url: getAssetPath("/trans-resources/um_manifesto_hacker-mckenzie_wark.pdf"),
  },
  {
    id: "livro-4",
    title: "Um apartamento em Urano",
    author: "Paul B. Preciado",
    image: "/trans-archives/apartamento_em_urano.jpg",
    url: getAssetPath("/trans-resources/um_apartamento_em_urano-paul_b_preciado.pdf"),
  },
  {
    id: "livro-5",
    title: "Manifesto Contrassexual",
    author: "Paul B. Preciado",
    image: "/trans-archives/manifesto_contrassexual.jpg",
    url: getAssetPath("/trans-resources/manifesto_contrassexual-paul_b_preciado.pdf"),
  },
  {
    id: "livro-6",
    title: "Be gay, do crime!",
    author: "Mary Nardini Gang",
    image: "/trans-archives/be_gay_do_crime.png",
    url: getAssetPath("/trans-resources/be_gay_do_crime-mary_nardini_gang.pdf"),
  },
  {
    id: "livro-7",
    title: "Transgeneridade, Decolonialidade e Anarquismo",
    author: "Bruno Latini Pfeil & Cello Latini Pfeil",
    image: "/trans-archives/transgeneridade_decolonialidade_e_anarquismo.png",
    url: getAssetPath("/trans-resources/transgeneridade_decolonialidade_e_anarquismo-bruno_latini_pfeil-cello_latini_pfeil.pdf"),
  },
];

type SortOption = "padrao" | "titulo-asc" | "titulo-desc" | "random";

const Page = () => {
  const [viewMode, setViewMode] = useState<"tile" | "list" | "compact">("tile");
  const [sortOption, setSortOption] = useState<SortOption>("padrao");
  const { playButtonSelect } = useAudio();

  const sortedBooks = [...books].sort((a, b) => {
    switch (sortOption) {
      case "titulo-asc":
        return a.title.localeCompare(b.title, "pt-BR");
      case "titulo-desc":
        return b.title.localeCompare(a.title, "pt-BR");
      case "random":
        return Math.random() - 0.5;
      default:
        return 0;
    }
  });

  const gridClasses = {
    tile: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl",
    list: "grid grid-cols-1 gap-4 w-full max-w-4xl",
    compact:
      "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-6xl",
  }[viewMode];

  return (
    <CyberContainer className="bg-background min-h-screen mb-8 text-foreground flex flex-col items-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-center"
      >
        Arquivos
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-xl md:text-2xl mb-8 text-center"
      >
        Clique para ler os livros e textos
      </motion.h2>

      {/* Controls */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* View mode selector */}
        <div className="flex gap-2 bg-foreground/10 p-2 rounded-md">
          <Tooltip
            content="Visualização em blocos"
            position="top"
            className="mx-1"
          >
            <button
              onClick={() => {
                playButtonSelect();
                setViewMode("tile");
              }}
              onMouseEnter={() => playButtonSelect()}
              className={`p-2 rounded ${viewMode === "tile"
                  ? "bg-accent1 text-background"
                  : "hover:bg-foreground/20"
                }`}
              aria-label="Visualização em blocos"
            >
              <FaTh />
            </button>
          </Tooltip>
          <Tooltip
            content="Visualização em lista"
            position="top"
            className="mx-1"
          >
            <button
              onClick={() => {
                playButtonSelect();
                setViewMode("list");
              }}
              onMouseEnter={() => playButtonSelect()}
              className={`p-2 rounded ${viewMode === "list"
                  ? "bg-accent1 text-background"
                  : "hover:bg-foreground/20"
                }`}
              aria-label="Visualização em lista"
            >
              <FaList />
            </button>
          </Tooltip>
          <Tooltip
            content="Visualização compacta"
            position="top"
            className="mx-1"
          >
            <button
              onClick={() => {
                playButtonSelect();
                setViewMode("compact");
              }}
              onMouseEnter={() => playButtonSelect()}
              className={`p-2 rounded ${viewMode === "compact"
                  ? "bg-accent1 text-background"
                  : "hover:bg-foreground/20"
                }`}
              aria-label="Visualização compacta"
            >
              <FaCompress />
            </button>
          </Tooltip>
        </div>

        {/* Sort options */}
        <div className="flex gap-2 bg-foreground/10 p-2 rounded-md">
          <Tooltip content="Ordenação padrão" position="top" className="mx-1">
            <button
              onClick={() => {
                playButtonSelect();
                setSortOption("padrao");
              }}
              onMouseEnter={() => playButtonSelect()}
              className={`p-2 rounded ${sortOption === "padrao"
                  ? "bg-accent1 text-background"
                  : "hover:bg-foreground/20"
                }`}
              aria-label="Ordenação padrão"
            >
              <FaSortAmountDown />
            </button>
          </Tooltip>
          <Tooltip content="Ordenar A-Z" position="top" className="mx-1">
            <button
              onClick={() => {
                playButtonSelect();
                setSortOption("titulo-asc");
              }}
              onMouseEnter={() => playButtonSelect()}
              className={`p-2 rounded ${sortOption === "titulo-asc"
                  ? "bg-accent1 text-background"
                  : "hover:bg-foreground/20"
                }`}
              aria-label="Ordenar A-Z"
            >
              <FaSortAlphaDown />
            </button>
          </Tooltip>
          <Tooltip content="Ordenar Z-A" position="top" className="mx-1">
            <button
              onClick={() => {
                playButtonSelect();
                setSortOption("titulo-desc");
              }}
              onMouseEnter={() => playButtonSelect()}
              className={`p-2 rounded ${sortOption === "titulo-desc"
                  ? "bg-accent1 text-background"
                  : "hover:bg-foreground/20"
                }`}
              aria-label="Ordenar Z-A"
            >
              <FaSortAlphaUp />
            </button>
          </Tooltip>
          <Tooltip
            content="Ordenação aleatória"
            position="top"
            className="mx-1"
          >
            <button
              onClick={() => {
                playButtonSelect();
                setSortOption("random");
              }}
              onMouseEnter={() => playButtonSelect()}
              className={`p-2 rounded ${sortOption === "random"
                  ? "bg-accent1 text-background"
                  : "hover:bg-foreground/20"
                }`}
              aria-label="Ordenação aleatória"
            >
              <FaRandom />
            </button>
          </Tooltip>
        </div>
      </motion.div>

      <motion.div
        className={gridClasses}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {sortedBooks.map((book) => (
          <CyberCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            image={book.image}
            url={book.url}
            viewMode={viewMode}
            onHover={playButtonSelect}
          />
        ))}
      </motion.div>
    </CyberContainer>
  );
};

export default Page;
