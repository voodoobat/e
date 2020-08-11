import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/js/index.js',
  plugins: [
    resolve(),
    commonjs(),
    uglify(),
    babel({
      presets: ['@babel/preset-env'],
      babelHelpers: 'bundled'
    })
  ],
  
  output: {
    sourcemap: true,
    dir: 'public/assets/',
    format: 'iife'
  }
}
