import { createClient } from 'next-sanity';

import config from '@config';
import {
	settingsQuery,
	typeQuery,
} from '@lib/sanity/lib/queries/documents';

import type { Settings } from './sanity.types';

const client = createClient({
	projectId: config.sanity.projectId,
	dataset: config.sanity.dataset,
	apiVersion: config.sanity.apiVersion,
	useCdn: config.sanity.useCdn,
});

export function getClient(preview = false) {
	if (preview) {
		return client.withConfig({
			token: config.sanity.readToken,
			ignoreBrowserTokenWarning: true,
			perspective: 'previewDrafts',
		});
	}

	return client;
}

export async function getSettings() {
	return client.fetch<Settings>(settingsQuery);
}

export async function getDocumentType(slug: string, preview = false): Promise<string | null> {
	return getClient(preview).fetch<string | null>(typeQuery, { slug });
}

export type DataLoaderContext = {
	slug: string;
	preview?: boolean;
};

export async function getTemplateData<T>(query: string, { slug, preview }: DataLoaderContext): Promise<T> {
	return getClient(preview || false).fetch<T>(query, { slug });
}
