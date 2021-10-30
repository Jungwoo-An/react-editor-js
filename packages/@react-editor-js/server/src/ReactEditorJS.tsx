import React from 'react'
import { ReactEditorJSComponent, Props } from '@react-editor-js/core'

const ReactEditorJS: ReactEditorJSComponent = function ({
  holder,
  children,
}: Props) {
  const memoizedHolder = React.useRef(
    holder ?? `react-editor-js-${Date.now().toString(16)}`
  )

  // TODO: Implement output data to html renderer

  return children || <div id={memoizedHolder.current} />
}

export default ReactEditorJS
