import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "export",
  basePath: "/cats-site",
  assetPrefix: "/cats-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
