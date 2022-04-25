import { EditorConfig, OutputData } from '@editorjs/editorjs'
import { EditorCore } from '@react-editor-js/core'

export class ServerEditorCore implements EditorCore {
  private _memoizedData: OutputData

  constructor({ data }: EditorConfig) {
    if (data) {
      this._memoizedData = data
    }
  }

  public async clear() {}

  public async save() {
    return this._memoizedData
  }

  public async destroy() {}

  public async render() {}

  public async toggleReadOnly() {
    return false
  }

  public async insertBlock() {}

  public async updateBlock() {}

  public async deleteBlock() {}

  public async setToFirstBlock() {
    return false
  }

  public async setToLastBlock() {
    return false
  }

  public async setToBlock() {
    return false
  }

  public async focus() {}

  public async openToolbar() {}

  public async closeToolbar() {}
}
