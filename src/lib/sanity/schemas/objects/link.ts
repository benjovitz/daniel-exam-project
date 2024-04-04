import { LinkIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import { resolveSanityLinkUrl } from '@lib/sanity/lib/sanity.helpers';
import { templateSchemas } from '@templates/schemas';

export default defineType({
	name: 'link',
	title: 'Link',
	icon: LinkIcon,
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: 'Link type',
			name: 'type',
			type: 'string',
			initialValue: 'internal',
			options: {
				direction: 'horizontal',
				layout: 'radio',
				list: ['internal', 'external'],
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: 'internalLink',
			title: 'Internal link',
			type: 'reference',
			hidden: ({ parent }) => !parent || parent.type !== 'internal',
			to: [
				...templateSchemas.map((schema) => ({ type: schema.name })),
			],
		}),
		defineField({
			name: 'externalLink',
			title: 'External link',
			type: 'url',
			hidden: ({ parent }) => !parent || parent.type !== 'external',
		}),
	],
	preview: {
		select: {
			title: 'title',
			type: 'type',
			externalLink: 'externalLink',
			internalLinkType: 'internalLink._type',
			internalLinkSlug: 'internalLink.slug.current',
		},
		prepare({
			title, internalLinkType, externalLink, internalLinkSlug, type,
		}) {
			return {
				title,
				media: null,
				subtitle: resolveSanityLinkUrl({
					title,
					type,
					externalLink,
					internalLink: {
						slug: internalLinkSlug,
						type: internalLinkType,
					},
				}),
			};
		},
	},
});
