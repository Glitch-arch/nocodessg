/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.alphacoders.com",
      },
      {
        protocol: "https",
        hostname: "kinsta.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/api/templateSSR",
        headers: [
          {
            key: "Content-Disposition",
            value: "attachment; filename=template.html",
          },
          {
            key: "Content-Type",
            value: "text/html",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

//"*", "images.alphacoders.com", "kinsta.com"
