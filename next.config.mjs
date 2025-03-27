/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "gravatar.com",
        pathname: "**",
      },
    ],
  },
  // reactStrictMode: true,
  // env: {
  //   NEXT_PUBLIC_DEBUG: "true", // فعالسازی حالت debug
  // },
};

export default nextConfig;
