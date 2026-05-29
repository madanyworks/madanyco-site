/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
    ],
  },
  async redirects() {
    return [
      // /services → /solutions (IA rename, agency repositioning May 2026)
      { source: "/services", destination: "/solutions", permanent: true },
      {
        source: "/services/:slug",
        destination: "/solutions/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
