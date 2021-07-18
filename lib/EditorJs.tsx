import * as React from 'react'

import EditorJS, { OutputData, BlockToolData, API } from '@editorjs/editorjs'
import Paragraph from '@editorjs/paragraph'

export interface EditorJsProps {
  enableReInitialize?: boolean

  instanceRef?: (instance: EditorJS) => void

  onChange?: (api: API, data?: OutputData) => void
  onReady?: (instance?: EditorJS) => void
  onCompareBlocks?: (
    newBlocks: BlockToolData | undefined,
    oldBlocks: BlockToolData | undefined
  ) => boolean
}

export type Props = Readonly<EditorJS.EditorConfig> & Readonly<EditorJsProps>

class EditorJsContainer extends React.PureComponent<Props> {
  instance?: EditorJS

  holder: string = `editor-js-${(
    Math.floor(Math.random() * 1000) + Date.now()
  ).toString(36)}`

  componentDidMount() {
    this.initEditor()
  }

  async componentDidUpdate({ readOnly: prevReadOnly }: Props) {
    const { enableReInitialize, data, readOnly } = this.props
    if (prevReadOnly !== readOnly) {
      // Toggle readOnly mode
      this.instance?.readOnly.toggle(readOnly)
    }

    if (!enableReInitialize || !data) {
      return
    }

    this.changeData(data)
  }

  componentWillUnmount() {
    this.destroyEditor()
  }

  handleChange = async (api: API) => {
    const { onCompareBlocks, onChange, data } = this.props
    if (!onChange) {
      return
    }

    const newData = await this.instance!.save()
    const isBlocksEqual = onCompareBlocks?.(newData.blocks, data?.blocks)

    if (isBlocksEqual) {
      return
    }

    onChange(api, newData)
  }

  handleReady = () => {
    const { onReady } = this.props
    if (!onReady) {
      return
    }

    onReady(this.instance)
  }

  initEditor() {
    const {
      instanceRef,
      children,
      enableReInitialize,
      tools,
      onChange,
      onReady,
      ...props
    } = this.props

    const extendTools = {
      // default tools
      paragraph: {
        class: Paragraph,
        inlineToolbar: true,
      },
      ...tools,
    }

    this.instance = new EditorJS({
      tools: extendTools,
      holder: this.holder,

      ...(onReady && {
        onReady: this.handleReady,
      }),

      ...(onChange && {
        onChange: this.handleChange,
      }),
      ...props,
    })

    if (instanceRef) {
      instanceRef(this.instance)
    }
  }

  destroyEditor() {
    return new Promise<void>((resolve, reject) => {
      if (!this.instance) {
        resolve()
        return
      }

      this.instance.isReady
        .then(() => {
          if (this.instance) {
            this.instance.destroy()
            this.instance = undefined
          }

          resolve()
        })
        .catch(reject)
    })
  }

  changeData(data: OutputData) {
    if (!this.instance) {
      return
    }

    this.instance?.isReady
      .then(() => {
        this.instance!.clear()
        this.instance!.render(data)
      })
      .catch(() => {
        // do nothing
      })
  }

  render() {
    const { children } = this.props

    return children || <div id={this.holder} />
  }
}

export default EditorJsContainer
