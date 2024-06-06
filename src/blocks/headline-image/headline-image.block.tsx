import Image from 'next/image';

import type { HeadlineBlockData } from '@blocks/headline-image/headline-image.query';
import Container from '@components/container/container';
import MainHeader from '@components/main-header/main-header';

import styles from './headline-image.module.scss';

export interface HeadlineBlockProps {
	data: HeadlineBlockData;
};

export function HeadlineImageBlock({ data }: HeadlineBlockProps) {
	return (
		<Container>
			<div className={styles.container}>
				<Image alt="image" height={1089} src="https://s3-alpha-sig.figma.com/img/3aef/37f2/926b74b0e1cf3508d4932bc9aadd4c7c?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XlCeMfkEdQxGo7Qy64fddDQOJ6WpisdWouS19m9tMrL734Af5fQ1GR9MXOEaL-EA6~E8-DEqvsr8UrVrK8PPTm740A~RsBiiXvkwfHR9CdqRd713XqvoG3qhAwGHQyu2mwdvaUpEzCkUtV1pCDUiRD3qsyQAzzlDTlnGxIgEDO2UTdtYNFpiZoSS4t~gho6kkR-cxh0sNEKjbD31HZ8fcZudUpjczgC~0UmC4pTmT5h6ZdTT9UUKmph~foaA3C5mFxnNxwvsWNLoQDDivP3pHOfwuUWM9gAZqpe0kms~Ui--j1CmNSq2hZuhzBT9GxTXcoDsxIWt6htz~qsvIgsJYw__" width={1250} />
				<MainHeader title={data.title} />
			</div>
		</Container>
	);
}
