import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';


import pkg from './package.json';


const name = pkg.name;

const extensions = [ '.js' ];

export default {
    input: './src/index.js',
    output: [
        {
            file: `./dist/umd/${ name }.js`,
            format: 'umd',
            name: `${ name }`,
        },
        {

            file: `./dist/es/${ name }.js`,
            format: 'umd',
            name: `${ name }`,
        },
        {

            file: `./dist/${ name }.js`,
            format: 'iife',
            name: `${ name }`,
        },
    ],
    plugins: [
        babel( {
            babelHelpers: 'bundled',
            // exclude: 'node_modules/**',
            // extensions,
        } ),
        resolve(),
        commonjs(),
        terser(),

    ]
};