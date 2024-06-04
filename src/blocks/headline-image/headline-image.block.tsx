import type { HeadlineBlockData } from '@blocks/headline-image/headline-image.query';
import Container from '@components/container/container';
import MainHeader from '@components/main-header/main-header';

export interface HeadlineBlockProps {
	data: HeadlineBlockData;
};

export function HeadlineImageBlock({ data }: HeadlineBlockProps) {
	return (
		<Container>
			<MainHeader title={data.title} />
		</Container>
	);
}
