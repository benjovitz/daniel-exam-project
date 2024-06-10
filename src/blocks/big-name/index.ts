import { BigNameBlock } from '@blocks/big-name/big-name.block';
import type { BigNameBlockData } from '@blocks/big-name/big-name.query';
import { bigNameBlockFragment } from '@blocks/big-name/big-name.query';

import type { BlockConfig } from '../helper';

export const bigNameBlockConfig: BlockConfig<'bigNameBlock', BigNameBlockData> = {
	name: 'bigNameBlock',
	query: bigNameBlockFragment,
	Component: BigNameBlock,
} satisfies BlockConfig<'bigNameBlock', BigNameBlockData>;
