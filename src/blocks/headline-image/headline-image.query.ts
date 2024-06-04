import { groq } from 'next-sanity';

import type { BaseBlockProps } from '@blocks/helper';

export const headlineBlockQueryFragment = groq`
	title,
`;

export type HeadlineBlockData = BaseBlockProps<'headlineImageBlock', {
	title: string;
}>;
