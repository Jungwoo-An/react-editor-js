import React from 'react'
import {
  Props as ReactEditorJSProps,
  ReactEditorJS,
} from '@react-editor-js/core'

import { ClientEditorJSFactory } from './ClientEditorJSFactory'

export type Props = Omit<ReactEditorJSProps, 'factory'>

function ReactEditorJSClient(props: Props) {
  const factory = React.useMemo(() => new ClientEditorJSFactory(), [])

  return <ReactEditorJS factory={factory} {...props} />
}

export default ReactEditorJSClient
