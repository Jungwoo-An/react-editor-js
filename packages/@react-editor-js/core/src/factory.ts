import { EditorConfig } from '@editorjs/editorjs'

import { EditorCore } from './editor-core'

export type EditorCoreFactory = (config: EditorConfig) => EditorCore
