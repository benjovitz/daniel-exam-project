import { BlockList } from '@components/block-list/block-list';

import type { ContentPageData } from './content-page.query';

export type ContentPageProps = {
	data: ContentPageData;
};

export function ContentPageTemplate({ data }: ContentPageProps) {
	return (
		<>
			<BlockList blocks={data.blocks} />
		</>
	);
}
