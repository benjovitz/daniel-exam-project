import type { PortableTextComponents } from '@portabletext/react';
import type { ReactNode } from 'react';

import SanityLink from '../sanity-link/sanity-link';
import { useRichTextSettings } from './helpers';

function Normal({ children }: { children?: ReactNode }) {
	const { type } = useRichTextSettings();
	const className = type === 'default' ? 'p' : undefined;

	return (
		<p className={className}>{children}</p>
	);
}

export const defaultComponents: PortableTextComponents = {
	block: {
		normal: Normal,
		h2: ({ children }) => (
			<h2>{children}</h2>
		),
		h3: ({ children }) => (
			<h3>{children}</h3>
		),
		h4: ({ children }) => (
			<h4>{children}</h4>
		),
	},
	list: {
		bullet: ({ children }) => (
			<ul>{children}</ul>
		),
	},
	marks: {
		link: ({ children, value }) => (
			<SanityLink link={value}>
				{children}
			</SanityLink>
		),
		strong: ({ children }) => {
			return <strong>{children}</strong>;
		},
		em: ({ children }) => {
			return <em>{children}</em>;
		},
	},
};
