/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL,
    BLOG_PAGE_BASE_URL: process.env.BLOG_PAGE_BASE_URL,
    AI_PAGE_BASE_URL: process.env.AI_PAGE_BASE_URL,
    HUGGING_FACE_TOKEN: process.env.HUGGING_FACE_TOKEN,
    TEXT_TO_SPEECH_API_SERVICE: process.env.TEXT_TO_SPEECH_API_SERVICE,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

module.exports = nextConfig;
