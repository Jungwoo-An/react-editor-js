import EditorJS, { EditorConfig, OutputData, BlockToolData, ToolConfig } from '@editorjs/editorjs'
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

  public async clear() {
    await this._editorJS.clear()
  }

  public async save() {
    return this._editorJS.save()
  }

  public async destroy() {
    await this._editorJS.destroy()
  }

  public async render(data: OutputData) {
    await this._editorJS.render(data)
  }

  public async toggleReadOnly() {
    return this._editorJS.readOnly.toggle()
  }

  public async insertBlock(type?: string, data?: BlockToolData, config?: ToolConfig, index?: number, needToFocus?: boolean) {
    return this._editorJS.blocks.insert(type, data, config, index, needToFocus)
  }

  public async updateBlock(id?: string, data?: BlockToolData) {
    return this._editorJS.blocks.update(id, data)
  }

  public async deleteBlock(index?: number) {
    return this._editorJS.blocks.delete(index)
  }
}
