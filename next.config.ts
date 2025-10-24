import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 enables static export (required for GitHub Pages)
  basePath: "/land-lease-management-frontend", // 👈 use your repo name here
  images: {
    unoptimized: true, // 👈 disables Next.js Image Optimization for static hosting
  },
  trailingSlash: true, // 👈 ensures URLs end with '/' (fixes routing on GitHub Pages)
};

export default nextConfig;
