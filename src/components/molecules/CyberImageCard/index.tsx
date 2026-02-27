"use client";

import CyberContainer from "@/components/atoms/CyberContainer";
import { ImageTopic } from "@/types/image";
import { motion } from "framer-motion";
import CyberImageCarousel from "../CyberImageCarousel";

interface ImageTopicCardProps {
  topic: ImageTopic;
}

export default function CyberImageCard({ topic }: ImageTopicCardProps) {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CyberContainer className="h-full flex flex-col p-4 sm:p-6 break-words">
        <h2 className="text-md font-semibold text-accent5 mb-2 pb-2 border-b border-accent1">
          {topic.title}
        </h2>

        {topic.description && (
          <p className="text-sm text-accent3 mb-4">{topic.description}</p>
        )}

        <div className="mt-auto">
          <CyberImageCarousel images={topic.images} />
        </div>
      </CyberContainer>
    </motion.div>
  );
}