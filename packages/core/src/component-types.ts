import { JSX } from 'react'
import { EditorConfig } from '@editorjs/editorjs'

export interface Props extends EditorConfig {
  holder?: string
  children?: JSX.Element | JSX.Element[]
  enableReinitializeData?: boolean
}

export type ReactEditorJSComponent = (props: Props) => JSX.Element
