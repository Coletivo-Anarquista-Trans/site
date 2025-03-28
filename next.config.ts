
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/,
  assetPrefix: '/',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;


