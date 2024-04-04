import { createContext, useContext } from 'react';

export type RichTextType = 'default' | 'unstyled';

export const context = createContext<{ type: RichTextType }>({ type: 'default' });

export function useRichTextSettings() {
	return useContext(context);
}
