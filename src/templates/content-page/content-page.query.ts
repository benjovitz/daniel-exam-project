import { groq } from 'next-sanity';

import type { BlockProps } from '@blocks';
import { blockQuery } from '@blocks';
import type { DataLoaderContext } from '@lib/sanity/lib/sanity.client';
import { getClient } from '@lib/sanity/lib/sanity.client';

const contentPageQuery = groq`
	*[_type == "contentPage" && slug.current == $slug][0] {
		title,
		"slug": slug.current,
		"blocks": ${blockQuery('blocks')}
	}
`;

export type ContentPageData = {
	title: string;
	slug: string;
	blocks: BlockProps[];
};

export async function contentPageDataLoader({ preview, slug }: DataLoaderContext): Promise<ContentPageData> {
	return getClient(preview).fetch<ContentPageData>(contentPageQuery, { slug });
}
