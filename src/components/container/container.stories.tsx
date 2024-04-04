import type { Meta, StoryObj } from '@storybook/react';

import Container from './container';

const meta: Meta<typeof Container> = {
	title: 'Components/Container',
	component: Container,
	tags: ['autodocs'],
	argTypes: {},
	parameters: {
		chromatic: {
			viewports: [375, 640, 960, 1280, 1440],
		},
		design: {
			type: 'figma',
			url: 'https://www.figma.com/file/...',
		},
	},
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Primary: Story = {
	args: {
		children: <div style={{ background: 'lightgrey' }}>Content</div>,
	},
};
