import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {
        root: __dirname,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.ytimg.com",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/mentoria-tds",
                destination: "/mentoria",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
