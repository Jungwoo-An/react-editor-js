import React from 'react'
import { EditorConfig } from '@editorjs/editorjs'

import { EditorCoreFactory } from './factory'
import { EditorCore } from './editor-core'

export interface Props extends Omit<EditorConfig, 'data'> {
  factory: EditorCoreFactory

  holder?: string
  children?: React.ReactElement
  value?: EditorConfig['data']
  defaultValue?: EditorConfig['data']

  onInitialize?: (core: EditorCore) => void
}

export type WrapperProps = Omit<Props, 'factory'>
