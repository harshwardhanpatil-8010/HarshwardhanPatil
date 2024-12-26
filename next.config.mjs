/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    removeConsole: true,
  },
  experimental: {
    optimizeCss: true,
    modularizeImports: {
      '@/components': {
        transform: '@/components/{{member}}',
      },
    },
    turbotrace: {
      logLevel: 'error'
    }
  },
  // Add performance optimizations
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  optimizeFonts: true,
}

export default nextConfig;