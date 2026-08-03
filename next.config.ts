import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/My-Portfolio",
  assetPrefix: "/My-Portfolio/",
};

export default nextConfig;
