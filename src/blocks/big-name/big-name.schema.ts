import { TextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

const blockTitle = 'Big Name Block';

export default defineType({
	name: 'bigNameBlock',
	title: blockTitle,
	icon: TextIcon,
	type: 'object',
	fields: [
		defineField({
			name: 'name',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'translation',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'language',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'color',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
	],
	preview: {
		select: {
			title: 'translation',
		},
	},
});
