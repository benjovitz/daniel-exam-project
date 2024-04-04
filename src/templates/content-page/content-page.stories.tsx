import type { Meta, StoryObj } from '@storybook/react';

import { HeadlineBlockStory } from '@blocks/headline/headline.stories';
import { RichtextBlockStory } from '@blocks/richtext/richtext.stories';

import { ContentPageTemplate } from './content-page.template';

const meta: Meta<typeof ContentPageTemplate> = {
	title: 'Templates/Content page',
	component: ContentPageTemplate,
};

export default meta;

type Story = StoryObj<typeof ContentPageTemplate>;

export const ContentPageStory = {
	name: 'Content page',
	args: {
		data: {
			title: 'ContentPage',
			slug: '/content-page',
			blocks: [
				HeadlineBlockStory.args.data,
				RichtextBlockStory.args.data,
			],
		},
	},
} satisfies Story;
