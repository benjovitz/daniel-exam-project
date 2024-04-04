// eslint-disable-next-line ts/no-explicit-any -- Can't use unknown here, as `satisfies` keyword does not allow excess properties. See more here: https://github.com/microsoft/TypeScript/issues/52999
export type BlockConfig<Name extends string = string, Data extends BaseBlockProps<Name> = any> = {
	name: Name;
	query: string;
	Component: (props: { data: Data }) => JSX.Element;
};

export type BaseBlockProps<T extends string, Data = unknown> = {
	_key: string;
	_type: T;
} & Data;
