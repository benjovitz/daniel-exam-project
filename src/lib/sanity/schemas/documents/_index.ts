import type { DocumentDefinition } from 'sanity';

import chinese from './chinese';
import japanese from './japanese';
import settings from './settings';

export const documentSchemas = [
	settings,
	chinese,
	japanese,
] satisfies DocumentDefinition[];
