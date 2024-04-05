import type { Meta, StoryObj } from '@storybook/react';

import { HeadlineBlock } from './headline.block';

const meta = {
	title: 'Blocks/Headline',
	component: HeadlineBlock,
} satisfies Meta<typeof HeadlineBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadlineBlockStory = {
	name: 'Headline',
	args: {
		data: {
			_key: 'cd50b80de6c0',
			_type: 'headlineBlock',
			title: 'Shadow money wizard gang',
			subtitle: 'WITH INTERNATIONAL POTENTIAL',
		},
	},
} satisfies Story;
