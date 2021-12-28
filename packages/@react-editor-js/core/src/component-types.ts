import { JSX } from 'react'
import EditorJS, { EditorConfig } from '@editorjs/editorjs'

import { EditorJSFactory } from './factory'

export interface Props extends Omit<EditorConfig, 'data'> {
  holder?: string
  children?: JSX.Element | JSX.Element[]
  value?: EditorConfig['data']
  defaultValue?: EditorConfig['data']
  factory?: EditorJSFactory

  onInitialize?: (editorJS: EditorJS) => void
}

export type ReactEditorJSComponent = (props: Props) => JSX.Element
