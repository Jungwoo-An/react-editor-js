import { EditorJSFactory } from '@react-editor-js/core'

import { TinyServerEditorJS } from './TinyServerEditorJS'

export class ServerEditorJSFactory implements EditorJSFactory {
  create() {
    return new TinyServerEditorJS() as any
  }
}
