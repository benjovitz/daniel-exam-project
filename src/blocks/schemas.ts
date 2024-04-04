import type { ArrayDefinition, ObjectDefinition } from 'sanity';

import headlineSchema from './headline/headline.schema';
import richtextSchema from './richtext/richtext.schema';

export const blockSchemas = [
	headlineSchema,
	richtextSchema,
] as const satisfies readonly (ObjectDefinition | ArrayDefinition)[];

export const blockNames = blockSchemas.map((schema) => schema.name);
export type BlockKeys = (typeof blockNames)[number];
