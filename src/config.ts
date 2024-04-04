/* eslint-disable node/prefer-global/process -- its okay, nextjs handles this */

const config = {
	appUrl: process.env.NEXT_PUBLIC_APP_URL,
	apiUrl: process.env.NEXT_PUBLIC_API_URL,
	sanity: {
		projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
		dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
		readToken: process.env.SANITY_API_READ_TOKEN,
		apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
		useCdn: process.env.NODE_ENV === 'production',
	},
};

export default config;
