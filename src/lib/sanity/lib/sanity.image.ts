interface GetSanityImageUrlParams {
	url?: string;
	auto?: 'format' | null;
	w?: number;
	h?: number;
	hotspot?: { x: number; y: number } | null;
	fit?: 'crop';
	crop?: 'focalpoint' | 'entropy';
	q?: number;
}

export function getSanityImageUrl({
	url,
	auto = 'format',
	w,
	h,
	hotspot,
	crop = 'focalpoint',
	fit = 'crop',
	q,
}: GetSanityImageUrlParams) {
	const fields = [
		['auto', auto?.toString()],
		['w', w?.toString()],
		['crop', crop],
		['h', h?.toString()],
		['fit', fit],
		['q', q?.toString()],
		['fp-x', hotspot?.x.toString()],
		['fp-y', hotspot?.y.toString()],
	].filter((i): i is [string, string] => !['undefined', 'null'].includes(typeof i[1]));

	const qs = new URLSearchParams(fields);

	return `${url}?${qs.toString()}`;
}

interface GetSrcSetParams {
	url?: string;
	size: [number, number];
	sizes: string[];
	hotspot?: { x: number; y: number } | null;
	range?: [number, number];
	step?: number;
	debug?: boolean;
	fallback?: boolean;
}

export function getSrcSet({
	url = '',
	hotspot,
	size: [width, height],
	range: [min, max] = [700, 2200],
	sizes = [],
	step = 300,
	fallback = false,
}: GetSrcSetParams) {
	const result: [number, number][] = [];
	const ratio = height / width;

	for (let i = min; i < max; i += step) {
		if (width) {
			result.push([i, Math.ceil(i * ratio)]);
		} else {
			result.push([Math.ceil(i * ratio), i]);
		}
	}

	return {
		src: fallback
			? getSanityImageUrl({
				url, w: width, h: height, hotspot,
			})
			: undefined,
		srcSet: result.map(([w, h]) => `${getSanityImageUrl({
			hotspot,
			url,
			w,
			h,
		})} ${w}w`).join(', '),
		sizes: sizes.join(', '),
	};
}
