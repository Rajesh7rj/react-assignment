const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/react-assignment/' : '',
  basePath: isProd ? '/react-assignment' : '',
  output: 'export'
};

export default nextConfig;