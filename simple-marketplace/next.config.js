/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['arweave.net', 'image-cache-service-z3w7d7dnea-ew.a.run.app'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = { fs: false }

    return config
  },
}

module.exports = nextConfig
