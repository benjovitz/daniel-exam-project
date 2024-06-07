import styles from './main-header.module.scss';

export interface MainHeaderProps {
	title: string;
}

export default function MainHeader({ title }: MainHeaderProps) {
	return (
		<div style={{ width: '100%' }}>
			<span className={styles.mainHeader}>{title}</span>
		</div>
	);
};
