import type { Meta, StoryObj } from '@storybook/react';

import type { NameHeaderProps } from './name-header';

import NameHeader from './name-header';

const meta: Meta<NameHeaderProps> = {
	title: 'Components/NameHeader',
	component: NameHeader,
};

export default meta;

type Story = StoryObj<typeof NameHeader>;

export const ChineseName: Story = {
	args: {
		name: '青眼白龍', color: '#FF0',
	},
};

export const JapaneseName: Story = {
	args: {
		name: '青眼の白龍', color: '#BC002D',
	},
};

export const AmericanName: Story = {
	args: {
		name: 'Tom', color: '#B31942',
	},
};
