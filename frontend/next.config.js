/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/uk-govwatch-pro' : '',
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.ukgovwatchpro.com',
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig