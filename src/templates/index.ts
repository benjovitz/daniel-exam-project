import type { TemplateConfig } from './helper';
import type { TemplateKeys } from './schemas';

import { contentPageConfig } from './content-page';

/**
 * All templates must be registered here in order to be renderable
 */
/* eslint perfectionist/sort-objects: "warn" */
export const templates = {
	[contentPageConfig.name]: contentPageConfig,
} satisfies { [key in TemplateKeys ]: TemplateConfig };

export type TemplateName = keyof typeof templates;

export function getTemplateConfig(name: TemplateName): TemplateConfig;
export function getTemplateConfig(name: string): TemplateConfig | undefined;
export function getTemplateConfig(name: TemplateName | string): TemplateConfig | undefined {
	return templates?.[name as TemplateName];
}
