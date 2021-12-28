import EditorJS, { EditorConfig } from '@editorjs/editorjs'
import { EditorJSFactory } from '@react-editor-js/core'

export class ClientEditorJSFactory implements EditorJSFactory {
  create(config?: EditorConfig | string) {
    return new EditorJS(config)
  }
}
