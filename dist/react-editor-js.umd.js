(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('@editorjs/editorjs'), require('@editorjs/embed'), require('@editorjs/table'), require('@editorjs/paragraph'), require('@editorjs/list'), require('@editorjs/warning'), require('@editorjs/code'), require('@editorjs/link'), require('@editorjs/image'), require('@editorjs/raw'), require('@editorjs/header'), require('@editorjs/quote'), require('@editorjs/marker'), require('@editorjs/checklist'), require('@editorjs/delimiter'), require('@editorjs/inline-code'), require('@editorjs/simple-image')) :
    typeof define === 'function' && define.amd ? define(['react', '@editorjs/editorjs', '@editorjs/embed', '@editorjs/table', '@editorjs/paragraph', '@editorjs/list', '@editorjs/warning', '@editorjs/code', '@editorjs/link', '@editorjs/image', '@editorjs/raw', '@editorjs/header', '@editorjs/quote', '@editorjs/marker', '@editorjs/checklist', '@editorjs/delimiter', '@editorjs/inline-code', '@editorjs/simple-image'], factory) :
    (global = global || self, global.LineChart = factory(global.React, global.EditorJS, global.Embed, global.Table, global.Paragraph, global.List, global.Warning, global.Code, global.Link, global.Image, global.Raw, global.Header, global.Quote, global.Marker, global.CheckList, global.Delimiter, global.InlineCode, global.SimpleImage));
}(this, function (React, EditorJS, Embed, Table, Paragraph, List, Warning, Code, Link, Image, Raw, Header, Quote, Marker, CheckList, Delimiter, InlineCode, SimpleImage) { 'use strict';

    EditorJS = EditorJS && EditorJS.hasOwnProperty('default') ? EditorJS['default'] : EditorJS;
    Embed = Embed && Embed.hasOwnProperty('default') ? Embed['default'] : Embed;
    Table = Table && Table.hasOwnProperty('default') ? Table['default'] : Table;
    Paragraph = Paragraph && Paragraph.hasOwnProperty('default') ? Paragraph['default'] : Paragraph;
    List = List && List.hasOwnProperty('default') ? List['default'] : List;
    Warning = Warning && Warning.hasOwnProperty('default') ? Warning['default'] : Warning;
    Code = Code && Code.hasOwnProperty('default') ? Code['default'] : Code;
    Link = Link && Link.hasOwnProperty('default') ? Link['default'] : Link;
    Image = Image && Image.hasOwnProperty('default') ? Image['default'] : Image;
    Raw = Raw && Raw.hasOwnProperty('default') ? Raw['default'] : Raw;
    Header = Header && Header.hasOwnProperty('default') ? Header['default'] : Header;
    Quote = Quote && Quote.hasOwnProperty('default') ? Quote['default'] : Quote;
    Marker = Marker && Marker.hasOwnProperty('default') ? Marker['default'] : Marker;
    CheckList = CheckList && CheckList.hasOwnProperty('default') ? CheckList['default'] : CheckList;
    Delimiter = Delimiter && Delimiter.hasOwnProperty('default') ? Delimiter['default'] : Delimiter;
    InlineCode = InlineCode && InlineCode.hasOwnProperty('default') ? InlineCode['default'] : InlineCode;
    SimpleImage = SimpleImage && SimpleImage.hasOwnProperty('default') ? SimpleImage['default'] : SimpleImage;

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

    var EDITOR_JS_PLUGINS = {
        embed: Embed,
        table: Table,
        paragraph: Paragraph,
        list: List,
        warning: Warning,
        code: Code,
        link: Link,
        image: Image,
        raw: Raw,
        header: Header,
        quote: Quote,
        marker: Marker,
        checklist: CheckList,
        delimiter: Delimiter,
        inlineCode: InlineCode,
        simpleImage: SimpleImage
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
            this.instance = new EditorJS(__assign({ tools: EDITOR_JS_PLUGINS, holder: 'editor-js' }, this.props));
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
            return React.createElement("div", { id: "editor-js" });
        };
        return EditorJsContainer;
    }(React.PureComponent));

    return EditorJsContainer;

}));
//# sourceMappingURL=react-editor-js.umd.js.map
