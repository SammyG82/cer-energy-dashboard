import type { NextConfig } from "next";

// `npm run build` sets NODE_ENV=production automatically; isProd controls the GitHub Pages basePath.
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/cer-energy-dashboard" : "",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
