// api/posts/route.ts
import { getAllPosts } from "@/lib/mdx";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = getAllPosts();
  return NextResponse.json(posts);
}
