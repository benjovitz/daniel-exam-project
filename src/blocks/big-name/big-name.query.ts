import { groq } from 'next-sanity';

import type { BaseBlockProps } from '@blocks/helper';

export const bigNameBlockFragment = groq`
	title,
	translation,
	language,
	color,
`;

export type BigNameBlockData = BaseBlockProps<'bigNameBlock', {
	name: string;
	translation: string;
	language: string;
	color: string;
}>;
