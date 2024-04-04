import type { ObjectDefinition } from 'sanity';

import { ComponentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import { toPlainText } from '@lib/sanity/lib/sanity.helpers';

const blockTitle = 'Richtext';

export default defineType({
	name: 'richtextBlock',
	title: blockTitle,
	icon: ComponentIcon,
	type: 'object',
	fields: [
		defineField({
			name: 'text',
			type: 'richtext',
			validation: (rule) => rule.required(),
		}),
	],
	preview: {
		select: {
			text: 'text',
		},
		prepare(value) {
			const { text } = value;

			return {
				title: toPlainText(text),
			};
		},
	},
}) satisfies ObjectDefinition;
