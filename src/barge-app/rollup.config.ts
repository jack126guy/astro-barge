import { defineConfig, Plugin } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default defineConfig({
	output: {
		format: 'iife',
	},
	plugins: [
		typescript(),
		nodeResolve({ browser: true }),
		babel({
			babelHelpers: 'bundled',
			extensions: ['.ts', '.tsx', '.js', '.jsx'],
			presets: [
				[
					'@babel/preset-env',
					{
						targets: {
							ie: '9',
						},
						useBuiltIns: 'usage',
						corejs: '3.37',
					},
				],
			],
		}),
		banCoreJs(),
	],
});

function banCoreJs(): Plugin {
	return {
		name: 'rollup-plugin-ban-core-js',
		resolveId(source) {
			if (source === 'core-js' || source.startsWith('core-js/')) {
				throw new Error(`core-js import detected: ${source}`);
			}
		},
	};
}
