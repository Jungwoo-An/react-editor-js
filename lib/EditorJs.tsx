import * as React from 'react'

import EditorJS from '@editorjs/editorjs'
import Paragraph from '@editorjs/paragraph'

export interface EditorJsProps {
  enableReInitialize?: boolean
  tools?: EditorJS.EditorConfig['tools'];

  instanceRef?: (instance: EditorJS) => void
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
    const { instanceRef, children, enableReInitialize, tools, ...props } = this.props
    const extendTools = {
      // default tools
      paragraph: Paragraph,
      ...tools
    }

    this.instance = new EditorJS({
      tools: extendTools,
      holder: 'editor-js',

      ...props
    })

    if (instanceRef) {
      instanceRef(this.instance)
    }
  }

  destroyEditor () {
    if (this.instance) {
      this.instance.isReady.then(() => {
        if (this.instance) {
          this.instance.destroy()
          this.instance = undefined
        }
      })
    }
  }

  render () {
    const { children } = this.props

    return children || <div id="editor-js" />
  }
}

export default EditorJsContainer
