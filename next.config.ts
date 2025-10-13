import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[
     { 
      protocol: 'https',
      hostname: 's.krea.ai',
      port: '',
      pathname: '/**',
  }
  ],
 },
};

export default nextConfig;
