import * as React from 'react'

import EditorJS, { OutputData } from '@editorjs/editorjs'
import Paragraph from '@editorjs/paragraph'

export interface EditorJsProps {
  enableReInitialize?: boolean
  tools?: EditorJS.EditorConfig['tools']

  instanceRef?: (instance: EditorJS) => void
}

export type Props = Readonly<EditorJS.EditorConfig> & Readonly<EditorJsProps>

class EditorJsContainer extends React.PureComponent<Props> {
  instance?: EditorJS

  componentDidMount() {
    this.initEditor()
  }

  async componentDidUpdate() {
    const { enableReInitialize, data } = this.props
    if (!enableReInitialize || !data) {
      return
    }

    this.changeData(data);
  }

  componentWillUnmount() {
    this.destroyEditor()
  }

  initEditor() {
    const {
      instanceRef,
      children,
      enableReInitialize,
      tools,
      ...props
    } = this.props

    const extendTools = {
      // default tools
      paragraph: {
        class: Paragraph,
        inlineToolbar: true
      },
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

  destroyEditor() {
    return new Promise((resolve, reject) => {
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
      return;
    }

    this.instance?.isReady.then(() => {
      this.instance!.clear();
      this.instance!.render(data);
    }).catch(() => {
      // do nothing
    });
  }

  render() {
    const { children } = this.props

    return children || <div id="editor-js" />
  }
}

export default EditorJsContainer
