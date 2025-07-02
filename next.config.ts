import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
  /* config options here */
    // devIndicators: true
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.googleusercontent.com",
                port: "",
                pathname: "**",
            }
        ]
    }
};

export default nextConfig;
