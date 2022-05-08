import React from 'react'
import { WrapperProps as Props, ReactEditorJS } from '@react-editor-js/core'

import { ClientEditorCore } from './client-editor-core'
import { EditorConfig } from '@editorjs/editorjs'

function ReactEditorJSClient(props: Props) {
  const factory = React.useCallback(
    (config: EditorConfig) => new ClientEditorCore(config),
    []
  )

  return <ReactEditorJS factory={factory} {...props} />
}

export default ReactEditorJSClient
