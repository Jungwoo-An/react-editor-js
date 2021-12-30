import { EditorConfig, OutputData } from '@editorjs/editorjs'
import { EditorCore } from '@react-editor-js/core'

export class ServerEditorCore implements EditorCore {
  private _memoizedData: OutputData

  constructor({ data }: EditorConfig) {
    if (data) {
      this._memoizedData = data
    }
  }

  async clear() {}

  async save() {
    return this._memoizedData
  }

  async destroy() {}

  async render() {}
}
