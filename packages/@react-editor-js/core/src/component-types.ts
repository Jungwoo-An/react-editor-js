import React from 'react'
import EditorJS, { EditorConfig } from '@editorjs/editorjs'

import { EditorJSFactory } from './factory'

export interface Props extends Omit<EditorConfig, 'data'> {
  factory: EditorJSFactory

  holder?: string
  children?: React.ReactElement
  value?: EditorConfig['data']
  defaultValue?: EditorConfig['data']

  onInitialize?: (editorJS: EditorJS) => void
}
