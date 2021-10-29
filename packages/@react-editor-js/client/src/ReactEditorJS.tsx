import React from 'react'
import { ReactEditorJSComponent, Props } from '@react-editor-js/core'
import EditorJS from '@editorjs/editorjs'
import Paragraph from '@editorjs/paragraph'

const ReactEditorJS: ReactEditorJSComponent = function ReactEditorJS({
  holder,
  tools,
  data,
  children,
  enableReinitializeData,
  ...restProps
}: Props) {
  const memoizedHolder = React.useRef(
    holder ?? `react-editor-js-${Date.now().toString(16)}`
  )

  const editorJS = React.useRef<EditorJS | null>(null)

  React.useEffect(() => {
    const extendTools = {
      // default tools
      paragraph: {
        class: Paragraph,
        inlineToolbar: true,
      },
      ...tools,
    }

    editorJS.current = new EditorJS({
      tools: extendTools,
      holder: memoizedHolder.current,
      data,
      ...restProps,
    })

    return () => {
      editorJS.current?.destroy()
    }
  }, [])

  React.useEffect(() => {
    if (enableReinitializeData) {
      editorJS.current?.blocks.render(data)
    }
  }, [enableReinitializeData, data])

  return children || <div id={memoizedHolder.current} />
}

export default ReactEditorJS
