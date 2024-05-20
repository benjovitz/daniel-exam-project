import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'chinese',
	title: 'Chinese Name',
	type: 'document',
	preview: { select: {
		title: 'translation',
	} },
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'translation',
			title: 'Translation',
			type: 'string',
		}),
		defineField({
			name: 'meaning',
			title: 'Meaning',
			type: 'string',
		}),
		defineField({
			name: 'month',
			title: 'Month',
			type: 'number',
		}),
	],
});
