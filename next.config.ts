import type { NextConfig } from "next";

/**
 * Lean config.
 * - Only WebP (AVIF encoding is very slow on dev machines and was making every image take seconds).
 * - No custom `webpack()` function: in Next 16 it forces webpack and disables fast Turbopack.
 * - No `swcMinify` / `eslint` keys: they were removed in Next 16.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;
