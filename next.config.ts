import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
