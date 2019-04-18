import { createElement, PureComponent } from 'react';
import EditorJS from '@editorjs/editorjs';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var EditorJsContainer = /** @class */ (function (_super) {
    __extends(EditorJsContainer, _super);
    function EditorJsContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorJsContainer.prototype.componentDidMount = function () {
        this.initEditor();
    };
    EditorJsContainer.prototype.componentDidUpdate = function () {
        var enableReInitialize = this.props.enableReInitialize;
        if (!enableReInitialize) {
            return;
        }
        this.destroyEditor();
        this.initEditor();
    };
    EditorJsContainer.prototype.componentWillUnmount = function () {
        this.destroyEditor();
    };
    EditorJsContainer.prototype.initEditor = function () {
        this.instance = new EditorJS(__assign({}, this.props, { holderId: 'editor-js' }));
        var instanceRef = this.props.instanceRef;
        if (instanceRef) {
            instanceRef(this.instance);
        }
    };
    EditorJsContainer.prototype.destroyEditor = function () {
        if (!this.instance) {
            return;
        }
        this.instance.destroy();
        this.instance = undefined;
    };
    EditorJsContainer.prototype.render = function () {
        return createElement("div", { id: "editor-js" });
    };
    return EditorJsContainer;
}(PureComponent));

export default EditorJsContainer;
//# sourceMappingURL=react-editor-js.es.js.map
