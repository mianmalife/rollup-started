import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel'
// import { terser } from 'rollup-plugin-terser'import 
import css from 'rollup-plugin-import-css'
import replace from '@rollup/plugin-replace'
import pkg from './package.json'

export default {
    input: 'src/main.js',
    output: [{
      name: 'freeTree',
      file: pkg.browser,
      format: 'umd'
    }],
    // external: ['react', 'react-dom', 'rc-tree'],
    plugins: [
      resolve(),
      css(),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('development') 
      }),
      babel({
        presets: [['@babel/preset-env', {
          targets: {
            "ie": "11"
          }
        }], '@babel/preset-react'],
        exclude: 'node_modules/**'
      }),
      commonjs()
    ]
  }
  // {
  //   input: 'src/main.js',
  //   // external: ['react', 'react-dom', 'rc-tree'],
  //   plugins: [
  //     resolve(),
  //     css(),
  //     babel({
  //       presets: ['@babel/preset-react'],
  //       babelHelpers: 'bundled'
  //     }),
  //     commonjs()
  //   ],
  //   output: [
  //     { 
  //       file: pkg.main, 
  //       format: 'cjs',
  //       plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
  //     },
  //     {
  //       file: pkg.module,
  //       format: 'es',
  //       plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
  //     }
  //   ]
  // }