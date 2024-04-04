import type { BlockConfig } from '../helper';
import type { HeadlineBlockData } from './headline.query';

import { HeadlineBlock } from './headline.block';
import { headlineBlockQueryFragment } from './headline.query';

export const headlineBlockConfig: BlockConfig<'headlineBlock', HeadlineBlockData> = {
	name: 'headlineBlock',
	query: headlineBlockQueryFragment,
	Component: HeadlineBlock,
} satisfies BlockConfig<'headlineBlock', HeadlineBlockData>;
