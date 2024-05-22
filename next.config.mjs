/** @type {import('next').NextConfig} */
<<<<<<< Updated upstream
export default {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3000/api/:path*'
            }
        ];
    }
};
=======
const nextConfig = {};

export default nextConfig;
>>>>>>> Stashed changes
