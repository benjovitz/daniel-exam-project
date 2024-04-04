import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { getDocumentType } from '@lib/sanity/lib/sanity.client';
import { getTemplateConfig } from '@templates';

export default async function Page({ params }: { params: { slug: string[] } }) {
	const preview = draftMode().isEnabled;
	const slug = resolveSlug(params.slug);

	const template = await getDocumentType(slug, preview)
		.then((templateName) => {
			if (!templateName) {
				return undefined;
			}
			return getTemplateConfig(templateName);
		});

	if (!template) {
		return notFound();
	}

	const { Component, dataLoader } = template;
	const data = await dataLoader({ preview, slug });

	if (!data) {
		return notFound();
	}

	return (
		<Component data={data} />
	);
}

function resolveSlug(slug?: string[] | string): string {
	if (Array.isArray(slug)) {
		return slug.join('/');
	}

	// slug can be empty or "index" for index page when deployed in vercel
	return '/';
}
