"use client";

import CyberDownload from "@/components/atoms/CyberDownload";
import { ImageItem } from "@/types/image";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageCarouselProps {
  images: ImageItem[];
}

export default function CyberImageCarousel({ images }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const current = images[index];
  const multiple = images.length > 1;

  return (
    <div className="relative w-full">
      <div className="relative w-full h-64">
        <Image
          src={current.src}
          alt={current.alt ?? ""}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-contain rounded-md border border-accent1"
        />
      </div>

      <CyberDownload href={current.src} filename={current.downloadName} />

      {multiple && (
        <>
          <button
            onClick={() =>
              setIndex((i) => (i === 0 ? images.length - 1 : i - 1))
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 p-2 rounded-full hover:bg-background"
            aria-label="Imagem anterior"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={() =>
              setIndex((i) => (i === images.length - 1 ? 0 : i + 1))
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 p-2 rounded-full hover:bg-background"
            aria-label="Próxima imagem"
          >
            <FaChevronRight />
          </button>
        </>
      )}
    </div>
  );
}