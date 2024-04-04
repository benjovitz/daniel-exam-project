import type { PortableTextObject } from 'sanity';

import type { SanityLink, SanityRichText } from './sanity.types';

export function resolveSanityLinkUrl(link: SanityLink): string {
	if (link.type === 'internal') {
		const { slug } = link.internalLink;

		return slug === '/' ? slug : `/${slug}`;
	}

	if (link.type === 'external') {
		return link.externalLink;
	}

	throw new Error(`Unkown link type: ${(link as { type: string }).type}`);
}

export function toPlainText(blocks: SanityRichText) {
	return blocks
		// loop through each block
		.map((block) => {
			// if it's not a text block with children,
			// return nothing
			if (block._type !== 'block' || !block.children) {
				return '';
			}

			// loop through the children spans, and join the
			// text strings
			return (block.children as PortableTextObject[]).map((child) => child.text).join('');
		})
		// join the paragraphs leaving split by two linebreaks
		.join('\n\n');
}

interface MakeSanityRichTextParams {
	headingRange?: [min: number, max: number] | false;
}

export function makeSanityRichText({
	headingRange = [2, 6],
}: MakeSanityRichTextParams = {}) {
	return {
		type: 'array',
		of: [{
			type: 'block',
			styles: [
				{ title: 'Normal', value: 'normal' },
				...(headingRange
					? Array.from({ length: headingRange[1] - headingRange[0] }).fill(null).map((i, index) => {
						return {
							title: `Heading ${index + headingRange[0]}`,
							value: `h${index + headingRange[0]}`,
						};
					})
					: []),
			],
			marks: {
				decorators: [
					{ title: 'Strong', value: 'strong' },
					{ title: 'Italic', value: 'em' },
				],
				annotations: [
					{
						name: 'link',
						type: 'link',
						title: 'Link',
					},
				],
			},
			lists: [
				{ title: 'Bullet', value: 'bullet' },
			],
		}],
	};
}
