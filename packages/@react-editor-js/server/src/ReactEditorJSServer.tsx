import React from 'react'
import { WrapperProps as Props, ReactEditorJS } from '@react-editor-js/core'
import { EditorConfig } from '@editorjs/editorjs'

import { ServerEditorCore } from './server-editor-core'

function ReactEditorJSServer(props: Props) {
  const factory = React.useCallback(
    (config: EditorConfig) => new ServerEditorCore(config),
    []
  )

  return <ReactEditorJS factory={factory} {...props} />
}

export default ReactEditorJSServer
