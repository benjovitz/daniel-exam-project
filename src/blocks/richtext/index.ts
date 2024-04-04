import type { BlockConfig } from '../helper';
import type { RichtextBlockData } from './richtext.query';

import { RichtextBlock } from './richtext.block';
import { richtextBlockQueryFragment } from './richtext.query';

export const richtextConfig: BlockConfig<'richtextBlock', RichtextBlockData> = {
	name: 'richtextBlock',
	query: richtextBlockQueryFragment,
	Component: RichtextBlock,
} satisfies BlockConfig<'richtextBlock', RichtextBlockData>;
