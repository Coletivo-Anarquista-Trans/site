// assets/blogPosts/post.ts
interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  image: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    id: "post-1",
    title: "Miauzers o( ❛ᴗ❛ )o",
    description: "Explorando as raízes e conceitos do movimento Miauzers.",
    slug: "introducao-ao-miauzers",
    date: "2023-05-15",
    image: "miau.jpg",
    content: `
      <h2>O que é Miauzers?</h2>
      <p>Miauzers é uma ferramenta de resistência...</p>
    `,
  },
  // Add more posts here
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
