import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: 'src/comic_main.ts',
        output: {
            file: 'dest/comic_main.js',
            format: 'esm'
        },
        plugins: [commonjs(), nodeResolve({ browser: true }), typescript(), terser()],
    },
    {
        input: 'src/projects.ts',
        output: {
            file: 'dest/projects.js',
            format: 'esm'
        },
        plugins: [commonjs(), nodeResolve({ browser: true }), typescript(), terser()],
    }
];