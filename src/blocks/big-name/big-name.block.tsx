import type { BigNameBlockData } from '@blocks/big-name/big-name.query';
import NameHeader from '@components/name-header/name-header';

import styles from './big-name.module.scss';

export interface BigNameBlockProps {
	data: BigNameBlockData;
}

export function BigNameBlock({ data }: BigNameBlockProps) {
	return (
		<section className={styles.block}>
			<div>Your name in {data.language} is</div>
			<NameHeader color={data.color} name={data.name} />
			<div>Translation: {data.translation}</div>
		</section>
	);
}
