import { CogIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'settings',
	title: 'Settings',
	type: 'document',
	icon: CogIcon,
	preview: { select: { title: 'title', subtitle: 'description' } },
	fields: [
		defineField({
			name: 'navigation',
			title: 'Navigation',
			type: 'array',
			of: [{ type: 'link' }],
		}),
		defineField({
			name: 'title',
			description: 'Fallback page title.',
			title: 'Title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'description',
			description: 'Used for the meta description tag.',
			title: 'Description',
			type: 'text',
			validation: (rule) => rule.max(155).required(),
		}),
	],
});
