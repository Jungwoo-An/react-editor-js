import * as React from 'react'

import EditorJS from '@editorjs/editorjs'

export interface EditorJsProps {
  enableReInitialize?: boolean
  onBlocksChange?: (blocks: EditorJS.OutputData['blocks']) => void
}

export type Props = Readonly<EditorJS.EditorConfig> & Readonly<EditorJsProps>

class EditorJsContainer extends React.PureComponent<Props> {
  instance?: EditorJS

  componentDidMount () {
    this.initEditor()
  }

  componentDidUpdate () {
    const { enableReInitialize } = this.props
    if (!enableReInitialize) {
      return
    }

    this.destroyEditor()
    this.initEditor()
  }

  componentWillUnmount () {
    this.destroyEditor()
  }

  initEditor () {
    this.instance = new EditorJS({
      ...this.props,

      holderId: 'editor-js',
      onChange: this.handleChange
    })
  }

  destroyEditor () {
    if (!this.instance) {
      return
    }

    this.instance.destroy()
    this.instance = undefined
  }

  handleChange = async () => {
    if (!this.instance) {
      return
    }

    const { onBlocksChange } = this.props
    if (onBlocksChange) {
      const data = await this.instance.saver.save()
      onBlocksChange(data.blocks)
    }
  }

  render () {
    return <div id="editor-js" />
  }
}

export default EditorJsContainer
