/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable source maps to avoid long path issues on Windows
    productionBrowserSourceMaps: false,
    // Optimize for Windows long path issues
    webpack: (config, { dev, isServer }) => {
        // Disable source maps completely to avoid Windows path length issues
        if (dev) {
            config.devtool = false;
        }
        return config;
    },
    // Add empty turbopack config to silence the warning
    // Since we have a webpack config, we can use --webpack flag explicitly if needed
    turbopack: {},
};

export default nextConfig;
