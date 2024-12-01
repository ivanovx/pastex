const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: [`page.tsx`, `api.ts`],

  webpack: config => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: `node_modules/prismjs/themes/*.min.css`,
            to: `../public/themes/[name][ext]`,
          },
        ],
      })
    )

    return config
  },

  redirects: () => [
    {
      source: `/`,
      destination: `/create`,
      permanent: true,
    },
  ],
}

module.exports = nextConfig