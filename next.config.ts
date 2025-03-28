import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "export",
  basePath: "/",
  assetPrefix: "/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
