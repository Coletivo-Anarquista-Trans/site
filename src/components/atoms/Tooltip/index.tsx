// components/atoms/Tooltip.tsx
"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export const Tooltip = ({
  content,
  children,
  position = "top",
  className = "",
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`relative inline-block w-fit ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && position === "top" && (
          <motion.div
            className="absolute bottom-full left-1/2 mb-2 z-50"
            style={{ transform: "translateX(-50%)" }}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
          >
            <div className="relative bg-accent1 text-background text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-lg">
              {content}
              {/* Triangle arrow on bottom-left */}
              <div
                className="absolute top-full left-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-accent1"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
