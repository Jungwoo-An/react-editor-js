import React from 'react'
import {
  Props as ReactEditorJSProps,
  ReactEditorJS,
} from '@react-editor-js/core'
import { EditorConfig } from '@editorjs/editorjs'

import { ServerEditorCore } from './server-editor-core'

export type Props = Omit<ReactEditorJSProps, 'factory'>

function ReactEditorJSServer(props: Props) {
  const factory = React.useCallback(
    (config: EditorConfig) => new ServerEditorCore(config),
    []
  )

  return <ReactEditorJS factory={factory} {...props} />
}

export default ReactEditorJSServer
