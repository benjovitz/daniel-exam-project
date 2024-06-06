import type { BlockConfig } from '../helper';
import type { HeadlineBlockData } from './headline-image.query';

import { HeadlineImageBlock } from './headline-image.block';
import { headlineBlockQueryFragment } from './headline-image.query';

export const headlineImageBlockConfig: BlockConfig<'headlineImageBlock', HeadlineBlockData> = {
	name: 'headlineImageBlock',
	query: headlineBlockQueryFragment,
	Component: HeadlineImageBlock,
} satisfies BlockConfig<'headlineImageBlock', HeadlineBlockData>;
