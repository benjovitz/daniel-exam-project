import styles from './main-header.module.scss';

export interface MainHeaderProps {
	title: string;
}

export default function MainHeader({ title }: MainHeaderProps) {
	return (
		<span className={styles.mainHeader}>{title}</span>
	);
};
