import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';

import { blockSchemas } from '@blocks/schemas';
import config from '@config';
import { settingsPlugin } from '@lib/sanity/plugins/settings';
import settingsType from '@lib/sanity/schemas/documents/settings';
import { templateSchemas } from '@templates/schemas';

import { defaultDocumentNode } from './desk/default-document-node';
import { deskStructure } from './desk/structure';
import { documentSchemas } from './schemas/documents/_index';
import { objectSchemas } from './schemas/objects/_index';

const title = 'Boilerplate Studio';

if (!config.sanity.projectId || !config.sanity.dataset) {
	throw new Error('ProjectId or dataset not configured. Did you add a .env.local file?');
}

export default defineConfig({
	basePath: '/studio',
	projectId: config.sanity.projectId,
	dataset: config.sanity.dataset,
	title,
	schema: {
		types: [
			...objectSchemas,
			...blockSchemas,
			...documentSchemas,
			...templateSchemas,
		],
	},
	plugins: [
		structureTool({
			structure: deskStructure,
			defaultDocumentNode,
		}),
		settingsPlugin({ type: settingsType.name }),
		unsplashImageAsset(),
		visionTool({ defaultApiVersion: config.sanity.apiVersion }),
	],
});
