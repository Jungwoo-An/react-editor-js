import path from 'path'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import copy from 'rollup-plugin-copy'

function createRollupConfig({ basePath }) {
  return {
    input: path.join(basePath, 'src/index.ts'),
    output: [
      {
        file: path.join(basePath, 'dist', `${path.basename(basePath)}.cjs.js`),
        format: 'cjs',
      },
      {
        file: path.join(basePath, 'dist', `${path.basename(basePath)}.js`),
        format: 'es',
      },
    ],
    plugins: [
      typescript({
        tsconfig: path.join(basePath, 'tsconfig.json'),
        cwd: basePath,
        clean: true,
      }),
      resolve({
        extensions: ['.ts', '.js'],
      }),
      copy({
        targets: [
          {
            src: path.resolve('./README.md'),
            dest: basePath,
          },
        ],
      }),
    ],
    external: ['react', '@editorjs/editorjs', '@editorjs/paragraph'],
  }
}

export default [
  createRollupConfig({
    basePath: path.resolve('./packages/@react-editor-js/core'),
  }),
  createRollupConfig({
    basePath: path.resolve('./packages/@react-editor-js/client'),
  }),
  createRollupConfig({
    basePath: path.resolve('./packages/@react-editor-js/server'),
  }),
  createRollupConfig({ basePath: path.resolve('./packages/react-editor-js') }),
]
