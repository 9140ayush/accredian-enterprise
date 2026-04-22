/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Ensure proper trailing slash handling for Vercel
  trailingSlash: false,
};

export default nextConfig;
