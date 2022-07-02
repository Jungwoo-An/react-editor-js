import { EditorConfig, OutputData } from '@editorjs/editorjs'
import { EditorCore } from '@react-editor-js/core'

export class ServerEditorCore implements EditorCore {
  private _memoizedData: OutputData

  constructor({ data }: EditorConfig) {
    if (data) {
      this._memoizedData = data
    }
  }

  public get dangerouslyLowLevelInstance() {
    return null
  }

  public async clear() {}

  public async save() {
    return this._memoizedData
  }

  public async destroy() {}

  public async render() {}
}
