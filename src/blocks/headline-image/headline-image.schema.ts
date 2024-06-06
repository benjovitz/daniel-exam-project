import { TextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

const blockTitle = 'Headline image section';

export default defineType({
	name: 'headlineImageBlock',
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
			name: 'src',
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
