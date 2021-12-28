import React from 'react'
import { render, waitFor } from '@testing-library/react'

import ReactEditorJS from '../src/ReactEditorJS'
import { EditorJSStubFactory } from './EditorJSStubFactory'
import { Task } from './Task'

describe('ReactEditorJS', () => {
  it('should be able to set the holder', () => {
    const HOLDER = 'TEST_HOLDER'

    render(
      <ReactEditorJS factory={new EditorJSStubFactory()} holder={HOLDER} />
    )

    expect(document.querySelector(`#${HOLDER}`)).toBeTruthy()
  })

  it('should be able to set the custom element', async () => {
    const HOLDER = 'TEST_HOLDER'
    const TEST_ID = 'TEST_ID'
    const ELEMENT = <div id={HOLDER} data-testid={TEST_ID} />

    const { getByTestId } = render(
      <ReactEditorJS factory={new EditorJSStubFactory()} holder={HOLDER}>
        {ELEMENT}
      </ReactEditorJS>
    )

    await waitFor(() => getByTestId(TEST_ID))

    expect(getByTestId(TEST_ID)).toBeTruthy()
  })

  it('should pass editor-js instance as parameter on onInitialize', async () => {
    const factory = new EditorJSStubFactory()
    const task = new Task()
    const handleInitialize = jest.fn(() => {
      task.done()
    })

    render(<ReactEditorJS factory={factory} onInitialize={handleInitialize} />)

    await task.wait()

    expect(handleInitialize).toHaveBeenCalledWith(factory.instance)
  })

  it('should update data when value changed', async () => {
    const OLD_VALUE = {
      blocks: [],
    }

    const NEW_VALUE = {
      blocks: ['NEW_VALUE'],
    }

    const factory = new EditorJSStubFactory()

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
    expect(factory.instance.value).toBe(OLD_VALUE)

    await renderEditor(NEW_VALUE)
    expect(factory.instance.value).toBe(NEW_VALUE)
  })
})
