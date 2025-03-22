/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "",
};

module.exports = nextConfig;
