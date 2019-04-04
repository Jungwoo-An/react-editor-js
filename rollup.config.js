import typescript from 'rollup-plugin-typescript2';

const FILENAME = 'dist/react-editor-js';

const plugins = [typescript()];

export default {
  input: 'lib/index.ts',
  output: [
    {
      file: `${FILENAME}.umd.js`,
      name: 'LineChart',
      format: 'umd',
      sourcemap: true,
    },
    {
      file: `${FILENAME}.es.js`,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins,
};
