/**
 * N.B. Run from project root
 */
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const sourcePath = 'examples/04/src';
const buildPath = 'examples/04/build';
const plugins = [
  babel({
    exclude: ['node_modules/**', 'libs/**', 'examples/**'],
    babelHelpers: 'bundled'
  }),
  resolve(),
  commonjs()
];

/**
 * The Geometry bundle is used to build the geometry.
 * It's depended on Three.js
 */
const geometryBundleName = 'geometry';
const geometryBundle = {
  input: `./${sourcePath}/IFC.${geometryBundleName}.js`,
  external: ['three'],
  output: [
    {
      file: `./${buildPath}/IFC.${geometryBundleName}.module.js`,
      format: 'es',
      globals: {
        three: 'THREE'
      }
    },
    {
      file: `./${buildPath}/IFC.${geometryBundleName}.js`,
      format: 'iife',
      name: 'IFCjs',
      globals: {
        three: 'THREE'
      }
    }
  ],
  plugins: plugins
};

/**
 * The Single Web Worker Bundle is used to parse and build parts of the IFC structure.
 */
const singleWorkerBundleName = 'singleWorker';
const singleWorkerBundle = {
  input: `./${sourcePath}/IFC.${singleWorkerBundleName}.js`,
  external: ['chevrotain'],
  output: [
    {
      file: `./${buildPath}/IFC.${singleWorkerBundleName}.module.js`,
      format: 'es',
      globals: {
        chevrotain: 'chevrotain'
      }
    },
    {
      file: `./${buildPath}/IFC.${singleWorkerBundleName}.js`,
      format: 'iife',
      name: 'IFCjs',
      globals: {
        chevrotain: 'chevrotain'
      }
    }
  ],
  plugins: plugins
};

/**
 * The Multi Web Worker Bundle is used to spawn Specific Web Workers.
 */
const multiWorkerBundleName = 'multiWorker';
const multiWorkerBundle = {
  input: `./${sourcePath}/IFC.${multiWorkerBundleName}.js`,
  external: ['chevrotain'],
  output: [
    {
      file: `./${buildPath}/IFC.${multiWorkerBundleName}.module.js`,
      format: 'es',
      globals: {
        chevrotain: 'chevrotain'
      }
    },
    {
      file: `./${buildPath}/IFC.${multiWorkerBundleName}.js`,
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
};

/**
 * The Specific Web Worker Bundle is used to parse SPECIFIC parts of the IFC schema.
 *
 * In other words: A specific Web Worker is a specialized one.
 * It will only parse a certain type(s) of IFC entity(ies)
 */
const specificWorkerBundleName = 'specificWorker';
const specificWorkerBundle = {
  input: `./${sourcePath}/IFC.${specificWorkerBundleName}.js`,
  external: ['chevrotain'],
  output: [
    {
      file: `./${buildPath}/IFC.${specificWorkerBundleName}.module.js`,
      format: 'es',
      globals: {
        chevrotain: 'chevrotain'
      }
    },
    {
      file: `./${buildPath}/IFC.${specificWorkerBundleName}.js`,
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
};
export default [geometryBundle, singleWorkerBundle, multiWorkerBundle, specificWorkerBundle];
