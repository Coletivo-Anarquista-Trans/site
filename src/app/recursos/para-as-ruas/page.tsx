// app/recursos/para-as-ruas/page.tsx
"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { getAssetPath } from "@/utils/assetPath";
import { useAudio } from "@/context/AudioContext";
import { FaTimes, FaDownload } from "react-icons/fa";

interface ImageItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  description?: string;
}

export default function ParaAsRuasPage() {
  const { playButtonSelect } = useAudio();
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const images: ImageItem[] = [
    {
      id: "1",
      src: "/trans-resources/images/revoga-cfm.png",
      alt: "cartaz-revoga-cfm",
      title: "Revoga CFM"
    },
    {
      id: "2",
      src: "/trans-resources/images/bonekas-armadas.png",
      alt: "cartaz-bonekas-armadas",
      title: "Bonekas Armadas"
    }
  ];

  const handleImageClick = (image: ImageItem) => {
    playButtonSelect();
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    playButtonSelect();
    setSelectedImage(null);
  };

  const handleDownload = (image: ImageItem) => {
    playButtonSelect();
    const link = document.createElement('a');
    link.href = getAssetPath(image.src);
    link.download = `${image.alt}.${image.src.split('.').pop()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
      <CyberContainer className="w-full max-w-6xl border border-accent1 p-1 crt-screen crt-curvature crt-reflection granular-effect">
        <CyberContainer className="border border-accent1 p-6">
          <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
            Para as ruas
          </CyberContainer>

          <CyberContainer className="text-accent1 text-center mb-8">
            Banco de imagens para serem utilizadas de forma livre. Clique nas imagens para visualizá-las em tamanho maior e baixá-las.
          </CyberContainer>

          <CyberContainer className="border border-accent1 p-4 bg-background">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image) => (
                <motion.div
                  key={image.id}
                  className="border border-accent1 p-2 hover:bg-accent1 hover:text-background cursor-pointer transition-all duration-200 group"
                  onClick={() => handleImageClick(image)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="relative w-full aspect-square mb-2 overflow-hidden border border-accent1">
                    <Image
                      src={getAssetPath(image.src)}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="text-sm font-mono text-accent5 group-hover:text-background mb-1">
                    {image.title}
                  </div>
                  {image.description && (
                    <div className="text-xs text-accent3 group-hover:text-background line-clamp-2">
                      {image.description}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-12 pt-4 border-t border-accent1 text-accent3 text-xs font-mono">
              <span>drwxr-xr-x {images.length} cats-coletivo-anarquista-trans {new Date().toLocaleDateString('pt-BR')}.</span>
            </div>
          </CyberContainer>
        </CyberContainer>
      </CyberContainer>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div
              className="fixed inset-0 bg-background backdrop-blur-[2px]"
              onClick={handleCloseModal}
              aria-hidden="true"
            />

            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                className="relative w-full max-w-5xl max-h-[90vh] transform overflow-hidden border border-accent1 bg-background text-left align-middle shadow-xl crt-screen crt-curvature crt-reflection granular-effect"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{
                  duration: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="border border-accent1 p-4 max-h-[90vh] overflow-y-auto">
                  {/* Modal Header */}
                  <div className="flex justify-between items-center mb-4 sticky top-0 bg-background z-10 border-b border-accent1 pb-2">
                    <h3 className="text-lg font-bold text-accent1 font-mono">
                      {selectedImage.title}
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDownload(selectedImage)}
                        className="text-accent3 hover:text-accent1 transition-colors p-2 border border-accent1 hover:bg-accent1 hover:text-background"
                        aria-label="Baixar imagem"
                        title="Baixar imagem"
                      >
                        <FaDownload size={16} />
                      </button>
                      <button
                        onClick={handleCloseModal}
                        className="text-accent3 hover:text-accent1 transition-colors p-2 border border-accent1 hover:bg-accent1 hover:text-background"
                        aria-label="Fechar modal"
                        title="Fechar modal"
                      >
                        <FaTimes size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Modal Content */}
                  <div className="relative w-full border border-accent1 mb-4 bg-background flex items-center justify-center">
                    <Image
                      src={getAssetPath(selectedImage.src)}
                      alt={selectedImage.alt}
                      width={1200}
                      height={1200}
                      className="max-w-full max-h-[60vh] w-auto h-auto object-contain"
                      priority
                    />
                  </div>

                  {/* Modal Footer */}
                  {selectedImage.description && (
                    <div className="text-accent3 text-sm border-t border-accent1 pt-3">
                      {selectedImage.description}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </CyberContainer>
  );
} 