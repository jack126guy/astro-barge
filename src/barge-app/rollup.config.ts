import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default defineConfig({
	output: {
		format: 'iife',
	},
	plugins: [
		typescript(),
		nodeResolve(),
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
					},
				],
			],
		}),
	],
});
