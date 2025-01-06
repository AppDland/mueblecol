import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mueblecol.s3.us-east-2.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    }
    // Otras opciones de configuración
};

export default nextConfig;
