import { JSX } from 'react'
import EditorJS, { EditorConfig } from '@editorjs/editorjs'

export interface Props extends EditorConfig {
  holder?: string
  children?: JSX.Element | JSX.Element[]
  enableReinitializeData?: boolean

  onInitialize?: (editorJS: EditorJS) => void
}

export type ReactEditorJSComponent = (props: Props) => JSX.Element
