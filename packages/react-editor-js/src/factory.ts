export function createReactEditorJS() {
  if (typeof window !== 'undefined') {
    return require('@react-editor-js/client')
  } else {
    return require('@react-editor-js/server')
  }
}
