/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'google.com',
        port: '',
        //  pathname: '/account123/**',
        //  search: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        //  pathname: '/account123/**',
        //  search: '',
      },
    ],
  },
};

export default nextConfig;
