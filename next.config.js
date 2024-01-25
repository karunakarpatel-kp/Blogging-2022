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
    STABLE_DIFFUSION_2_1_URL: process.env.STABLE_DIFFUSION_2_1_URL,
    OPEN_JOURNEY_URL: process.env.OPEN_JOURNEY_URL,
    IP_ADAPTER_FACE_ID_URL: process.env.IP_ADAPTER_FACE_ID_URL,
    STABLE_DIFFUSION_1_5_URL: process.env.STABLE_DIFFUSION_1_5_URL,
    STABLE_DIFFUSION_BASE_1_0_URL: process.env.STABLE_DIFFUSION_BASE_1_0_URL,
    EPIC_PHOTOGASM_URL: process.env.EPIC_PHOTOGASM_URL,
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
