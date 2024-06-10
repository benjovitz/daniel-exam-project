import { groq } from 'next-sanity';

import type { BlockConfig } from './helper';
import type { BlockKeys } from './schemas';

import { bigNameBlockConfig } from './big-name';
import { headlineBlockConfig } from './headline';
import { headlineImageBlockConfig } from './headline-image';
import { richtextConfig } from './richtext';

/**
	* All blocks must be registered here in order to be renderable
	*/
/* eslint perfectionist/sort-objects: "warn" */
export const blockDefinitions = {
	[bigNameBlockConfig.name]: bigNameBlockConfig,
	[headlineBlockConfig.name]: headlineBlockConfig,
	[headlineImageBlockConfig.name]: headlineImageBlockConfig,
	[richtextConfig.name]: richtextConfig,
} satisfies { [key in BlockKeys]: BlockConfig };

export type BlockName = keyof typeof blockDefinitions;
export type BlockProps = Parameters<(typeof blockDefinitions)[BlockName]['Component']>['0']['data'];

const blockResolver = Object.values(blockDefinitions)
	.map((block) => groq`
		_type == "${block.name}" => {
			${block.query}
		}
	`)
	.join(',\n');

export function blockQuery(selector = 'blocks') {
	return groq`
		${selector}[] {
			_key,
			_type,
			${blockResolver}
		}
	`;
}
