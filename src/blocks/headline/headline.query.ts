import { groq } from 'next-sanity';

import type { BaseBlockProps } from '@blocks/helper';

export const headlineBlockQueryFragment = groq`
	title,
	subtitle,
`;

export type HeadlineBlockData = BaseBlockProps<'headlineBlock', {
	title: string;
	subtitle: string;
}>;
