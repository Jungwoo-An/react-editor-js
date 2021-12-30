import React from 'react'
import {
  Props as ReactEditorJSProps,
  ReactEditorJS,
} from '@react-editor-js/core'

import { ClientEditorCore } from './client-editor-core'
import { EditorConfig } from '@editorjs/editorjs'

export type Props = Omit<ReactEditorJSProps, 'factory'>

function ReactEditorJSClient(props: Props) {
  const factory = React.useCallback(
    (config: EditorConfig) => new ClientEditorCore(config),
    []
  )

  return <ReactEditorJS factory={factory} {...props} />
}

export default ReactEditorJSClient
