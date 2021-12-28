import EditorJS, { EditorConfig } from '@editorjs/editorjs'

import { EditorJSFactory } from './factory'

export interface Props extends Omit<EditorConfig, 'data'> {
  factory: EditorJSFactory

  holder?: string
  children?: JSX.Element | JSX.Element[]
  value?: EditorConfig['data']
  defaultValue?: EditorConfig['data']

  onInitialize?: (editorJS: EditorJS) => void
}
