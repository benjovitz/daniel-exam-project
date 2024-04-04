import React, { createContext } from 'react';

import { clamp } from '@lib/helpers/utils';

// Source: https://medium.com/@Heydon/managing-heading-levels-in-design-systems-18be9a746fa3
const context = createContext(1);

export function Section({ children }: { children: React.ReactNode }) {
	return (
		<context.Consumer>
			{(level) => <context.Provider value={level + 1}>{children}</context.Provider>}
		</context.Consumer>
	);
}

export function Heading(props: React.ComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>) {
	return (
		<context.Consumer>
			{(level) => {
				const Component = `h${clamp(level, 1, 6)}`;

				return <Component {...props} />;
			}}
		</context.Consumer>
	);
}
