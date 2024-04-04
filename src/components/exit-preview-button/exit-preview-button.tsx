'use client';

export default function ExitPreviewButton() {
	return (
		<button
			onClick={async () => {
				await fetch('/api/exit-preview');
				window.location.href = '/';
			}}
			style={{
				position: 'absolute',
				left: '50%',
				bottom: '5vh',
				translate: '-50% -50%',
				padding: '.5em 1em',
				borderRadius: '.25em',
				boxShadow: '0 0 1em rgba(0, 0, 0, .15)',
				border: '1px dashed currentColor',
			}}
		>
			Exit preview mode
		</button>
	);
}
