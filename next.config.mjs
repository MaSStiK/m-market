/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true, // Добавляет завершающий слэш ко всем URL
    async redirects() {
        return [
            {
                source: "/",
                destination: "/en/catalog",
                permanent: true
            },
        ];
    },
};

export default nextConfig;
