import { defineConfig } from '@jdpnielsen/assemble';

export default defineConfig({
	blueprints: [
		{
			name: 'component',
			recipe: './blueprints/component/index.mts',
		},
		{
			name: 'block',
			recipe: './blueprints/block/index.mts',
		},
		{
			name: 'template',
			recipe: './blueprints/template/index.mts',
		},
	],
});
