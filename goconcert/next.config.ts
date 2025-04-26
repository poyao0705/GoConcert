import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "prnicpvcgkrbnumblxtm.supabase.co", "source.unsplash.com", "assets.aceternity.com", "www.flaticon.com"],
  },
  experimental: {
    allowedDevOrigins: ['http://localhost:3000', 'http://192.168.40.68:3000'], // or whatever IP you're using
  },
};

export default nextConfig;
