/** @type {import('next').NextConfig} */
const nextConfig = {
	// basePath: '/demo',
	// assetPrefix: '/demo'
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
				],
			},
		];
	},
};

export default nextConfig;
