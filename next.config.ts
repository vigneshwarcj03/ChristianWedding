import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure static files are properly served
  staticPageGenerationTimeout: 60,
  
  // Configure image optimization
  images: {
    localPatterns: [
      {
        pathname: '/**',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wedding-invitation-website-jet.vercel.app',
        pathname: '/**',
      },
    ],
  },
  
  // Ensure public folder assets are not minified/compressed in a way that breaks them
  compress: true,
  
  // PoweredBy header for security
  poweredByHeader: false,
};

export default nextConfig;
