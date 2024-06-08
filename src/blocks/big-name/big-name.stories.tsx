import type { Meta, StoryObj } from '@storybook/react';

import { BigNameBlock } from '@blocks/big-name/big-name.block';

const meta = {
	title: 'Blocks/BigName',
	component: BigNameBlock,
} satisfies Meta<typeof BigNameBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BigNameBlockStory = {
	name: 'Big Name',
	args: {
		data: {
			_key: '',
			_type: 'bigNameBlock',
			name: '青眼白龍',
			translation: 'Blue Eyes White Dragon',
			color: '#ffff00',
			language: 'chinese',
		},
	},
} satisfies Story;
