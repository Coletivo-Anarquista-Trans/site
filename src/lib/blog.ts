// lib/blog.ts
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

// Manually maintain your posts list
const allPosts: BlogPost[] = [
  {
    slug: "miauzers",
    title: "Miauzers o( ❛ᴗ❛ )o",
    description: "Explorando as raízes e conceitos do movimento Miauzers.",
    date: "2023-05-15",
    image: "miau.jpg",
  },
  // Add more posts here
];

export function getAllPosts(): BlogPost[] {
  return [...allPosts]; // Return a copy
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug);
}
