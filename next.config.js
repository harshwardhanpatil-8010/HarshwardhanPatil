/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed to support middleware
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
