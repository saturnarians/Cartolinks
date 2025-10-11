import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[
     { 
      protocol: 'https',
      hostname: 's.krea.ai',
      pathname: '',
  }
  ],
 },
};

export default nextConfig;
