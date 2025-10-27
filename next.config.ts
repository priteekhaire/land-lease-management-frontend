import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/land-lease-management-frontend" : "",
  assetPrefix: isProd ? "/land-lease-management-frontend/" : "",
  trailingSlash: true,
};

export default nextConfig;