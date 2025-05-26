// components/PostContent.client.tsx
"use client";

import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useAudio } from "@/context/AudioContext";
import { getAssetPath } from "@/utils/assetPath";

interface Post {
  title: string;
  date: string;
  image: string;
  content: string;
}

export default function PostContent({ post }: { post: Post }) {
  const { playButtonSelect } = useAudio();

  return (
    <motion.div
      className="w-full max-w-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href="/blog"
        className="text-accent1 hover:underline flex items-center gap-2 mb-6"
        onClick={() => playButtonSelect()}
        onMouseEnter={() => playButtonSelect()}
        >
        <FaArrowLeft /> Voltar ao blog
      </Link>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-2"
      >
        {post.title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-foreground/60 mb-8"
      >
        Publicado em {new Date(post.date).toLocaleDateString("pt-BR")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-8 relative w-full aspect-video"
      >
        <Image
          src={getAssetPath(post.image)}
          alt={post.title}
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </motion.div>
  );
}
