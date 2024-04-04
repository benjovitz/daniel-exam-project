import type { PortableTextObject, PortableTextSpan, PortableTextTextBlock } from 'sanity';

export type SanityDocumentType = 'page';

type BaseLink = {
	title: string;
};

interface SanityLinkInternal extends BaseLink {
	type: 'internal';
	externalLink?: null;
	internalLink: {
		type: SanityDocumentType;
		slug: string;
	};
}

interface SanityLinkExternal extends BaseLink {
	type: 'external';
	externalLink: string;
	internalLink?: null;
}

export type SanityLink = SanityLinkExternal | SanityLinkInternal;

export interface Settings {
	navigation: SanityLink[];
}

export interface Page {
	title: string;
}

export type SanityRichText = PortableTextTextBlock<PortableTextObject | PortableTextSpan>[];
