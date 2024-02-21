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
};

export default nextConfig;

//"*", "images.alphacoders.com", "kinsta.com"
