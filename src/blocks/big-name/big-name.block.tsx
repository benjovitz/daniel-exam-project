import type { BigNameBlockData } from '@blocks/big-name/big-name.query';
import Container from '@components/container/container';
import NameHeader from '@components/name-header/name-header';

import styles from './big-name.module.scss';

export interface BigNameBlockProps {
	data: BigNameBlockData;
}

export function BigNameBlock({ data }: BigNameBlockProps) {
	if (data.language === 'american') {
		return (
			<Container>
				<section className={`${styles[`${data.language}`]}`}>
					<div>Your name in {data.language} is</div>
					<NameHeader color={data.color} name={data.name} />
					<div>Famous people with the same name:</div> <br />
					{data.famousPeople.map((person, index) => (
						<div key={index}>{person}</div>
					))}
				</section>
			</Container>
		);
	}
	return (
		<Container>
			<section className={`${styles[`${data.language}`]}`}>
				<div>Your name in {data.language} is</div>
				<NameHeader color={data.color} name={data.name} />
				<div>Translation: {data.translation}</div>
			</section>
		</Container>
	);
}
