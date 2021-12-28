import React from 'react'
import {
  Props as ReactEditorJSProps,
  ReactEditorJS,
} from '@react-editor-js/core'

import { ServerEditorJSFactory } from './ServerEditorJSFactory'

export type Props = Omit<ReactEditorJSProps, 'factory'>

function ReactEditorJSServer(props: Props) {
  const factory = React.useMemo(() => new ServerEditorJSFactory(), [])

  return <ReactEditorJS factory={factory} {...props} />
}

export default ReactEditorJSServer
