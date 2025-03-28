
const isGithubPages = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGithubPages ? "/" : "",
  assetPrefix: isGithubPages ? "/" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;


