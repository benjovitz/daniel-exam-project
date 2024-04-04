import type { ArrayDefinition, ObjectDefinition } from 'sanity';

import blockList from './block-list';
import link from './link';
import richtext from './rich-text';

export const objectSchemas = [
	blockList,
	link,
	richtext,
] satisfies (ObjectDefinition | ArrayDefinition)[];
