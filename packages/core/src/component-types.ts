import { JSX } from 'react'
import { EditorConfig } from '@editorjs/editorjs'

export interface Props extends EditorConfig {
  enableReInitialize?: boolean
}

export type ReactEditorJSComponent = (props: Props) => JSX.Element
