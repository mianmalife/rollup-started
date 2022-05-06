import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
// import { terser } from 'rollup-plugin-terser'import 
import css from 'rollup-plugin-import-css'
import replace from '@rollup/plugin-replace'
import pkg from './package.json'

export default {
    input: 'src/main.js',
    output: [{
      name: 'commonTool',
      file: pkg.browser,
      format: 'umd'
    },{
      file: pkg.module,
      format: 'es'
    },{
      file: pkg.main,
      format: 'cjs'
    }],
    plugins: [
      resolve(),
      css(),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify('development') 
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
      }),
      commonjs()
    ]
  }