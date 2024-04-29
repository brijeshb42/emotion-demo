/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
