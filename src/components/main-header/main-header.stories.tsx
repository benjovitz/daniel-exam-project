import type { Meta, StoryObj } from '@storybook/react';

import type { MainHeaderProps } from '@components/main-header/main-header';
import MainHeader from '@components/main-header/main-header';

const meta: Meta<MainHeaderProps> = {
	title: 'Components/MainHeader',
	component: MainHeader,
};

export default meta;

type Story = StoryObj<typeof MainHeader>;

export const Primary: Story = {
	args: {
		title: 'International Name Generator',
	},
};
