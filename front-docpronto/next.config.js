/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    subgraph_url: 'http://localhost:8000/subgraphs/name/doc',
  },
}

module.exports = nextConfig
