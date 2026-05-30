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
      // Merged Fractional CMO + Coaching under one page (May 2026)
      {
        source: "/solutions/coaching-training",
        destination: "/solutions/fractional-cmo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
