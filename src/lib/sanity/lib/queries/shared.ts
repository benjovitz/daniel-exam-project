import { groq } from 'next-sanity';

export const id = groq`
	"id": coalesce(_id, _key)
`;

export const type = groq` "type": _type`;
export const slug = groq` "slug": slug.current`;

export const link = groq`
	title,
	type,
	externalLink,
	internalLink -> {
		${type},
		${slug},
	},
`;

export function image(source = 'image', target = source) {
	return groq`
		${target ? `"${target}":` : ''} ${source} {
			"url": asset->url,
			"width": asset->metadata.dimensions.width,
			"height": asset->metadata.dimensions.height,
			"blurHash": asset->metadata.blurHash,
			"hotspot": hotspot {
				x,
				y
			}
		}
	`;
}

export function portableText(source = 'text', target = source) {
	return groq`
		${target ? `"${target}":` : ''} ${source}[] {
			...,
			markDefs[]{
				...,
				_type == "link" => {
					${link}
				}
			}
		}
	`;
}
