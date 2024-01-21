/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL,
    BLOG_PAGE_BASE_URL: process.env.BLOG_PAGE_BASE_URL,
    AI_PAGE_BASE_URL: process.env.AI_PAGE_BASE_URL,
    HUGGING_FACE_TOKEN: process.env.HUGGING_FACE_TOKEN,
    FACEBOOK_TEXT_TO_SPEECH_URL: process.env.FACEBOOK_TEXT_TO_SPEECH_URL,
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
