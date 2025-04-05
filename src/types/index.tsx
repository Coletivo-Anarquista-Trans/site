// src/types/next.d.ts
import type { Metadata } from "next";

declare module "next" {
  interface PageProps {
    params: { slug: string };
    searchParams: Record<string, string | string[] | undefined>;
  }
}
