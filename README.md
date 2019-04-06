# react-editor-js

The unofficial [editor-js](https://editorjs.io/) component for React

## Getting Started

### Install via npm (or yarn)

```bash
npm install --save-dev react-editor-js
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
