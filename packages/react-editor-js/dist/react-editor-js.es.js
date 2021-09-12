import * as React from 'react';
import EditorJS from '@editorjs/editorjs';
import Paragraph from '@editorjs/paragraph';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var EditorJsContainer = /** @class */ (function (_super) {
    __extends(EditorJsContainer, _super);
    function EditorJsContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.holder = "editor-js-" + (Math.floor(Math.random() * 1000) + Date.now()).toString(36);
        _this.handleChange = function (api) { return __awaiter(_this, void 0, void 0, function () {
            var _a, onCompareBlocks, onChange, data, newData, isBlocksEqual;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, onCompareBlocks = _a.onCompareBlocks, onChange = _a.onChange, data = _a.data;
                        if (!onChange) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.instance.save()];
                    case 1:
                        newData = _b.sent();
                        isBlocksEqual = onCompareBlocks === null || onCompareBlocks === void 0 ? void 0 : onCompareBlocks(newData.blocks, data === null || data === void 0 ? void 0 : data.blocks);
                        if (isBlocksEqual) {
                            return [2 /*return*/];
                        }
                        onChange(api, newData);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handleReady = function () {
            var onReady = _this.props.onReady;
            if (!onReady) {
                return;
            }
            onReady(_this.instance);
        };
        return _this;
    }
    EditorJsContainer.prototype.componentDidMount = function () {
        this.initEditor();
    };
    EditorJsContainer.prototype.componentDidUpdate = function (_a) {
        var _b;
        var prevReadOnly = _a.readOnly;
        return __awaiter(this, void 0, void 0, function () {
            var _c, enableReInitialize, data, readOnly;
            return __generator(this, function (_d) {
                _c = this.props, enableReInitialize = _c.enableReInitialize, data = _c.data, readOnly = _c.readOnly;
                if (prevReadOnly !== readOnly) {
                    // Toggle readOnly mode
                    (_b = this.instance) === null || _b === void 0 ? void 0 : _b.readOnly.toggle(readOnly);
                }
                if (!enableReInitialize || !data) {
                    return [2 /*return*/];
                }
                this.changeData(data);
                return [2 /*return*/];
            });
        });
    };
    EditorJsContainer.prototype.componentWillUnmount = function () {
        this.destroyEditor();
    };
    EditorJsContainer.prototype.initEditor = function () {
        var _a = this.props, instanceRef = _a.instanceRef; _a.children; _a.enableReInitialize; var tools = _a.tools, onChange = _a.onChange, onReady = _a.onReady, props = __rest(_a, ["instanceRef", "children", "enableReInitialize", "tools", "onChange", "onReady"]);
        var extendTools = __assign({ 
            // default tools
            paragraph: {
                class: Paragraph,
                inlineToolbar: true,
            } }, tools);
        this.instance = new EditorJS(__assign(__assign(__assign({ tools: extendTools, holder: this.holder }, (onReady && {
            onReady: this.handleReady,
        })), (onChange && {
            onChange: this.handleChange,
        })), props));
        if (instanceRef) {
            instanceRef(this.instance);
        }
    };
    EditorJsContainer.prototype.destroyEditor = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.instance) {
                resolve();
                return;
            }
            _this.instance.isReady
                .then(function () {
                if (_this.instance) {
                    _this.instance.destroy();
                    _this.instance = undefined;
                }
                resolve();
            })
                .catch(reject);
        });
    };
    EditorJsContainer.prototype.changeData = function (data) {
        var _this = this;
        var _a;
        if (!this.instance) {
            return;
        }
        (_a = this.instance) === null || _a === void 0 ? void 0 : _a.isReady.then(function () {
            _this.instance.clear();
            _this.instance.render(data);
        }).catch(function () {
            // do nothing
        });
    };
    EditorJsContainer.prototype.render = function () {
        var children = this.props.children;
        return children || React.createElement("div", { id: this.holder });
    };
    return EditorJsContainer;
}(React.PureComponent));

export default EditorJsContainer;
//# sourceMappingURL=react-editor-js.es.js.map
