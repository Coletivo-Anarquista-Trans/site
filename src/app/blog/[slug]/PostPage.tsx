
import { notFound } from "next/navigation";
import CyberContainer from "@/components/atoms/CyberContainer";
import PostContent from "@/components/molecules/postClient";
import { getPostBySlug } from "@/assets/blogPosts/post";

type PostPageProps = {
  slug: string;
};

export default async function PostPage({ slug }: PostPageProps) {
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <CyberContainer className="bg-background min-h-screen text-foreground flex flex-col items-center p-4">
      <PostContent post={post} />
    </CyberContainer>
  );
}
