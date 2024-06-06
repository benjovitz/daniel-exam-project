export interface exampleComponentProps {
	color: string;
}

export default function exampleComponent({ color }: exampleComponentProps) {
	return (
		<div style={{ backgroundColor: color }}>I am a component</div>
	);
}
