/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'api.microlink.io',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            }
    ]
    }
};

export default nextConfig;
