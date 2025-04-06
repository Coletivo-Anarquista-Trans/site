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
  FaCalendarAlt,
  FaCalendar,
} from "react-icons/fa";
import { useAudio } from "@/context/AudioContext";
import { Tooltip } from "@/components/atoms/Tooltip";
import Link from "next/link";
import { posts } from "@/assets/blogPosts/post";

type SortOption =
  | "padrao"
  | "titulo-asc"
  | "titulo-desc"
  | "data-asc"
  | "data-desc"
  | "aleatorio";

const BlogListingPage = () => {
  const [viewMode, setViewMode] = useState<"bloco" | "lista" | "compacto">(
    "bloco"
  );
  const [sortOption, setSortOption] = useState<SortOption>("padrao");
  const { playButtonSelect } = useAudio();

  const sortedPosts = [...posts].sort((a, b) => {
    switch (sortOption) {
      case "titulo-asc":
        return a.title.localeCompare(b.title, "pt-BR");
      case "titulo-desc":
        return b.title.localeCompare(a.title, "pt-BR");
      case "data-asc":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "data-desc":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "aleatorio":
        return Math.random() - 0.5;
      default:
        return 0;
    }
  });

  const gridClasses = {
    bloco:
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl",
    lista: "grid grid-cols-1 gap-4 w-full max-w-4xl",
    compacto:
      "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-6xl",
  }[viewMode];

  const getSortIcon = () => {
    switch (sortOption) {
      case "titulo-asc":
        return <FaSortAlphaDown />;
      case "titulo-desc":
        return <FaSortAlphaUp />;
      case "data-asc":
        return <FaCalendarAlt />;
      case "data-desc":
        return <FaCalendar />;
      case "aleatorio":
        return <FaRandom />;
      default:
        return <FaSortAmountDown />;
    }
  };

  return (
    <CyberContainer className="bg-background min-h-screen mb-8 text-foreground flex flex-col items-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4 text-center"
      >
        Blog
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-xl md:text-2xl mb-8 text-center"
      >
        Registros e provocações do coletivo
      </motion.h2>

      {/* Controles */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8 w-full max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Seletor de visualização */}
        <div className="flex gap-2 bg-foreground/10 p-2 rounded-md">
          <Tooltip content="Visualização em blocos" position="top">
            <button
              onClick={() => {
                playButtonSelect();
                setViewMode("bloco");
              }}
              onMouseEnter={() => playButtonSelect()}
              className={`p-2 rounded ${
                viewMode === "bloco"
                  ? "bg-accent1 text-background"
                  : "hover:bg-foreground/20"
              }`}
              aria-label="Visualização em blocos"
            >
              <FaTh />
            </button>
          </Tooltip>
          <Tooltip content="Visualização em lista" position="top">
            <button
              onClick={() => {
                playButtonSelect();
                setViewMode("lista");
              }}
              onMouseEnter={() => playButtonSelect()}
              className={`p-2 rounded ${
                viewMode === "lista"
                  ? "bg-accent1 text-background"
                  : "hover:bg-foreground/20"
              }`}
              aria-label="Visualização em lista"
            >
              <FaList />
            </button>
          </Tooltip>
          <Tooltip content="Visualização compacta" position="top">
            <button
              onClick={() => {
                playButtonSelect();
                setViewMode("compacto");
              }}
              onMouseEnter={() => playButtonSelect()}
              className={`p-2 rounded ${
                viewMode === "compacto"
                  ? "bg-accent1 text-background"
                  : "hover:bg-foreground/20"
              }`}
              aria-label="Visualização compacta"
            >
              <FaCompress />
            </button>
          </Tooltip>
        </div>

        {/* Opções de ordenação */}
        <div className="flex gap-2 bg-foreground/10 p-2 rounded-md">
          <Tooltip content="Ordenação padrão" position="top">
            <button
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
              {getSortIcon()}
            </button>
          </Tooltip>
          <Tooltip content="Ordenar por título (A-Z)" position="top">
            <button
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
              aria-label="Ordenar por título (A-Z)"
            >
              <FaSortAlphaDown />
            </button>
          </Tooltip>
          <Tooltip content="Ordenar por título (Z-A)" position="top">
            <button
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
              aria-label="Ordenar por título (Z-A)"
            >
              <FaSortAlphaUp />
            </button>
          </Tooltip>
          <Tooltip
            content="Ordenar por data (mais antigas primeiro)"
            position="top"
          >
            <button
              onClick={() => {
                playButtonSelect();
                setSortOption("data-asc");
              }}
              onMouseEnter={() => playButtonSelect()}
              className={`p-2 rounded ${
                sortOption === "data-asc"
                  ? "bg-accent1 text-background"
                  : "hover:bg-foreground/20"
              }`}
              aria-label="Ordenar por data (mais antigas primeiro)"
            >
              <FaCalendarAlt />
            </button>
          </Tooltip>
          <Tooltip
            content="Ordenar por data (mais recentes primeiro)"
            position="top"
          >
            <button
              onClick={() => {
                playButtonSelect();
                setSortOption("data-desc");
              }}
              onMouseEnter={() => playButtonSelect()}
              className={`p-2 rounded ${
                sortOption === "data-desc"
                  ? "bg-accent1 text-background"
                  : "hover:bg-foreground/20"
              }`}
              aria-label="Ordenar por data (mais recentes primeiro)"
            >
              <FaCalendar />
            </button>
          </Tooltip>
          <Tooltip content="Ordenação aleatória" position="top">
            <button
              onClick={() => {
                playButtonSelect();
                setSortOption("aleatorio");
              }}
              onMouseEnter={() => playButtonSelect()}
              className={`p-2 rounded ${
                sortOption === "aleatorio"
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
        {sortedPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            passHref
            legacyBehavior
          >
            <a onClick={() => playButtonSelect()}>
              <CyberCard
                id={post.id}
                title={post.title}
                description={post.description}
                image={post.image}
                metadata={new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
                viewMode={
                  viewMode === "bloco"
                    ? "tile"
                    : viewMode === "lista"
                    ? "list"
                    : "compact"
                }
                onHover={playButtonSelect}
              />
            </a>
          </Link>
        ))}
      </motion.div>
    </CyberContainer>
  );
};

export default BlogListingPage;
