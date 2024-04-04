import type { StructureResolver } from 'sanity/structure';

import settingsType from '@lib/sanity/schemas/documents/settings';

import { getSettingsListItem } from '../plugins/settings';

export const deskStructure: StructureResolver = (S) => {
	const settingsListItem = getSettingsListItem(S, settingsType);

	// The default root list items (except custom ones)
	const defaultListItems = S.documentTypeListItems()
		.filter((listItem) => listItem.getId() !== settingsType.name);

	return S.list()
		.title('Content')
		.items([
			settingsListItem,
			S.divider(),
			...defaultListItems,
		]);
};
