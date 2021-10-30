import { JSX } from 'react'
import EditorJS, { EditorConfig } from '@editorjs/editorjs'

export interface Props extends Omit<EditorConfig, 'data'> {
  holder?: string
  children?: JSX.Element | JSX.Element[]
  enableReinitializeData?: boolean
  defaultValue?: EditorConfig['data']

  onInitialize?: (editorJS: EditorJS) => void
}

export type ReactEditorJSComponent = (props: Props) => JSX.Element
