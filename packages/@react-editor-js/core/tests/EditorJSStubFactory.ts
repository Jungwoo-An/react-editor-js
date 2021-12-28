import EditorJS from '@editorjs/editorjs'

import { EditorJSFactory } from '../src/factory'
import { EditorJSStub } from './EditorJSStub'

export class EditorJSStubFactory implements EditorJSFactory {
  private _instance: EditorJSStub | null = null

  public get instance(): EditorJSStub {
    return this._instance
  }

  public create() {
    this._instance = new EditorJSStub()

    return this._instance as any
  }
}
