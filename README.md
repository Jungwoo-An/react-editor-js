# react-editor-js

[![npm version](https://badge.fury.io/js/react-editor-js.svg)](https://badge.fury.io/js/react-editor-js)

The unofficial [editor-js](https://editorjs.io/) component for React

DEMO: [CodeSandbox](https://codesandbox.io/s/react-editor-js-q8g0z)

## Supported Official Plugin (default)

- [x] Embed
- [x] Table
- [x] Paragraph
- [x] List
- [x] Warning
- [x] Code
- [x] Link
- [x] Image
- [x] Raw
- [x] Header
- [x] Quote
- [x] Marker
- [x] CheckList
- [x] Delimiter
- [x] InlineCode
- [x] SimpleImage

## Getting Started

### Install via npm (or yarn)

```bash
# editorjs and official plugins
npm install --save-dev react-editor-js @editorjs/checklist @editorjs/code @editorjs/delimiter @editorjs/editorjs @editorjs/embed @editorjs/header @editorjs/image @editorjs/inline-code @editorjs/link @editorjs/list @editorjs/marker @editorjs/paragraph @editorjs/quote @editorjs/raw @editorjs/simple-image @editorjs/table @editorjs/warning
```

### Usage

```js
import EditorJs from 'react-editor-js';

<EditorJs data={data} />;
```

## API

Allow all options of [editor-js](https://github.com/codex-team/editor.js/blob/master/types/configs/editor-config.d.ts)

| Name               | Type    | Description                                   |
| ------------------ | ------- | --------------------------------------------- |
| enableReInitialize | Boolean | editor-js rerendering when componentDidUpdate |

## FAQ

### How do I use custom element?

It's simpleeeee

```js
render() {
  return (
    <EditorJs holder="custom">
      <div id="custom" />
    </EditorJs>
  );
}
```

### How to access editor-js instance?

You can access using instanceRef

```js
async handleSave() {
  const savedData = await this.editorInstance.save();
}

componentDidMount() {
  this.editorInstance // access editor-js
}

render() {
  return <EditorJs instanceRef={instance => this.editorInstance = instance} data={data} />
}
```

### Haven't received data from server (when use Link)

You should set linkTool [config](https://github.com/editor-js/link#usage). 💪🏻

```tsx
import LinkTool from '@editorjs/link'

render() {
  <EditorJs
    data={data}
    tools={{
      linkTool: {
        class: LinkTool,
        config: {
          endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
        }
      }
    }}
  />
}
```
