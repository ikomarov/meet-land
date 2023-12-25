/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.lovemeetmet.space/land' : '',
}

module.exports = nextConfig
