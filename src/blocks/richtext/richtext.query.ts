import { groq } from 'next-sanity';

import type { BaseBlockProps } from '@blocks/helper';
import { portableText } from '@lib/sanity/lib/queries/shared';
import type { SanityRichText } from '@lib/sanity/lib/sanity.types';

export const richtextBlockQueryFragment = groq`
	${portableText('text')},
`;

export type RichtextBlockData = BaseBlockProps<'richtextBlock', {
	text: SanityRichText;
}>;
