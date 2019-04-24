# react-editor-js

The unofficial [editor-js](https://editorjs.io/) component for React

DEMO: [CodeSandbox](https://codesandbox.io/s/7wr6jp2891)

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

### API

Allow all options of [editor-js](https://github.com/codex-team/editor.js/blob/master/types/configs/editor-config.d.ts)

| Name               | Type    | Description                                   |
| ------------------ | ------- | --------------------------------------------- |
| enableReInitialize | Boolean | editor-js rerendering when componentDidUpdate |

### How to access editor-js instance?

You can access using instanceRef

```js
async handleSave() {
  await this.editorInstance.save();
}

componentDidMount() {
  this.editorInstance // access editor-js
}

render() {
  return <EditorJs instanceRef={instance => this.editorInstance = instance} data={data} />
}
```
