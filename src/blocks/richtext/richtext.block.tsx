import Container from '@components/container/container';
import RichText from '@components/rich-text/rich-text';

import type { RichtextBlockData } from './richtext.query';

interface RichtextBlockProps {
	data: RichtextBlockData;
}

export function RichtextBlock(props: RichtextBlockProps) {
	return (
		<Container>
			<RichText value={props.data.text}></RichText>
		</Container>
	);
}
