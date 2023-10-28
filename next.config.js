/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "icons8.com",
        port: "",
        pathname: "/icon/122637/react",
      },
    ],
  },
};

module.exports = nextConfig;
