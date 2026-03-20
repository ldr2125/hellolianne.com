import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/games/konas-sf-adventure',
        destination: '/games/konas-sf-adventure/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/games/konas-sf-adventure/',
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
