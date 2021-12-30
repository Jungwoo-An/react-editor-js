import React from 'react'
import { render, waitFor } from '@testing-library/react'

import ReactEditorJS from '../src/ReactEditorJS'

import { TestEditorCore } from './TestEditorCore'
import { Task } from './Task'

describe('ReactEditorJS', () => {
  it('should be able to set the holder', () => {
    const HOLDER = 'TEST_HOLDER'

    const factory = () => new TestEditorCore()

    render(<ReactEditorJS factory={factory} holder={HOLDER} />)

    expect(document.querySelector(`#${HOLDER}`)).toBeTruthy()
  })

  it('should be able to set the custom element', async () => {
    const HOLDER = 'TEST_HOLDER'
    const TEST_ID = 'TEST_ID'
    const ELEMENT = <div id={HOLDER} data-testid={TEST_ID} />

    const factory = () => new TestEditorCore()

    const { getByTestId } = render(
      <ReactEditorJS factory={factory} holder={HOLDER}>
        {ELEMENT}
      </ReactEditorJS>
    )

    await waitFor(() => getByTestId(TEST_ID))

    expect(getByTestId(TEST_ID)).toBeTruthy()
  })

  it('should pass editor-js instance as parameter on onInitialize', async () => {
    const editorCore = new TestEditorCore()
    const factory = () => editorCore

    const task = new Task()
    const handleInitialize = jest.fn(() => {
      task.done()
    })

    render(<ReactEditorJS factory={factory} onInitialize={handleInitialize} />)

    await task.wait()

    expect(handleInitialize).toHaveBeenCalledWith(editorCore)
  })

  it('should update data when value changed', async () => {
    const OLD_VALUE = {
      blocks: [],
    }

    const NEW_VALUE = {
      blocks: ['NEW_VALUE'],
    }

    const editorCore = new TestEditorCore()
    const factory = () => editorCore

    async function renderEditor(value) {
      const task = new Task()
      const handleInitialize = jest.fn(() => {
        task.done()
      })

      const result = render(
        <ReactEditorJS
          value={value}
          factory={factory}
          onInitialize={handleInitialize}
        />
      )

      await task.wait()

      return result
    }

    await renderEditor(OLD_VALUE)
    expect(editorCore.data).toBe(OLD_VALUE)

    await renderEditor(NEW_VALUE)
    expect(editorCore.data).toBe(NEW_VALUE)
  })
})
