import { defineType } from 'sanity';

export default defineType({
	name: 'richtext',
	type: 'array',
	of: [{
		type: 'block',
		styles: [
			{ title: 'Normal', value: 'normal' },
			{ title: 'Heading 2', value: 'h2' },
			{ title: 'Heading 3', value: 'h3' },
			{ title: 'Heading 4', value: 'h4' },
			{ title: 'Heading 5', value: 'h5' },
			{ title: 'Heading 6', value: 'h6' },
		],
		marks: {
			decorators: [
				{ title: 'Strong', value: 'strong' },
				{ title: 'Italic', value: 'em' },
			],
			annotations: [
				{
					name: 'link',
					type: 'link',
					title: 'Link',
				},
			],
		},
		lists: [
			{ title: 'Bullet', value: 'bullet' },
			{ title: 'Number', value: 'number' },
		],
	}],
});
