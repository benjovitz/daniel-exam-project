import type { SanityDocument, Slug } from 'sanity';
import type { DefaultDocumentNodeResolver } from 'sanity/structure';

import Iframe from 'sanity-plugin-iframe-pane';

import config from '@config';

function getPreviewUrl(doc: { slug: Slug }) {
	return doc?.slug?.current;
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
	switch (schemaType) {
		case 'contentPage':
			return S.document().views([
				S.view.form(),
				S.view
					.component(Iframe)
					.options({
						url: (doc: SanityDocument & { slug: Slug }) => {
							return `${config.appUrl}/api/preview?redirect=${getPreviewUrl(doc)}`;
						},
						showDisplayUrl: false,
						reload: {
							button: true,
							revision: 400,
						},
					})
					.title('Preview'),
			]);
		default:
			return S.document().views([S.view.form()]);
	}
};
