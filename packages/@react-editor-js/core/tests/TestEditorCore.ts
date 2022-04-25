import { OutputData } from '@editorjs/editorjs'

import { EditorCore } from '../src'

export class TestEditorCore implements EditorCore {
  private _data: OutputData | null = null

  private _readOnly: boolean = false

  constructor() {}

  public get data() {
    return this._data
  }

  public get readOnly() {
    return this._readOnly
  }

  public async clear() {}

  public async save() {
    return {
      blocks: [],
    }
  }

  public async destroy() {}

  public async render(data: OutputData) {
    this._data = data
  }

  public async toggleReadOnly() {
    this._readOnly = !this._readOnly
    return this._readOnly
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
