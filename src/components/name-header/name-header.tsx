import styles from './name-header.module.scss';

export interface NameHeaderProps {
	name: string;
	color: string;
}

export default function NameHeader({ name, color }: NameHeaderProps) {
	return (
		<span className={styles.nameHeader} style={{ color }}>{name}</span>
	);
};
