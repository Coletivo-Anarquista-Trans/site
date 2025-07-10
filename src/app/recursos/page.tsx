// app/recursos/page.tsx
"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import { FaFolder, FaFolderOpen } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAudio } from "@/context/AudioContext";

interface DirectoryItem {
  id: string;
  name: string;
  path: string;
}

export default function Resources() {
  const router = useRouter();
  const { playButtonSelect } = useAudio();
  const [hoveredFolder, setHoveredFolder] = useState<string | null>(null);

  const directories: DirectoryItem[] = [
    {
      id: "cyberhormonios",
      name: "cyberhormônios",
      path: "/recursos/cyberhormonios"
    },
    {
      id: "para-as-ruas",
      name: "para-as-ruas",
      path: "/recursos/para-as-ruas"
    }
  ];

  const handleDirectoryClick = (path: string) => {
    playButtonSelect();
    router.push(path);
  };

  return (
    <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
      <CyberContainer className="w-full max-w-4xl border border-accent1 p-1 crt-screen crt-curvature crt-reflection granular-effect">
        <CyberContainer className="border border-accent1 p-6">
          <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
            Recursos
          </CyberContainer>

          <CyberContainer className="text-accent1 text-center mb-8">
            Recursos úteis para serem utilizados de forma livre.
            <br />
            <span className="text-accent5">
              Tem algum recurso para compartilhar? Mande pra gente em: cats-trans@riseup.net
            </span>
          </CyberContainer>

          <CyberContainer className="border border-accent1 p-8 bg-background">
            <div className="flex flex-wrap gap-12 sm:gap-16 md:gap-20">
              {directories.map((dir) => (
                <motion.div
                  key={dir.id}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => handleDirectoryClick(dir.path)}
                  onMouseEnter={() => {
                    setHoveredFolder(dir.id);
                    playButtonSelect();
                  }}
                  onMouseLeave={() => setHoveredFolder(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="mb-3"
                    animate={{
                      y: hoveredFolder === dir.id ? -2 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    {hoveredFolder === dir.id ? (
                      <FaFolderOpen
                        size={64}
                        className="text-accent1 transition-colors duration-200"
                      />
                    ) : (
                      <FaFolder
                        size={64}
                        className="text-accent5 group-hover:text-accent1 transition-colors duration-200"
                      />
                    )}
                  </motion.div>

                  <div className="text-center">
                    <div className="font-mono text-sm text-accent5 group-hover:text-accent1 transition-colors duration-200">
                      {dir.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-4 border-t border-accent1 text-accent3 text-xs font-mono">
              <span>drwxr-xr-x {directories.length} cats-coletivo-anarquista-trans {new Date().toLocaleDateString('pt-BR')}.</span>
            </div>
          </CyberContainer>
        </CyberContainer>
      </CyberContainer>
    </CyberContainer>
  );
}
