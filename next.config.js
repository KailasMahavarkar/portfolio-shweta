/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["i.imgur.com", "raw.githubusercontent.com", "*"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.imgur.com",
				port: "",
				pathname: "/**",
				search: "",
			},
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
				port: "",
				pathname: "/**",
				search: "",
			},
            {
				protocol: "https",
				hostname: "*",
				port: "",
				pathname: "/**",
				search: "",
			},
		],
	},
};

module.exports = nextConfig;
