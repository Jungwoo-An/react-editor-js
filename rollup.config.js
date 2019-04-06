import typescript from 'rollup-plugin-typescript2'

const FILENAME = 'dist/react-editor-js'

const plugins = [typescript()]

export default {
  input: 'lib/index.ts',
  output: [
    {
      file: `${FILENAME}.umd.js`,
      name: 'LineChart',
      format: 'umd',
      sourcemap: true,
      globals: {
        react: 'React',
        '@editorjs/editorjs': 'EditorJS'
      }
    },
    {
      file: `${FILENAME}.es.js`,
      format: 'es',
      sourcemap: true
    }
  ],
  external: ['react', '@editorjs/editorjs'],
  plugins
}
