/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "",
};

module.exports = nextConfig;
