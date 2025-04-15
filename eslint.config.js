import { lucidBrowser, lucidNode } from 'eslint-config-lucid';
import lucidTypescriptConfig from 'eslint-config-lucid-typescript';

export default [
	{
		ignores: [
			'**/*.js',
			'**/*.cjs',
			'**/*.d.ts'
		]
	},
	lucidBrowser,
	...lucidNode,
	...lucidTypescriptConfig
];
