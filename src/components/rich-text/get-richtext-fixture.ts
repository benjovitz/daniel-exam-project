import type { HtmlDeserializerOptions } from '@sanity/block-tools';

import { htmlToBlocks, randomKey } from '@sanity/block-tools';
import { Schema } from '@sanity/schema';

import { blockSchemas } from '@blocks/schemas';
import type { SanityRichText } from '@lib/sanity/lib/sanity.types';
import { documentSchemas } from '@lib/sanity/schemas/documents/_index';
import { objectSchemas } from '@lib/sanity/schemas/objects/_index';
import { templateSchemas } from '@templates/schemas';

const defaultSchema = Schema.compile({
	types: [
		...objectSchemas,
		...blockSchemas,
		...documentSchemas,
		...templateSchemas,
	],
});

const blockContentType = defaultSchema.get('richtext');

const opts: HtmlDeserializerOptions = {
	rules: [
		{
			deserialize(el, next) {
				if (el.nodeName?.toLowerCase() !== 'a') {
					return undefined;
				}

				const markDef = {
					_key: randomKey(12),
					_type: 'link',
					title: '',
					type: 'external',
					internalLink: null,
					externalLink: (el as HTMLElement).getAttribute('href') || '#',
				};

				return {
					_type: '__annotation',
					markDef,
					children: next(el.childNodes),
				};
			},
		},
	],
};

export function getRichtextFixture(htmlString: string): SanityRichText {
	return htmlToBlocks(htmlString, blockContentType, opts) as SanityRichText;
}
