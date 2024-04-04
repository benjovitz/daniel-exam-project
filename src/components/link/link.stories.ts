import type { Meta, StoryObj } from '@storybook/react';

import { userEvent, within } from '@storybook/testing-library';

import Link from './link';

const meta: Meta<typeof Link> = {
	title: 'Components/Link',
	component: Link,
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

type Story = StoryObj<typeof Link>;

export const Primary: Story = {
	args: {
		children: 'Click me',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const link = await canvas.getByText('Click me');
		await userEvent.click(link);
	},
};
