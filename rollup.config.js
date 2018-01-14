import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';


export default {
  input: 'src/index.js',
  output: [
    {
      format: 'cjs',
      file: 'dist/the-answer.js',
      sourcemap: true
    },
    {
      format: 'es',
      file: 'dist/the-answer.mjs',
      sourcemap: true
    }
  ],
  external: ['constant', 'constants'],
  plugins: [
    json(),
    babel(),
  ]
};
