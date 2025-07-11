// app/recursos/para-as-ruas/page.tsx
"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { getAssetPath } from "@/utils/assetPath";
import { useAudio } from "@/context/AudioContext";
import { FaTimes, FaDownload, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageVariant {
  src: string;
  alt: string;
}

interface ImageItem {
  id: string;
  title: string;
  description?: string;
  images: ImageVariant[];
}

export default function ParaAsRuasPage() {
  const { playButtonSelect } = useAudio();
  const [selectedItem, setSelectedItem] = useState<ImageItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images: ImageItem[] = [
    {
      id: "1",
      title: "Revoga CFM",
      images: [
        {
          src: "/trans-resources/images/revoga-cfm.png",
          alt: "cartaz-revoga-cfm"
        }
      ]
    },
    {
      id: "2",
      title: "Bonekas Armadas",
      images: [
        {
          src: "/trans-resources/images/bonekas-armadas.png",
          alt: "cartaz-bonekas-armadas"
        }
      ]
    },
    {
      id: "3",
      title: "Transfobia é crime inafiançável!",
      images: [
        {
          src: "/trans-resources/images/transfobia-e-crime.png",
          alt: "cartaz-transfobia-e-crime-frente"
        }
      ]
    }
  ];

  const handleImageClick = (item: ImageItem) => {
    playButtonSelect();
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    playButtonSelect();
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    playButtonSelect();
    if (selectedItem) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    playButtonSelect();
    if (selectedItem) {
      setCurrentImageIndex((prev) =>
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleImageIndexClick = (index: number) => {
    playButtonSelect();
    setCurrentImageIndex(index);
  };

  const handleDownload = (item: ImageItem, imageIndex: number) => {
    playButtonSelect();
    const image = item.images[imageIndex];
    const link = document.createElement('a');
    link.href = getAssetPath(image.src);
    link.download = `${image.alt}.${image.src.split('.').pop()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const currentImage = selectedItem?.images[currentImageIndex];

  return (
    <CyberContainer className="min-h-screen flex flex-col items-center overflow-x-hidden px-4 py-8">
      <CyberContainer className="text-2xl sm:text-3xl font-bold text-accent1 mb-6 text-center">
        Para as ruas
      </CyberContainer>

      <CyberContainer className="text-accent1 text-center mb-8">
        Banco de imagens para serem utilizadas de forma livre. Clique nas imagens para visualizá-las em tamanho maior e baixá-las.
      </CyberContainer>

      <CyberContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((item) => (
            <motion.div
              key={item.id}
              className="border border-accent1 p-2 hover:bg-accent1 hover:text-background cursor-pointer transition-all duration-200 group"
              onClick={() => handleImageClick(item)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-full aspect-square mb-2 overflow-hidden border border-accent1">
                <Image
                  src={getAssetPath(item.images[0].src)}
                  alt={item.images[0].alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="text-sm font-mono text-accent5 group-hover:text-background mb-1">
                {item.title}
              </div>
              {item.images.length > 1 && (
                <div className="text-xs text-accent3 group-hover:text-background mb-1">
                  {item.images.length} imagens
                </div>
              )}
              {item.description && (
                <div className="text-xs text-accent3 group-hover:text-background line-clamp-2">
                  {item.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </CyberContainer>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {selectedItem && currentImage && (
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
                  <div className="flex justify-between items-center mb-4 top-0 bg-background z-10 pb-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-accent1 font-mono">
                        {selectedItem.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDownload(selectedItem, currentImageIndex)}
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

                  {/* Navigation Controls */}
                  {selectedItem.images.length > 1 && (
                    <div className="flex justify-center items-center gap-2 mb-4">
                      <button
                        onClick={handlePrevImage}
                        className="text-accent3 hover:text-accent1 transition-colors p-2 border border-accent1 hover:bg-accent1 hover:text-background"
                        aria-label="Imagem anterior"
                        title="Imagem anterior"
                      >
                        <FaChevronLeft size={14} />
                      </button>

                      <div className="flex gap-1">
                        {selectedItem.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => handleImageIndexClick(index)}
                            className={`px-3 py-1 border border-accent1 text-xs font-mono transition-colors ${index === currentImageIndex
                              ? 'bg-accent1 text-background'
                              : 'text-accent3 hover:text-accent1 hover:bg-accent1 hover:text-background'
                              }`}
                            title={selectedItem.images[index].alt}
                          >
                            {index + 1}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={handleNextImage}
                        className="text-accent3 hover:text-accent1 transition-colors p-2 border border-accent1 hover:bg-accent1 hover:text-background"
                        aria-label="Próxima imagem"
                        title="Próxima imagem"
                      >
                        <FaChevronRight size={14} />
                      </button>
                    </div>
                  )}

                  {/* Modal Content */}
                  <div className="relative w-full border border-accent1 mb-4 bg-background flex items-center justify-center">
                    <Image
                      src={getAssetPath(currentImage.src)}
                      alt={currentImage.alt}
                      width={1200}
                      height={1200}
                      className="max-w-full max-h-[60vh] w-auto h-auto object-contain"
                      priority
                    />
                  </div>

                  {/* Modal Footer */}
                  {selectedItem.description && (
                    <div className="text-accent3 text-sm border-t border-accent1 pt-3">
                      {selectedItem.description}
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