import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/pride",
  output: "export",
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
