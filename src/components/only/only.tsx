// eslint-disable-next-line ts/no-explicit-any
export default function Only(props: { if: any; children: React.ReactNode }) {
	return props.if ? <>{props.children}</> : null;
}
