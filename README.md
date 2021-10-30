<div align="center">
  <img alt="Logo" src="static/react-editor-js.png" width="100%">
</div>

<br>

<div>

[![npm version](https://badge.fury.io/js/react-editor-js.svg)](https://badge.fury.io/js/react-editor-js)
![LICENSE](https://img.shields.io/npm/l/react-editor-js?color=blue)
[![Github Build Status](https://github.com/Jungwoo-An/react-editor-js/workflows/release/badge.svg)](https://github.com/Jungwoo-An/react-editor-js/actions)
[![Semantic Release enabled](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

</div>

## 🍞 DEMO

- [CodeSandbox](https://codesandbox.io/s/github/Jungwoo-An/react-editor-js/tree/master/examples)

## 🍀 Supported Official Plugin

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

## 🤟🏻 Getting Started

### Install via npm (or yarn)

```bash
npm install --save react-editor-js @editorjs/editorjs @editorjs/paragraph ...other plugins
```

```tsx
import EditorJs from 'react-editor-js'

<EditorJs defaultValue={blocks} />
```

## 📙 API

Allow all options of [editor-js](https://github.com/codex-team/editor.js/blob/master/types/configs/editor-config.d.ts)

| Name               | Type                                                                            | Description                                                                                                                                           |
| ------------------ | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaulltValue | OutputData                                                                         | Initial data when using editor js as [uncontrolled component](https://ko.reactjs.org/docs/uncontrolled-components.html). highly recommend it                                                                                                         |
| value | OutputData                                                                         | data when using editor js as [controlled component](https://ko.reactjs.org/docs/forms.html#controlled-components). <br> ⚠️ Don't use it with onChange prop as much as possible. Infinite loops can occur.                                                                                                         |
| onInitialize            | (editorJS?: EditorJS) => void                                                   | Call after editor-js is initialized                                                                                       |

## 🧐 FAQ

### How can I install plugins?

There is an only Paragraph block already included in Editor.js. Probably you want to use several Block Tools that should be installed and connected.

To add more Block Tools, simply add them to your repo and pass them as `tools`-property to your editor:

```
npm install --save-dev @editorjs/checklist
```

```tsx
import EditorJs from 'react-editor-js'
import CheckList from '@editorjs/checklist'

<EditorJs defaultValue={blocks} tools={{ checkList: CheckList }} />
```

We recommend to create a `tools.js` file and export your tools as a constant. Here is an example using all of the default plugins:

```ts
// tools.js
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
  simpleImage: SimpleImage,
}
```

```tsx
import EditorJs from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './tools'

<EditorJs defaultValue={blocks} tools={EDITOR_JS_TOOLS} />
```

You can read more about plugins/tools at [editor-js: Tools installation](https://editorjs.io/getting-started#tools-installation)

### How do I use custom element?

It's simpleeeee

```tsx
<EditorJs holder="custom">
  <div id="custom" />
</EditorJs>
```

### How to access editor-js instance?

You can access using instanceRef

```tsx
const editorJS = React.useRef(null)

const handleInitialize = React.useCallback((instance) => {
  editorJS.current = instance
}, [])

const handleSave = React.useCallback(() => {
  const savedData = await editorJS.current.save();
}, [])

<EditorJs onInitialize={handleInitialize} defaultValue={blocks} />
```

### Haven't received data from server (when use Link)

You should set linkTool [config](https://github.com/editor-js/link#usage). 💪🏻

```tsx
import LinkTool from '@editorjs/link'

<EditorJs
  defaultValue={blocks}
  tools={{
    linkTool: {
      class: LinkTool,
      config: {
        endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
      }
    }
  }}
/>
```
