import * as React from 'react'

import EditorJS from '@editorjs/editorjs'

import { EDITOR_JS_PLUGINS } from './constants'

export interface EditorJsProps {
  enableReInitialize?: boolean

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
    this.instance = new EditorJS({
      tools: EDITOR_JS_PLUGINS,
      holderId: 'editor-js',

      ...this.props
    })

    const { instanceRef } = this.props
    if (instanceRef) {
      instanceRef(this.instance)
    }
  }

  destroyEditor () {
    if (!this.instance) {
      return
    }

    this.instance.destroy()
    this.instance = undefined
  }

  render () {
    return <div id="editor-js" />
  }
}

export default EditorJsContainer
