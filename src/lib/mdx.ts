import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Dynamic import of fs
  const { readdirSync, readFileSync } = await import("fs");

  const postsDirectory = path.join(process.cwd(), "app", "blog");
  const fileNames = readdirSync(postsDirectory).filter(
    (fileName) => fileName.endsWith(".mdx") && fileName !== "page.mdx"
  );

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    return getPostBySlug(slug);
  });
}

export function getPostBySlug(slug: string): BlogPost {
  // Frontmatter will be handled by Next.js
  return {
    slug,
    title: "",
    description: "",
    date: "",
    image: "",
  };
}
