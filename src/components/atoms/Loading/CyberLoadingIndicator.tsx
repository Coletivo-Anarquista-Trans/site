"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/context/ThemeContext";
import CyberContainer from "@/components/atoms/CyberContainer";
import { motion } from "framer-motion";

const IconTint = dynamic(() => import("react-icon-tint"), {
  ssr: false,
  loading: () => (
    <motion.div
      className="w-32 h-32 bg-accent1"
      animate={{
        opacity: [0.2, 1, 0.2],
      }}
      transition={{
        duration: 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ),
});

export default function CyberLoadingIndicator() {
  const { theme } = useTheme();

  const themeColors: Record<string, string> = {
    "dark-violet": "#301055FF",
    "neon-aqua": "#00ffff",
    "cyberpunk-violet": "#a020f0",
    "cyberpunk-crimson": "#dc143c",
    "paleta-um": "#d92acd",
    "paleta-dois": "#fe3e8b",
    "paleta-tres": "#d6e122",
  };

  return (
    <CyberContainer>
      <motion.div
        className="flex flex-col items-center justify-center gap-4 p-4"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1],
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Icon with tint */}
        <div className="w-32 h-32 flex items-center justify-center">
          <IconTint
            maxHeight={128}
            maxWidth={128}
            color={themeColors[theme] || "#ffffff"}
            src="/cats.png"
          />
        </div>

        {/* Loading text */}
        <motion.div
          className="text-accent1 text-lg font-mono"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          NOW LOADING...
        </motion.div>

        <motion.div
          className="mt-2 text-accent3 text-xs font-mono"
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          INICIALIZANDO...
        </motion.div>
      </motion.div>
    </CyberContainer>
  );
}
