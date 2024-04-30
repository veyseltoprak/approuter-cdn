/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
    output: "standalone",
    basePath: '/mainplus',
    webpack: (config, options) => {
        config.externals.push({
            react: "React",
            "react-dom": "ReactDom",
            antd: "antd",
            dayjs: "dayjs"
        })
        return config;
    }
};

export default nextConfig;
