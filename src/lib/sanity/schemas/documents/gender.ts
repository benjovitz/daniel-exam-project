import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'gender',
	title: 'Gender',
	type: 'document',
	fields: [
		defineField({
			name: 'gender',
			title: 'Gender',
			type: 'string',
		}),
	],
});
