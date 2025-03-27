/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["i.imgur.com", "raw.githubusercontent.com"],
	},
};

module.exports = nextConfig;
