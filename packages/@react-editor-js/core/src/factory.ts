import EditorJS, { EditorConfig } from '@editorjs/editorjs'

export interface EditorJSFactory {
  create(config?: EditorConfig | string): EditorJS
}
