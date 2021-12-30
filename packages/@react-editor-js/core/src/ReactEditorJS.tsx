import React from 'react'

import { Props } from './component-types'
import { EditorCore } from './editor-core'

function ReactEditorJS({
  factory,
  holder,
  defaultValue,
  children,
  value,

  onInitialize,
  ...restProps
}: Props): React.ReactElement {
  const memoizedHolder = React.useRef(
    holder ?? `react-editor-js-${Date.now().toString(16)}`
  )

  const editorJS = React.useRef<EditorCore | null>(null)

  React.useEffect(() => {
    editorJS.current = factory({
      holder: memoizedHolder.current,
      ...(defaultValue && { data: defaultValue }),
      ...restProps,
    })

    onInitialize?.(editorJS.current)

    return () => {
      editorJS.current?.destroy()
    }
  }, [])

  React.useEffect(() => {
    if (value) {
      editorJS.current?.render(value)
    }
  }, [value])

  return children || <div id={memoizedHolder.current} />
}

export default ReactEditorJS
