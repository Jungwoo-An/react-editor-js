# react-editor-js

[![npm version](https://badge.fury.io/js/react-editor-js.svg)](https://badge.fury.io/js/react-editor-js)

The unofficial [editor-js](https://editorjs.io/) component for React

DEMO: [CodeSandbox](https://codesandbox.io/s/react-editor-js-q8g0z)

## Supported Official Plugin

- [x] Paragraph (default)
- [x] Embed
- [x] Table
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
npm install --save-dev react-editor-js @editorjs/editorjs @editorjs/paragraph
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

### How can I install plugins?

There is an only Paragraph block already included in Editor.js. Probably you want to use several Block Tools that should be installed and connected.

To add more Block Tools, simply add them to your repo and pass them as `tools`-property to your editor:

```
npm install --save-dev @editorjs/checklist
```

```js
import EditorJs from 'react-editor-js';
import CheckList from '@editorjs/checklist';

<EditorJs data={data} tools={{ checkList: CheckList }} />;
```

We recommend to create a `tools.js` file and export your tools as a constant. Here is an example using all of the default plugins:

```
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'

export const EDITOR_JS_TOOLS = {
  embed: Embed,
  table: Table,
  paragraph: Paragraph,
  list: List,
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  header: Header,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage
}
```

```
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './tools'
<EditorJs data={data} tools={EDITOR_JS_TOOLS} />;
```


You can read more about plugins/tools at [editor-js: Tools installation](https://editorjs.io/getting-started#tools-installation)

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
