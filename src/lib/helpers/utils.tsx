// clamp delta to be between 30fps and 120fps
export function ndelta(delta: number) {
	return clamp(delta, 1 / 120, 1 / 30);
}

export function clamp(num: number, min: number, max: number) {
	return Math.min(Math.max(num, min), max);
}
