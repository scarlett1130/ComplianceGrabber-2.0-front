/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "c.tenor.com", "cdn.dribbble.com"],
  },
};

module.exports = nextConfig;
