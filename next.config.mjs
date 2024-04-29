import withBundleAnalyzer from "@next/bundle-analyzer";
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default process.env.ANALYZE === "1"
  ? withBundleAnalyzer({
      enabled: true,
      analyzerMode: "json",
    })(nextConfig)
  : nextConfig;
