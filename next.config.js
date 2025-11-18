/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Vercel: use default Next.js (no static export)
  // For NameCheap: use npm run export script
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
