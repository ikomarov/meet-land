/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.lovemeetmet.space/land' : '',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.lovemeetmet.space',
        port: '',
        pathname: 'public/**',
      },
    ],
  },
}

module.exports = nextConfig
