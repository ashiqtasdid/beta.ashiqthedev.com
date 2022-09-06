/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:  ['cdn.ashiqtasdid.xyz', 'i.ibb.co', 'images.pexels.com'], 
  },
}

module.exports = nextConfig
