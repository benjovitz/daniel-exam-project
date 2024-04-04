import contentPageSchema from './content-page/content-page.schema';

export const templateSchemas = [
	contentPageSchema,
] as const;

export const templateNames = templateSchemas.map((schema) => schema.name);
export type TemplateKeys = (typeof templateNames)[number];
