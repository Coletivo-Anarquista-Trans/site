// components/CyberPortrait.tsx
import { useState, ReactNode, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "@/context/AudioContext";

interface CyberPortraitProps {
  id: string;
  text: string;
  imageSrc?: string;
  altText?: string;
  nested?: ReactNode;
  onClose?: () => void; // New prop for closing modals
}

interface FloatingIcon {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  speed: number;
  angle: number;
}

export default function CyberPortrait({
  id,
  text,
  imageSrc,
  altText,
  nested,
  onClose,
}: CyberPortraitProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isComponentVisible, setIsComponentVisible] = useState(true);
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);
  const { playArpeggio } = useAudio();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClose = () => {
    toggleVisibility();
    if (onClose) {
      onClose(); // Call the onClose callback to close any open modal
    }
  };

  const handleFirstIconClick = (e: React.MouseEvent) => {
    playArpeggio();

    const clickX = e.clientX;
    const clickY = e.clientY;

    const newIcons = Array.from({ length: 50 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 100;
      const scale = 0.5 + Math.random();

      return {
        id: Date.now() + i,
        x: clickX,
        y: clickY,
        opacity: 1,
        scale,
        speed,
        angle,
      };
    });

    setFloatingIcons(newIcons);

    const startTime = Date.now();
    const duration = 5000;

    const animateIcons = () => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / duration;

      if (progress < 1) {
        setFloatingIcons((prevIcons) =>
          prevIcons.map((icon) => {
            const distance = progress * 200;
            const x = icon.x + Math.cos(icon.angle) * distance;
            const y = icon.y + Math.sin(icon.angle) * distance;
            const opacity = 1 - progress * progress;

            return {
              ...icon,
              x,
              y,
              opacity,
              scale: icon.scale * (0.8 + 0.2 * (1 - progress)),
            };
          })
        );
        requestAnimationFrame(animateIcons);
      } else {
        setFloatingIcons([]);
      }
    };

    requestAnimationFrame(animateIcons);
  };

  const handleSecondIconClick = () => {
    window.open("https://github.com/Coletivo-Anarquista-Trans/site", "_blank");
  };

  return (
    <>
      {/* Floating icons */}
      <AnimatePresence>
        {floatingIcons.map((icon) => (
          <motion.div
            key={icon.id}
            initial={{
              x: icon.x,
              y: icon.y,
              opacity: 1,
              scale: icon.scale,
            }}
            animate={{
              x: icon.x,
              y: icon.y,
              opacity: icon.opacity,
              scale: icon.scale,
            }}
            transition={{ duration: 0.1 }}
            className="fixed pointer-events-none"
            style={{
              left: 0,
              top: 0,
              transform: `translate(${icon.x}px, ${icon.y}px) scale(${icon.scale})`,
              zIndex: 1000,
              transformOrigin: "center",
              opacity: icon.opacity,
            }}
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={14}
              height={14}
              className="text-accent1"
            >
              <path
                d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"
                fill="currentColor"
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main component */}
      <AnimatePresence mode="wait">
        {isComponentVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 1, x: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            key={`portrait-${id}`}
            className="flex flex-col bg-background p-1 gap-1 shadow-xl shadow-gray/50 rounded-sm border border-accent1"
          >
            {/* Header */}
            <div className="bg-background-secondary w-full p-1 rounded-sm flex flex-row gap-2 align-center items-center justify-between border border-accent1">
              <div className="flex flex-row gap-2 align-center items-center justify-between">
                <div className="w-4 h-4 rounded-sm bg-accent1"></div>
                <span className="text-foreground">{text}</span>
              </div>
              <div className="flex flex-row gap-2 align-center items-center justify-between">
                <div
                  className="text-foreground hover:text-accent1 hover:border-accent1 transition-colors cursor-pointer border border-accent1 rounded-sm p-[2px]"
                  onClick={handleFirstIconClick}
                >
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={14}
                    height={14}
                  >
                    <path
                      d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div
                  className="text-foreground hover:text-accent1 hover:border-accent1 transition-colors cursor-pointer border border-accent1 rounded-sm p-[2px]"
                  onClick={handleSecondIconClick}
                >
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={14}
                    height={14}
                  >
                    <path
                      d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div
                  className="text-foreground hover:text-accent1 hover:border-accent1 transition-colors cursor-pointer border border-accent1 rounded-sm"
                  onClick={handleClose}
                >
                  <svg
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={18}
                    height={18}
                  >
                    <path
                      d="M5 5h2v2H5V5zm4 4H7V7h2v2zm2 2H9V9h2v2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2zm2-2v2h-2V9h2zm2-2v2h-2V7h2zm0 0V5h2v2h-2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className="px-1 pt-1 pb-0.5"
              onClick={!isVisible ? toggleVisibility : undefined}
            >
              <AnimatePresence mode="wait">
                {isVisible ? (
                  imageSrc ? (
                    <Image
                      className="rounded-sm border border-accent1"
                      src={imageSrc}
                      alt={altText || "Portrait"}
                      width={300}
                      height={76}
                      priority
                    />
                  ) : (
                    nested
                  )
                ) : (
                  <motion.div
                    key={`close-state-${id}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center h-[76px] cursor-pointer"
                  >
                    ( ✖ ︿ ✖ )
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="flex flex-row gap-2 align-center items-center justify-start pb-0.5">
              <div className="w-8 h-2 rounded-sm bg-background-secondary border border-accent1" />
              <div className="w-2 h-2 rounded-sm bg-background-secondary border border-accent1" />
              <div className="w-2 h-2 rounded-sm bg-background-secondary border border-accent1" />
              <div className="w-2 h-2 rounded-sm bg-background-secondary border border-accent1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
