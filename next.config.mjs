/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //     domains: ['image.tmdb.org'],
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '', // залиште порожнім, якщо не використовується
                pathname: '/t/p/**', // вкажіть шаблон шляху, який вам потрібен
            },
        ],
    },


};

export default nextConfig;