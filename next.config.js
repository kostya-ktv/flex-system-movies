/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["www.themoviedb.org"],
        remotePatterns: [],
    },
      output: 'standalone',
}

module.exports = nextConfig
