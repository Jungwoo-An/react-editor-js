import { WrapperProps } from '@react-editor-js/core'

export function createReactEditorJS(): (props: WrapperProps) => JSX.Element {
  if (typeof window !== 'undefined') {
    const Component = require('@react-editor-js/client')
    return Component.default || Component
  } else {
    const Component = require('@react-editor-js/server')
    return Component.default || Component
  }
}
