import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Phone-on-the-same-wifi previews hit the dev server by LAN IP, not localhost.
  // Next 15.2+ blocks dev resources from unlisted origins, which kills the HMR
  // client and, with it, hydration: CSS still applies, so the page looks right
  // while nothing is interactive. Filters stop filtering and rows navigate
  // instead of opening the reader. Dev-only; ignored by the production build.
  allowedDevOrigins: ["10.0.0.67", "10.0.0.*", "192.168.*.*", "*.local"],
};

export default nextConfig;
