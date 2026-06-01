import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    disableStaticImages: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|svg)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
