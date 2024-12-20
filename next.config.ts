// next.config.js
import withMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const mdxConfig = withMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
};

module.exports = mdxConfig(nextConfig);
