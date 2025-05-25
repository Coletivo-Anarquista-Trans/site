const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: import('next').NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: isGithubPages ? "/" : "",
  assetPrefix: isGithubPages ? "/" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
