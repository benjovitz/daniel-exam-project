import { TextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

const blockTitle = 'Headline section';

export default defineType({
	name: 'headlineBlock',
	title: blockTitle,
	icon: TextIcon,
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'subtitle',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'title',
		},
	},
});
