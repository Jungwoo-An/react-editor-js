import { OutputData, BlockToolData, ToolConfig } from '@editorjs/editorjs'

export interface EditorCore {
  destroy(): Promise<void>

  clear(): Promise<void>

  save(): Promise<OutputData>

  render(data: OutputData): Promise<void>

  toggleReadOnly(): Promise<boolean>

  insertBlock(type?: string, data?: BlockToolData, config?: ToolConfig, index?: number, needToFocus?: boolean): Promise<void>

  updateBlock(id?: string, data?: BlockToolData): Promise<void>

  deleteBlock(index?: number): Promise<void>

  setToFirstBlock(position: string, offset: number): Promise<boolean>

  setToLastBlock(position: string, offset: number): Promise<boolean>

  setToBlock(index: number, position: string, offset: number): Promise<boolean>

  focus(atEnd: boolean): Promise<void>

  openToolbar(): Promise<void>

  closeToolbar(): Promise<void>
}
