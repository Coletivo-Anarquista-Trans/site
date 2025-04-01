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
import { Tooltip as ReactTooltip } from "react-tooltip";

const books = [
  {
    id: "livro-1",
    title: "Como Hackear: Um manual para derrubar o sistema",
    description: "i.n.i.a.r.i",
    image: "trans-archives/comoHackear.jpg",
    url: "https://docs.google.com/document/d/1sBgqRi2aoBhSZ7qPE6PLyyEEyeac1ExmrprAc5O4OUQ/edit?tab=t.0#heading=h.40cqyoe39nq",
  },
  {
    id: "livro-2",
    title: "Diário de uma ciborgue",
    description:
      "O corpo virtual e material como espaço político numa visão ciberfeminista",
    image: "trans-archives/DiarioDeUmaCiborgue.jpg",
    url: "https://docs.google.com/document/d/1njyeH000ht7PCrGDaPXsVp53zJfAlRQgWipZJXpv5Pw/edit?tab=t.0#heading=h.sa0lg6ud6qbk",
  },
  {
    id: "livro-3",
    title: "Um manifesto hacker",
    description: "Mckenzie Wark",
    image: "trans-archives/umManifestohacker.jpg",
    url: "https://baixacultura.org/wp-content/uploads/2024/02/ummanifesto_miolo.pdf",
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
        Clique para acessar os livros
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
          <button
            data-tooltip-id="view-tile"
            data-tooltip-content="Visualização em blocos"
            onClick={() => {
              playButtonSelect();
              setViewMode("tile");
            }}
            onMouseEnter={() => playButtonSelect()}
            className={`p-2 rounded ${
              viewMode === "tile"
                ? "bg-accent1 text-background"
                : "hover:bg-foreground/20"
            }`}
            aria-label="Visualização em blocos"
          >
            <FaTh />
          </button>
          <button
            data-tooltip-id="view-list"
            data-tooltip-content="Visualização em lista"
            onClick={() => {
              playButtonSelect();
              setViewMode("list");
            }}
            onMouseEnter={() => playButtonSelect()}
            className={`p-2 rounded ${
              viewMode === "list"
                ? "bg-accent1 text-background"
                : "hover:bg-foreground/20"
            }`}
            aria-label="Visualização em lista"
          >
            <FaList />
          </button>
          <button
            data-tooltip-id="view-compact"
            data-tooltip-content="Visualização compacta"
            onClick={() => {
              playButtonSelect();
              setViewMode("compact");
            }}
            onMouseEnter={() => playButtonSelect()}
            className={`p-2 rounded ${
              viewMode === "compact"
                ? "bg-accent1 text-background"
                : "hover:bg-foreground/20"
            }`}
            aria-label="Visualização compacta"
          >
            <FaCompress />
          </button>
        </div>

        {/* Sort options */}
        <div className="flex gap-2 bg-foreground/10 p-2 rounded-md">
          <button
            data-tooltip-id="sort-default"
            data-tooltip-content="Ordenação padrão"
            onClick={() => {
              playButtonSelect();
              setSortOption("padrao");
            }}
            onMouseEnter={() => playButtonSelect()}
            className={`p-2 rounded ${
              sortOption === "padrao"
                ? "bg-accent1 text-background"
                : "hover:bg-foreground/20"
            }`}
            aria-label="Ordenação padrão"
          >
            <FaSortAmountDown />
          </button>
          <button
            data-tooltip-id="sort-asc"
            data-tooltip-content="Ordenar A-Z"
            onClick={() => {
              playButtonSelect();
              setSortOption("titulo-asc");
            }}
            onMouseEnter={() => playButtonSelect()}
            className={`p-2 rounded ${
              sortOption === "titulo-asc"
                ? "bg-accent1 text-background"
                : "hover:bg-foreground/20"
            }`}
            aria-label="Ordenar A-Z"
          >
            <FaSortAlphaDown />
          </button>
          <button
            data-tooltip-id="sort-desc"
            data-tooltip-content="Ordenar Z-A"
            onClick={() => {
              playButtonSelect();
              setSortOption("titulo-desc");
            }}
            onMouseEnter={() => playButtonSelect()}
            className={`p-2 rounded ${
              sortOption === "titulo-desc"
                ? "bg-accent1 text-background"
                : "hover:bg-foreground/20"
            }`}
            aria-label="Ordenar Z-A"
          >
            <FaSortAlphaUp />
          </button>
          <button
            data-tooltip-id="sort-random"
            data-tooltip-content="Ordenação aleatória"
            onClick={() => {
              playButtonSelect();
              setSortOption("random");
            }}
            onMouseEnter={() => playButtonSelect()}
            className={`p-2 rounded ${
              sortOption === "random"
                ? "bg-accent1 text-background"
                : "hover:bg-foreground/20"
            }`}
            aria-label="Ordenação aleatória"
          >
            <FaRandom />
          </button>
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
            description={book.description}
            image={book.image}
            url={book.url}
            viewMode={viewMode}
            onHover={playButtonSelect}
          />
        ))}
      </motion.div>

      {/* Tooltips */}
      <ReactTooltip id="view-tile" place="top" />
      <ReactTooltip id="view-list" place="top" />
      <ReactTooltip id="view-compact" place="top" />
      <ReactTooltip id="sort-default" place="top" />
      <ReactTooltip id="sort-asc" place="top" />
      <ReactTooltip id="sort-desc" place="top" />
      <ReactTooltip id="sort-random" place="top" />
    </CyberContainer>
  );
};

export default Page;
