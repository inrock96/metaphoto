/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    reactStrictMode:true,
    env:{
        BASE_URL: process.env.BASE_URL
    }
};

export default nextConfig;
