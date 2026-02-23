/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Force turbopack to treat monorepo root as the workspace root
    root: "../../",
  },
};

module.exports = nextConfig;