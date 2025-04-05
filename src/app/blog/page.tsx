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
import { Tooltip as ReactTooltip } from "react-tooltip";
import Link from "next/link";
import { posts } from "@/assets/blogPosts/post";

type SortOption =
  | "default"
  | "title-asc"
  | "title-desc"
  | "date-asc"
  | "date-desc"
  | "random";

const BlogListingPage = () => {
  const [viewMode, setViewMode] = useState<"tile" | "list" | "compact">("tile");
  const [sortOption, setSortOption] = useState<SortOption>("default");
  const { playButtonSelect } = useAudio();

  const sortedPosts = [...posts].sort((a, b) => {
    switch (sortOption) {
      case "title-asc":
        return a.title.localeCompare(b.title, "pt-BR");
      case "title-desc":
        return b.title.localeCompare(a.title, "pt-BR");
      case "date-asc":
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "date-desc":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
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

  const getSortIcon = () => {
    switch (sortOption) {
      case "title-asc":
        return <FaSortAlphaDown />;
      case "title-desc":
        return <FaSortAlphaUp />;
      case "date-asc":
        return <FaCalendarAlt />;
      case "date-desc":
        return <FaCalendar />;
      case "random":
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
            data-tooltip-content="Tile view"
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
            aria-label="Tile view"
          >
            <FaTh />
          </button>
          <button
            data-tooltip-id="view-list"
            data-tooltip-content="List view"
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
            aria-label="List view"
          >
            <FaList />
          </button>
          <button
            data-tooltip-id="view-compact"
            data-tooltip-content="Compact view"
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
            aria-label="Compact view"
          >
            <FaCompress />
          </button>
        </div>

        {/* Sort options */}
        <div className="flex gap-2 bg-foreground/10 p-2 rounded-md">
          <button
            data-tooltip-id="sort-default"
            data-tooltip-content="Default sorting"
            onClick={() => {
              playButtonSelect();
              setSortOption("default");
            }}
            onMouseEnter={() => playButtonSelect()}
            className={`p-2 rounded ${
              sortOption === "default"
                ? "bg-accent1 text-background"
                : "hover:bg-foreground/20"
            }`}
            aria-label="Default sorting"
          >
            {getSortIcon()}
          </button>
          <button
            data-tooltip-id="sort-title-asc"
            data-tooltip-content="Sort by title (A-Z)"
            onClick={() => {
              playButtonSelect();
              setSortOption("title-asc");
            }}
            onMouseEnter={() => playButtonSelect()}
            className={`p-2 rounded ${
              sortOption === "title-asc"
                ? "bg-accent1 text-background"
                : "hover:bg-foreground/20"
            }`}
            aria-label="Sort by title (A-Z)"
          >
            <FaSortAlphaDown />
          </button>
          <button
            data-tooltip-id="sort-title-desc"
            data-tooltip-content="Sort by title (Z-A)"
            onClick={() => {
              playButtonSelect();
              setSortOption("title-desc");
            }}
            onMouseEnter={() => playButtonSelect()}
            className={`p-2 rounded ${
              sortOption === "title-desc"
                ? "bg-accent1 text-background"
                : "hover:bg-foreground/20"
            }`}
            aria-label="Sort by title (Z-A)"
          >
            <FaSortAlphaUp />
          </button>
          <button
            data-tooltip-id="sort-date-asc"
            data-tooltip-content="Sort by date (oldest first)"
            onClick={() => {
              playButtonSelect();
              setSortOption("date-asc");
            }}
            onMouseEnter={() => playButtonSelect()}
            className={`p-2 rounded ${
              sortOption === "date-asc"
                ? "bg-accent1 text-background"
                : "hover:bg-foreground/20"
            }`}
            aria-label="Sort by date (oldest first)"
          >
            <FaCalendarAlt />
          </button>
          <button
            data-tooltip-id="sort-date-desc"
            data-tooltip-content="Sort by date (newest first)"
            onClick={() => {
              playButtonSelect();
              setSortOption("date-desc");
            }}
            onMouseEnter={() => playButtonSelect()}
            className={`p-2 rounded ${
              sortOption === "date-desc"
                ? "bg-accent1 text-background"
                : "hover:bg-foreground/20"
            }`}
            aria-label="Sort by date (newest first)"
          >
            <FaCalendar />
          </button>
          <button
            data-tooltip-id="sort-random"
            data-tooltip-content="Random order"
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
            aria-label="Random order"
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
                metadata={new Date(post.date).toLocaleDateString("pt-BR")}
                viewMode={viewMode}
                onHover={playButtonSelect}
              />
            </a>
          </Link>
        ))}
      </motion.div>

      {/* Tooltips */}
      <ReactTooltip id="view-tile" place="top" />
      <ReactTooltip id="view-list" place="top" />
      <ReactTooltip id="view-compact" place="top" />
      <ReactTooltip id="sort-default" place="top" />
      <ReactTooltip id="sort-title-asc" place="top" />
      <ReactTooltip id="sort-title-desc" place="top" />
      <ReactTooltip id="sort-date-asc" place="top" />
      <ReactTooltip id="sort-date-desc" place="top" />
      <ReactTooltip id="sort-random" place="top" />
    </CyberContainer>
  );
};

export default BlogListingPage;
