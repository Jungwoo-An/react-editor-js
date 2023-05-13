import { OutputData } from '@editorjs/editorjs'

export interface EditorCore {
  destroy(): Promise<void>

  clear(): Promise<void>

  save(): Promise<OutputData>

  render(data: OutputData): Promise<void>

  renderFromHTML(html: string): Promise<void>

  get dangerouslyLowLevelInstance(): any | null
}
