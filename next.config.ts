const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: import('next').NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: isGithubPages ? "/site" : "",
  assetPrefix: isGithubPages ? "/site" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
