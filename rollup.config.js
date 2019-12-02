import typescript from 'rollup-plugin-typescript2'

const FILENAME = 'dist/react-editor-js'

const plugins = [typescript()]

export default {
  input: 'lib/index.ts',
  output: [
    {
      file: `${FILENAME}.umd.js`,
      name: 'ReactEditorJs',
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
  external: [
    'react',
    '@editorjs/editorjs',
    '@editorjs/checklist',
    '@editorjs/code',
    '@editorjs/delimiter',
    '@editorjs/editorjs',
    '@editorjs/embed',
    '@editorjs/header',
    '@editorjs/image',
    '@editorjs/inline-code',
    '@editorjs/link',
    '@editorjs/list',
    '@editorjs/marker',
    '@editorjs/paragraph',
    '@editorjs/quote',
    '@editorjs/raw',
    '@editorjs/simple-image',
    '@editorjs/table',
    '@editorjs/warning'
  ],
  plugins
}
