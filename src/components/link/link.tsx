import NextLink from 'next/link';
import React from 'react';

interface LinkProps {
	children: React.ReactNode;
	hash?: string;
}

export default function Link({
	children,
	href,
	hash,
	...rest
}: LinkProps & React.ComponentPropsWithoutRef<'a'>) {
	return (
		<NextLink
			href={{ pathname: href, hash }}
			passHref
			{...rest}
		>
			{children}
		</NextLink>
	);
}
