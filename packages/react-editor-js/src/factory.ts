import ReactEditorJSForClient from '@react-editor-js/client'
import ReactEditorJSForServer from '@react-editor-js/server'

export function createReactEditorJS() {
  if (typeof window !== 'undefined') {
    return ReactEditorJSForClient
  } else {
    return ReactEditorJSForServer
  }
}
