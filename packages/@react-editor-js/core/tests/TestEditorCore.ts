import { OutputData } from '@editorjs/editorjs'

import { EditorCore } from '../src'

export class TestEditorCore implements EditorCore {
  private _data: OutputData | null = null

  constructor() {}

  public get data() {
    return this._data
  }

  public get dangerouslyLowLevelInstance() {
    return null
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
}
