export function createReactEditorJS() {
  if (typeof window !== 'undefined') {
    const Component = require('@react-editor-js/client')
    return Component.default || Component
  } else {
    const Component = require('@react-editor-js/server')
    return Component.default || Component
  }
}
