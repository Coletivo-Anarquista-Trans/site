"use client";

import { useEffect } from "react";
import { useAudio } from "@/context/AudioContext";

interface PostData {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  image: string;
  content: string;
}

export default function PostContent({ post }: { post: PostData }) {
  const { playButtonSelect } = useAudio();

  useEffect(() => {
    document.title = `${post.title} | Blog Archive`;
  }, [post.title]);

  return (
    <div>
      <button onClick={playButtonSelect}>Play</button>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}