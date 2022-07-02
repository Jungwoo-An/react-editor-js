import EditorJS, { EditorConfig, OutputData } from '@editorjs/editorjs'
import Paragraph from '@editorjs/paragraph'
import { EditorCore } from '@react-editor-js/core'

export class ClientEditorCore implements EditorCore {
  private _editorJS: EditorJS

  constructor({ tools, ...config }: EditorConfig) {
    const extendTools = {
      // default tools
      paragraph: {
        class: Paragraph,
        inlineToolbar: true,
      },
      ...tools,
    }

    this._editorJS = new EditorJS({
      tools: extendTools,
      ...config,
    })
  }

  public get dangerouslyLowLevelInstance() {
    return this._editorJS
  }

  public async clear() {
    await this._editorJS.clear()
  }

  public async save() {
    return this._editorJS.save()
  }

  public async destroy() {
    await this._editorJS.isReady
    await this._editorJS.destroy()
  }

  public async render(data: OutputData) {
    await this._editorJS.render(data)
  }
}
