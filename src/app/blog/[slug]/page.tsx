import { Metadata } from "next";
import CyberContainer from "@/components/atoms/CyberContainer";
import { getPostBySlug, getAllPostSlugs } from "@/assets/blogPosts/post";


import { notFound } from 'next/navigation';
import PostContent from "@/components/molecules/postClient";

// Generate static paths at build time
export async function generateStaticParams() {
  const posts = await getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Cyberfeminism Archive",
    };
  }

  return {
    title: `${post.title} | Cyberfeminism Archive`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <CyberContainer className="bg-background min-h-screen text-foreground flex flex-col items-center p-4">
      <PostContent post={post} />
    </CyberContainer>
  );
}