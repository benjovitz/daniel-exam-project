/** @type {import('next').NextConfig} */
const config = {
	images: {
		remotePatterns: [
			{ hostname: 'cdn.sanity.io' },
			{ hostname: 'source.unsplash.com' },
			{ hostname: 's3-alpha-sig.figma.com' },
		],
	},
};

export default config;
