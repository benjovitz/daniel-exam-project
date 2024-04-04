import type { Meta, StoryObj } from '@storybook/react';

import { getRichtextFixture } from '@components/rich-text/get-richtext-fixture';

import type { RichTextProps } from './rich-text';

import RichText from './rich-text';

const meta: Meta<RichTextProps> = {
	title: 'Components/RichText',
	component: RichText,
};

export default meta;

export const RichTextStory: StoryObj<RichTextProps> = {
	name: 'Rich text',
	args: {
		value: getRichtextFixture(`
		<p>About us!</p>

		<h4>Hello from the RichText block!</h4>

		<p>We support soo&nbsp;<strong>many</strong>&nbsp;things!</p>

		<ul>
			<li><strong>Bold text</strong></li>
			<li><em>Italics</em></li>
			<li>Even&nbsp;<a href="http://localhost:3000/about-us">links</a></li>
		</ul>
		`),
	},
};
