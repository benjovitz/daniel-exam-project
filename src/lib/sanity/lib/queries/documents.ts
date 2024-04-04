import { groq } from 'next-sanity';

import { link } from './shared';

export const settingsQuery = groq`
	*[_type == "settings"][0] {
		"navigation": select(
			navigation == null => [],
			navigation[] {
				${link}
			},
		)
	}
`;

export const typeQuery = groq`
	*[slug.current == $slug][0] {
		_type
	}['_type']
`;
