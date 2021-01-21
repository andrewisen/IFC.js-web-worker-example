import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  /**
   * Geometry bundle
   */
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
  /**
   * Single Web Worker Bundle
   */
  {
    input: './src/IFC.singleWorker.js',
    external: ['chevrotain'],
    output: [
      {
        file: './build/IFC.singleWorker.module.js',
        format: 'es',
        globals: {
          chevrotain: 'chevrotain'
        }
      },
      {
        file: './build/IFC.singleWorker.js',
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
  },
  /**
   * Multi Web Worker Bundle
   */
  {
    input: './src/IFC.multiWorker.js',
    external: ['chevrotain'],
    output: [
      {
        file: './build/IFC.multiWorker.module.js',
        format: 'es',
        globals: {
          chevrotain: 'chevrotain'
        }
      },
      {
        file: './build/IFC.multiWorker.js',
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
  },
  /**
   * Specific Web Worker Bundle
   */
  {
    input: './src/IFC.specificWorker.js',
    external: ['chevrotain'],
    output: [
      {
        file: './build/IFC.specificWorker.module.js',
        format: 'es',
        globals: {
          chevrotain: 'chevrotain'
        }
      },
      {
        file: './build/IFC.specificWorker.js',
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
