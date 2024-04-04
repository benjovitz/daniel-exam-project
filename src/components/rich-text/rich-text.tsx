'use client';

import type { PortableTextBlockComponent, PortableTextComponents } from '@portabletext/react';

import { PortableText } from '@portabletext/react';
import cn from 'classnames';

import type { SanityRichText } from '@lib/sanity/lib/sanity.types';

import { defaultComponents } from './default-components';
import { context } from './helpers';

import style from './rich-text.module.scss';

export interface RichTextProps {
	value: SanityRichText;
	className?: string;
	type?: 'default' | 'unstyled';
	components?: {
		block: Record<string, PortableTextBlockComponent>;
	};
	component?: React.ElementType<{
		className?: string;
	}>;
}

export default function RichText({
	value,
	className,
	components,
	component = 'div',
	type = 'default',
}: RichTextProps) {
	const mergedComponents: PortableTextComponents = {
		block: {
			...defaultComponents.block as Record<string, PortableTextBlockComponent>,
			...components?.block as Record<string, PortableTextBlockComponent>,
		},
		list: defaultComponents.list,
		marks: defaultComponents.marks,
	};

	const Wrapper = component;

	return (
		<Wrapper className={cn(className, style['rich-text'])}>
			<context.Provider value={{ type }}>
				<PortableText
					components={mergedComponents}
					value={value}
				/>
			</context.Provider>
		</Wrapper>
	);
}
