import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // required for static export
  basePath: "/land-lease-management-frontend", // your repo name
  assetPrefix: "/land-lease-management-frontend/", // also prefix static assets
  images: {
    unoptimized: true, // GitHub Pages doesn’t support Image Optimization
  },
};

export default nextConfig;
