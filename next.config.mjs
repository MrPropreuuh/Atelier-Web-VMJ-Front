// frontend/next.config.js
module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3001/api/:path*' // Proxy vers le backend
            }
        ];
    }
};
