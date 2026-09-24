import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages does not support the standalone output.
  // Use the default build output and let @cloudflare/next-on-pages handle it.
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Cloudflare Pages does not ship the sharp native binaries, so we
  // serve images unoptimized. The quality is unchanged, only the
  // runtime optimization step is skipped.
  images: {
    unoptimized: true,
  },
  // Trailing slash gives clean URLs on Cloudflare's static file serving.
  trailingSlash: true,
};

export default nextConfig;
