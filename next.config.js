/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.ashiqtasdid.xyz'],
  },
}

module.exports = nextConfig
