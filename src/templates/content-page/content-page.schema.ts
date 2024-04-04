import { DocumentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import blockList from '@lib/sanity/schemas/objects/block-list';

export default defineType({
	name: 'contentPage',
	title: 'Page',
	icon: DocumentIcon,
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
				isUnique: (value, context) => context.defaultIsUnique(value, context),
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'blocks',
			title: 'Blocks',
			type: blockList.name,
		}),
	],
	preview: {
		select: {
			title: 'title',
			slug: 'slug.current',
		},
		prepare({
			title, slug,
		}) {
			return { title, media: null, subtitle: slug === '/' ? slug : `/${slug}` };
		},
	},
});
