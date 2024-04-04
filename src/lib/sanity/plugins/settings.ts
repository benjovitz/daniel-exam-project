import type React from 'react';
import type { ListItemBuilder, StructureBuilder } from 'sanity/structure';

import { type DocumentDefinition, definePlugin } from 'sanity';

export const settingsPlugin = definePlugin<{ type: string }>(({ type }) => {
	return {
		name: 'settings',
		document: {
			// Hide 'Settings' from new document options
			// https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
			newDocumentOptions: (prev, { creationContext }) => {
				if (creationContext.type === 'global') {
					return prev.filter((templateItem) => templateItem.templateId !== type);
				}

				return prev;
			},
			// Removes the "duplicate" action on the "settings" singleton
			actions: (prev, { schemaType }) => {
				if (schemaType === type) {
					return prev.filter(({ action }) => action !== 'duplicate');
				}

				return prev;
			},
		},
	};
});

// The `Settings` root list item
// A singleton not using `documentListItem`, eg no built-in preview
export function getSettingsListItem(
	S: StructureBuilder,
	typeDef: DocumentDefinition,
): ListItemBuilder {
	return S.listItem()
		.title(typeDef.title as string)
		.icon(typeDef.icon as React.ReactNode)
		.child(
			S.editor()
				.id(typeDef.name)
				.schemaType(typeDef.name)
				.documentId(typeDef.name),
		);
}
