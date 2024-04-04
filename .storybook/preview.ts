import type { Preview } from '@storybook/react';

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#ffffff' },
				{ name: 'gray', value: '#808080' },
				{ name: 'dark', value: '#212b31' },
			],
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		viewport: {
			viewports: {
				'375x667': {
					name: '375x667',
					styles: {
						width: '375px',
						height: '667px',
					},
				},
				'640x1200': {
					name: '640x1200',
					styles: {
						width: '640px',
						height: '1024px',
					},
				},
				'960x1200': {
					name: '960x1200',
					styles: {
						width: '960px',
						height: '1200px',
					},
				},
				'1280x720': {
					name: '1280x720',
					styles: {
						width: '1280px',
						height: '720px',
					},
				},
				'1440x1200': {
					name: '1440x1200',
					styles: {
						width: '1440px',
						height: '1200px',
					},
				},
			},
		},
	},
};

export default preview;
