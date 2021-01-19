import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: './src/IFC.geometry.js',
    external: ['three'],
    output: [
      {
        file: './build/IFC.geometry.module.js',
        format: 'es',
        globals: {
          three: 'THREE'
        }
      },
      {
        file: './build/IFC.geometry.js',
        format: 'iife',
        name: 'IFCjs',
        globals: {
          three: 'THREE'
        }
      }
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**', 'libs/**', 'examples/**'],
        babelHelpers: 'bundled'
      }),
      resolve(),
      commonjs()
    ]
  },
  {
    input: './src/IFC.worker.js',
    external: ['chevrotain'],
    output: [
      {
        file: './build/IFC.worker.module.js',
        format: 'es',
        globals: {
          chevrotain: 'chevrotain'
        }
      },
      {
        file: './build/IFC.worker.js',
        format: 'iife',
        name: 'IFCjs',
        globals: {
          chevrotain: 'chevrotain'
        }
      }
    ],
    plugins: [
      babel({
        exclude: ['node_modules/**', 'libs/**', 'examples/**'],
        babelHelpers: 'bundled'
      }),
      resolve(),
      commonjs()
    ]
  }
];
