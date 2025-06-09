import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    transpilePackages: [
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-brands-svg-icons',
        '@fortawesome/react-fontawesome'
    ],
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };
        return config;
    },
};
export default nextConfig;
