import { groq } from 'next-sanity';

import type { BaseBlockProps } from '@blocks/helper';

export const bigNameBlockFragment = groq`
	name,
	translation,
	language,
	color,
	famousPeople
`;

export type BigNameBlockData = BaseBlockProps<'bigNameBlock', {
	name: string;
	translation: string;
	language: string;
	color: string;
	famousPeople: Array<string>;
}>;
