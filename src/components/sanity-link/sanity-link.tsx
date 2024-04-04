import React from 'react';

import { resolveSanityLinkUrl } from '@lib/sanity/lib/sanity.helpers';
import type { SanityLink as SanityLinkType } from '@lib/sanity/lib/sanity.types';

import Link from '../link/link';

interface SanityLinkProps {
	children: React.ReactNode;
	link: SanityLinkType;
}

export default function SanityLink({ children, link }: SanityLinkProps) {
	return (
		<Link href={resolveSanityLinkUrl(link)}>
			{children}
		</Link>
	);
}
