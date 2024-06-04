import type { DocumentDefinition } from 'sanity';

import american from './american';
import chinese from './chinese';
import gender from './gender';
import japanese from './japanese';
import settings from './settings';

export const documentSchemas = [
	settings,
	chinese,
	japanese,
	american,
	gender,
] satisfies DocumentDefinition[];
