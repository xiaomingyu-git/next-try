/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};
// next.config.js

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx','ts','tsx'],
})