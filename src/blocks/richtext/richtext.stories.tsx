import type { Meta, StoryObj } from '@storybook/react';

import { randomKey } from '@sanity/block-tools';

import { getRichtextFixture } from '@components/rich-text/get-richtext-fixture';

import { RichtextBlock } from './richtext.block';

const meta: Meta<typeof RichtextBlock> = {
	title: 'Blocks/Richtext',
	component: RichtextBlock,
};

export default meta;

type Story = StoryObj<typeof RichtextBlock>;

export const RichtextBlockStory = {
	name: 'Richtext',
	args: {
		data: {
			_key: randomKey(12),
			_type: 'richtextBlock',
			text: getRichtextFixture('<b>SHADOW MONEY WIZARD GANG</b>'),
		},
	},
} satisfies Story;
