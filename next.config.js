/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // The two-part routes were briefly published as /head and /tail.
    return [
      { source: '/blog/:slug/head', destination: '/blog/:slug/spec', permanent: true },
      { source: '/blog/:slug/tail', destination: '/blog/:slug/narrative', permanent: true },
    ]
  },
}

module.exports = nextConfig
