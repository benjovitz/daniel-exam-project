import Studio from './studio';

export { metadata } from 'next-sanity/studio/metadata';
export { viewport } from 'next-sanity/studio/viewport';

export const dynamic = 'force-static';

export default function StudioPage() {
	return (
		<Studio />
	);
}
