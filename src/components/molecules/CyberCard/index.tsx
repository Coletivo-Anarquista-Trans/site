"use client";

import { motion } from "framer-motion";
import CyberContainer from "../../atoms/CyberContainer";
import Image from "next/image";
import Link from "next/link";

interface CyberCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  url?: string; // Made optional
  slug?: string; // Added for internal links
  viewMode?: "tile" | "list" | "compact";
  onHover?: () => void;
  metadata?: string | React.ReactNode;
}

const CyberCard = ({
  id,
  title,
  description,
  image,
  url,
  slug,
  viewMode = "tile",
  onHover,
  metadata,
}: CyberCardProps) => {
  const containerClasses = {
    tile: "flex flex-col gap-4 h-full",
    list: "flex flex-row gap-4 h-full",
    compact: "flex flex-col gap-2 h-full",
  }[viewMode];

  const imageClasses = {
    tile: "relative w-full aspect-[3/4] mb-2",
    list: "relative w-1/6 aspect-[3/4] min-w-[60px]",
    compact: "relative w-full aspect-[3/4] mb-1",
  }[viewMode];

  const textClasses = {
    tile: "text-lg font-bold text-center mb-1",
    list: "text-md font-bold mb-1 flex-1",
    compact: "text-sm font-bold text-center",
  }[viewMode];

  const descriptionClasses = {
    tile: "text-sm text-center text-foreground/80",
    list: "text-xs text-foreground/80 flex-1 line-clamp-2",
    compact: "text-xs text-center text-foreground/80 line-clamp-1",
  }[viewMode];

  const metadataClasses = {
    tile: "text-xs text-center text-accent1 mt-1",
    list: "text-xs text-accent1 mt-1",
    compact: "text-xxs text-center text-accent1 mt-1",
  }[viewMode];

  // Determine link content and props
  const linkContent = (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`${imageClasses} overflow-hidden bg-foreground/10`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={viewMode === "tile"}
        />
      </motion.div>

      <div className={viewMode === "list" ? "flex-1 ml-3" : "mt-2"}>
        <h3 className={textClasses}>{title}</h3>
        <p className={descriptionClasses}>{description}</p>
        {metadata && (
          <div className={metadataClasses}>
            {typeof metadata === "string" ? <span>{metadata}</span> : metadata}
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 15px rgba(0, 255, 255, 0.7)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="w-full h-full"
      onHoverStart={onHover}
    >
      <CyberContainer className="border p-1 border-accent1 h-full">
        <CyberContainer
          id={id}
          className={`${containerClasses} border border-accent1 p-4 h-full`}
        >
          {slug ? (
            // Internal link using slug
            (<Link
              href={`/blog/${slug}`}
              className={`w-full h-full ${
                viewMode === "list" ? "flex flex-row items-center" : ""
              }`}
              >
              {linkContent}
            </Link>)
          ) : url ? (
            // External link using url
            (<Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full h-full ${
                viewMode === "list" ? "flex flex-row items-center" : ""
              }`}
              >
              {linkContent}
            </Link>)
          ) : (
            // Fallback when no link is provided
            (<div
              className={`w-full h-full ${
                viewMode === "list" ? "flex flex-row items-center" : ""
              }`}
            >
              {linkContent}
            </div>)
          )}
        </CyberContainer>
      </CyberContainer>
    </motion.div>
  );
};

export default CyberCard;
