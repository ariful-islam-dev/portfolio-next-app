/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["ariful-islam66.web.app", "i.ibb.co"],
  },
}

module.exports = nextConfig

