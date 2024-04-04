import { defineType } from 'sanity';

import { blockSchemas } from '@blocks/schemas';

export default defineType({
	name: 'blockList',
	description: 'The blocks that make up the main page content',
	type: 'array',
	of: blockSchemas.map((blockSchema) => ({
		type: blockSchema.name,
	})),
	validation: (rule) => rule.required().min(1),
});
