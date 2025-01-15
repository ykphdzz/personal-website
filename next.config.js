/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 替代 next export 命令
  basePath: '/personal-website',
  images: {
    unoptimized: true,
    domains: ['assets.aceternity.com'],
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
        }
      }
    }
    return config
  },
  // 生产环境优化
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig