import type { BlockName, BlockProps } from '@blocks';
import { blockDefinitions } from '@blocks';
import type { BlockConfig } from '@blocks/helper';

export interface BlockListProps {
	blocks: BlockProps[];
}

export function BlockList({ blocks }: BlockListProps) {
	return (
		<div>
			{blocks.map((e) => (
				<BlockWrapper key={e._key} block={e} />
			))}
		</div>
	);
}

function BlockWrapper({ block }: { block: BlockProps }) {
	const definition = blockDefinitions[block._type];

	if (definition) {
		const Component = definition.Component as BlockConfig<BlockName, BlockProps>['Component'];

		return (
			<Component data={block} />
		);
	}

	console.warn(`Missing handler for "${block._type}"`);

	return null;
}
