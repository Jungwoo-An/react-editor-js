import React from 'react'
import Paragraph from '@editorjs/paragraph'

import { Props } from './component-types'
import { EditorCore } from './editor-core'

function ReactEditorJS({
  factory,
  holder,
  tools,
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
    const extendTools = {
      // default tools
      paragraph: {
        class: Paragraph,
        inlineToolbar: true,
      },
      ...tools,
    }

    editorJS.current = factory({
      tools: extendTools,
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
