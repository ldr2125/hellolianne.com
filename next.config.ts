import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/games/konas-sf-adventure',
        destination: 'https://konas-adventure.vercel.app/',
      },
      {
        source: '/games/konas-sf-adventure/:path*',
        destination: 'https://konas-adventure.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;
