import type { DataLoaderContext } from '@lib/sanity/lib/sanity.client';

// eslint-disable-next-line ts/no-explicit-any -- Can't use unknown here, as `satisfies` keyword does not allow excess properties. See more here: https://github.com/microsoft/TypeScript/issues/52999
export type TemplateConfig<Name extends string = string, Data = any> = {
	name: Name;
	dataLoader: (context: DataLoaderContext) => Promise<Data>;
	Component: (props: { data: Data }) => JSX.Element;
};
