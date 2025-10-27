/** next.config.js
 * Ensure Next emits URLs that work under the repo subpath and produces a static export.
 */
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // When in production, serve from the repo subpath
  basePath: isProd ? "/land-lease-management-frontend" : "",
  assetPrefix: isProd ? "/land-lease-management-frontend/" : "",
  // Helpful for GitHub Pages static exports
  trailingSlash: true,
};

export default nextConfig;