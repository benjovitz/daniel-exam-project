import type { Meta, StoryObj } from '@storybook/react';

import { BigNameBlock } from '@blocks/big-name/big-name.block';

const meta = {
	title: 'Blocks/Big name',
	component: BigNameBlock,
} satisfies Meta<typeof BigNameBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Chinese = {
	name: 'Chinese',
	args: {
		data: {
			_key: '',
			_type: 'bigNameBlock',
			name: '青眼白龍',
			translation: 'Blue Eyes White Dragon',
			color: '#ffff00',
			language: 'chinese',
			famousPeople: [],
		},
	},
} satisfies Story;

export const Japanese = {
	name: 'Japanese',
	args: {
		data: {
			_key: '',
			_type: 'bigNameBlock',
			name: '青眼の白龍',
			translation: 'Blue Eyes White Dragon',
			color: '#BC002D',
			language: 'japanese',
			famousPeople: [],
		},
	},
} satisfies Story;

export const American = {
	name: 'American',
	args: {
		data: {
			_key: '',
			_type: 'bigNameBlock',
			name: 'Tom',
			translation: 'Blue Eyes White Dragon',
			color: '#B31942',
			language: 'american',
			famousPeople: ['Tom Hanks', 'Tom Holland', 'Tom Hardy'],
		},
	},
} satisfies Story;
