import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'american',
	title: 'American Name',
	type: 'document',
	preview: { select: {
		title: 'name',
	} },
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'month',
			title: 'Month',
			type: 'number',
		}),
		defineField({
			name: 'famousPeople',
			title: 'Famous People',
			type: 'array',
			of: [{ type: 'string' }],
		}),
		defineField({
			name: 'gender',
			title: 'Gender',
			type: 'reference',
			to: [{ type: 'gender' }],
		}),
	],
});
