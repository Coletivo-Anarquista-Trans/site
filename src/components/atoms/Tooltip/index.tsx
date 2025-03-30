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

  const positionClasses = {
    top: "bottom-full mb-2 left-1/2 transform -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 transform -translate-x-1/2",
    left: "right-full mr-2 top-1/2 transform -translate-y-1/2",
    right: "left-full ml-2 top-1/2 transform -translate-y-1/2",
  }[position];

  const arrowClasses = {
    top: "top-full -translate-x-1/2 left-1/2 -mt-1",
    bottom: "bottom-full -translate-x-1/2 left-1/2 -mb-1",
    left: "left-full -translate-y-1/2 top-1/2 -ml-1",
    right: "right-full -translate-y-1/2 top-1/2 -mr-1",
  }[position];

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`absolute ${positionClasses} z-50`}
            initial={{ opacity: 0, y: position === "top" ? -5 : 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: position === "top" ? -5 : 5 }}
            transition={{ duration: 0.15 }}
          >
            <div className="bg-foreground text-background text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-lg">
              {content}
              <div
                className={`absolute w-2 h-2 bg-foreground transform rotate-45 ${arrowClasses}`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
