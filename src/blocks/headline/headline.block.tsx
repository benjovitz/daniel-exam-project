'use client';

import type { HeadlineBlockData } from '@blocks/headline/headline.query';
import Container from '@components/container/container';
import { Heading, Section } from '@components/heading/heading';

import styles from './headline.module.scss';

export type HeadlineBlockProps = {
	data: HeadlineBlockData;
};

export function HeadlineBlock({ data }: HeadlineBlockProps) {
	return (
		<Container>
			<Section>
				<Heading className="h2">{data.title}</Heading>
				<p className={styles.subtitle}>{data.subtitle}</p>
			</Section>
		</Container>
	);
}
