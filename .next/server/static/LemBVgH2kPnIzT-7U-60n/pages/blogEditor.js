module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"21":"32021bf602555517e481"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "1jmL":
/***/ (function(module, exports) {

module.exports = require("emotion");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zQDh");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4Ymv":
/***/ (function(module, exports) {



/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7Jjw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* unused harmony export EditorValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Icon; });
/* unused harmony export Instruction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Portal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Toolbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1jmL");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Button = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((_ref, ref) => {
  let {
    className,
    active,
    reversed
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "active", "reversed"]);

  return __jsx("span", _extends({}, props, {
    ref: ref,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(className, emotion__WEBPACK_IMPORTED_MODULE_2__["css"]`
          cursor: pointer;
          color: ${reversed ? active ? 'white' : '#aaa' : active ? 'black' : '#ccc'};
        `)
  }));
});
const EditorValue = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((_ref2, ref) => {
  let {
    className,
    value
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["className", "value"]);

  const textLines = value.document.nodes.map(node => node.text).toArray().join('\n');
  return __jsx("div", _extends({
    ref: ref
  }, props, {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(className, emotion__WEBPACK_IMPORTED_MODULE_2__["css"]`
            margin: 30px -20px 0;
          `)
  }), __jsx("div", {
    className: emotion__WEBPACK_IMPORTED_MODULE_2__["css"]`
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `
  }, "Slate's value as text"), __jsx("div", {
    className: emotion__WEBPACK_IMPORTED_MODULE_2__["css"]`
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `
  }, textLines));
});
const Icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((_ref3, ref) => {
  let {
    className
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["className"]);

  return __jsx("span", _extends({}, props, {
    ref: ref,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])('material-icons', className, emotion__WEBPACK_IMPORTED_MODULE_2__["css"]`
        font-size: 18px;
        vertical-align: text-bottom;
      `)
  }));
});
const Instruction = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((_ref4, ref) => {
  let {
    className
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["className"]);

  return __jsx("div", _extends({}, props, {
    ref: ref,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(className, emotion__WEBPACK_IMPORTED_MODULE_2__["css"]`
        white-space: pre-wrap;
        margin: 0 -20px 10px;
        padding: 10px 20px;
        font-size: 14px;
        background: #f8f8e8;
      `)
  }));
});
const Menu = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((_ref5, ref) => {
  let {
    className
  } = _ref5,
      props = _objectWithoutProperties(_ref5, ["className"]);

  return __jsx("div", _extends({}, props, {
    ref: ref,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(className, emotion__WEBPACK_IMPORTED_MODULE_2__["css"]`
        & > * {
          display: inline-block;
        }
        & > * + * {
          margin-left: 15px;
        }
      `)
  }));
});
const Portal = ({
  children
}) => {
  return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(children, document.body);
};
const Toolbar = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((_ref6, ref) => {
  let {
    className
  } = _ref6,
      props = _objectWithoutProperties(_ref6, ["className"]);

  return __jsx(Menu, _extends({}, props, {
    ref: ref,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(className, emotion__WEBPACK_IMPORTED_MODULE_2__["css"]`
        position: relative;
        padding: 1px 18px 17px;
        margin: 0 -20px;
        border-bottom: 2px solid #eee;
        margin-bottom: 20px;
      `)
  }));
});

/***/ }),

/***/ "8cHP":
/***/ (function(module, exports, __webpack_require__) {

// taken from next-routes readme
const routes = __webpack_require__("90Kz"); // Name   Page      Pattern


module.exports = routes() // ----   ----      -----
.add('portfolioNew', '/portfolios/new').add('portfolio', '/portfolio/:id') // portfolio   portfolio.js      /blog/:slug
.add('portfolioEdit', '/portfolios/:id/edit').add('userBlogs', '/blogs/dashboard').add('blogEditor', '/blogs/new').add('blogDetail', '/blogs/:slug').add('blogEditorUpdate', '/blogs/:id/edit');

/***/ }),

/***/ "90Kz":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "Fn7K":
/***/ (function(module, exports) {



/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "H1JU":
/***/ (function(module, exports) {

module.exports = require("escape-html");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Kb2E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Tv7R");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fZjU");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slate_react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Import React dependencies.
 // Import the Slate editor factory.

 // Import the Slate components and React plugin.


const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].nodes(editor, {
      match: n => n.bold === true,
      universal: true
    });
    return !!match;
  },

  isCodeBlockActive(editor) {
    const [match] = slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].nodes(editor, {
      match: n => n.type === 'code'
    });
    return !!match;
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].setNodes(editor, {
      bold: isActive ? null : true
    }, {
      match: n => slate__WEBPACK_IMPORTED_MODULE_1__["Text"].isText(n),
      split: true
    });
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    slate__WEBPACK_IMPORTED_MODULE_1__["Transforms"].setNodes(editor, {
      type: isActive ? null : 'code'
    }, {
      match: n => slate__WEBPACK_IMPORTED_MODULE_1__["Editor"].isBlock(editor, n)
    });
  }

};

const DefaultElement = props => {
  return __jsx("p", props.attributes, props.children);
};

const Leaf = props => {
  return __jsx("span", _extends({}, props.attributes, {
    style: {
      fontWeight: props.leaf.bold ? 'bold' : 'normal'
    }
  }), props.children);
};

const SlateEditor = () => {
  const editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(slate_react__WEBPACK_IMPORTED_MODULE_2__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_1__["createEditor"])()), []);
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    type: 'paragraph',
    children: [{
      text: 'A line of text in a paragraph.'
    }]
  }]);
  const renderLeaf = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(props => {
    return __jsx(Leaf, props);
  }, []);
  const renderElement = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(props => {
    switch (props.element.type) {
      case 'code':
        return __jsx(CodeElement, props);

      default:
        return __jsx(DefaultElement, props);
    }
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_2__["Slate"], {
    editor: editor,
    value: value,
    onChange: newValue => setValue(newValue)
  }, __jsx(slate_react__WEBPACK_IMPORTED_MODULE_2__["Editable"], {
    renderElement: renderElement,
    renderLeaf: renderLeaf,
    onKeyDown: event => {
      if (!event.ctrlKey) {
        return;
      } // Replace the `onKeyDown` logic with our new commands.


      switch (event.key) {
        case '`':
          {
            event.preventDefault();
            CustomEditor.toggleCodeBlock(editor);
            break;
          }

        case 'b':
          {
            event.preventDefault();
            CustomEditor.toggleBoldMark(editor);
            break;
          }
      }
    }
  }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (SlateEditor);

/***/ }),

/***/ "LawV":
/***/ (function(module, exports) {

module.exports = require("is-hotkey");

/***/ }),

/***/ "LmOk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "is-hotkey"
var external_is_hotkey_ = __webpack_require__("LawV");
var external_is_hotkey_default = /*#__PURE__*/__webpack_require__.n(external_is_hotkey_);

// EXTERNAL MODULE: external "slate-react"
var external_slate_react_ = __webpack_require__("fZjU");

// EXTERNAL MODULE: external "slate"
var external_slate_ = __webpack_require__("Tv7R");

// EXTERNAL MODULE: external "slate-history"
var external_slate_history_ = __webpack_require__("eLVN");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./components/slate-editor/slate-editor.scss
var slate_editor = __webpack_require__("4Ymv");

// CONCATENATED MODULE: ./components/slate-editor/ControllMenu.js

var __jsx = external_react_default.a.createElement;



const ControllMenu = props => {
  return __jsx("div", {
    className: "controll-menu"
  }, __jsx("h1", {
    className: "title"
  }, "Write Your Story"), __jsx("div", {
    className: "status-box"
  }, props.isSaving ? 'Saving...' : 'Saved'), __jsx(external_reactstrap_["Button"], {
    disabled: props.isSaving,
    color: "success",
    onClick: props.save
  }, "Save"));
};

/* harmony default export */ var slate_editor_ControllMenu = (ControllMenu);
// EXTERNAL MODULE: external "escape-html"
var external_escape_html_ = __webpack_require__("H1JU");
var external_escape_html_default = /*#__PURE__*/__webpack_require__.n(external_escape_html_);

// EXTERNAL MODULE: external "slate-hyperscript"
var external_slate_hyperscript_ = __webpack_require__("vgXk");

// EXTERNAL MODULE: ./components/slate-editor/components/index.js
var components = __webpack_require__("7Jjw");

// CONCATENATED MODULE: ./components/slate-editor/RichText.js
var RichText_jsx = external_react_default.a.createElement;









const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code'
};
const LIST_TYPES = ['numbered-list', 'bulleted-list'];

const serialize = node => {
  if (external_slate_["Text"].isText(node)) {
    return external_escape_html_default()(node.text);
  }

  const children = node.children.map(n => serialize(n)).join('');

  switch (node.type) {
    case 'block-quote':
      return `<blockquote><p>${children}</p></blockquote>`;

    case 'paragraph':
      return `<p>${children}</p>`;

    case 'link':
      return `<a href="${external_escape_html_default()(node.url)}">${children}</a>`;

    case 'code':
      return `ahahahah tangina`;

    default:
      return children;
  }
};

const deserialize = el => {
  if (el.nodeType === 3) {
    return el.textContent;
  } else if (el.nodeType !== 1) {
    return null;
  }

  const children = Array.from(el.childNodes).map(deserialize);

  switch (el.nodeName) {
    case 'BODY':
      return Object(external_slate_hyperscript_["jsx"])('fragment', {}, children);

    case 'BR':
      return '\n';

    case 'BLOCKQUOTE':
      return Object(external_slate_hyperscript_["jsx"])('element', {
        type: 'quote'
      }, children);

    case 'P':
      return Object(external_slate_hyperscript_["jsx"])('element', {
        type: 'paragraph'
      }, children);

    case 'A':
      return Object(external_slate_hyperscript_["jsx"])('element', {
        type: 'link',
        url: el.getAttribute('href')
      }, children);

    default:
      return el.textContent;
  }
};

const initializeEditorWithProps = (props, setValue) => {
  Object(external_react_["useEffect"])(() => {
    const document = new DOMParser().parseFromString(props.initialValue, 'text/html');
    const final = deserialize(document.body);
    setValue(final);
  }, []);
};

const getTitle = value => {
  const firstBlock = serialize(value.children[0]);
  const secondBlock = value.children[1] ? serialize(value.children[1]) : null;
  console.log(firstBlock);
  const title = firstBlock ? firstBlock : 'No Title';
  const subtitle = secondBlock ? secondBlock : 'No Subtitle';
  return {
    title,
    subtitle
  };
};

const save = (props, value) => {
  const headingValues = getTitle(value);
  const text = serialize(value);
  console.log(headingValues);
  !props.isSaving && props.save(headingValues, text);
};

const RichText = props => {
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])(initialValue);
  if (props.initialValue) Object(external_react_["useEffect"])(() => {
    const document = new DOMParser().parseFromString(props.initialValue, 'text/html');
    const final = deserialize(document.body);
    setValue(final);
  }, []);
  const renderElement = Object(external_react_["useCallback"])(props => RichText_jsx(Element, props), []);
  const renderLeaf = Object(external_react_["useCallback"])(props => RichText_jsx(Leaf, props), []);
  const editor = Object(external_react_["useMemo"])(() => Object(external_slate_history_["withHistory"])(Object(external_slate_react_["withReact"])(Object(external_slate_["createEditor"])())), []);
  const {
    isSaving
  } = props;
  return RichText_jsx(external_react_default.a.Fragment, null, RichText_jsx(slate_editor_ControllMenu, {
    isSaving: isSaving,
    save: () => save(props, editor)
  }), RichText_jsx(external_slate_react_["Slate"], {
    editor: editor,
    value: value,
    onChange: value => setValue(value)
  }, RichText_jsx(components["e" /* Toolbar */], null, RichText_jsx(MarkButton, {
    format: "bold",
    icon: "format_bold"
  }), RichText_jsx(MarkButton, {
    format: "italic",
    icon: "format_italic"
  }), RichText_jsx(MarkButton, {
    format: "underline",
    icon: "format_underlined"
  }), RichText_jsx(MarkButton, {
    format: "code",
    icon: "code"
  }), RichText_jsx(BlockButton, {
    format: "heading-one",
    icon: "looks_one"
  }), RichText_jsx(BlockButton, {
    format: "heading-two",
    icon: "looks_two"
  }), RichText_jsx(BlockButton, {
    format: "block-quote",
    icon: "format_quote"
  }), RichText_jsx(BlockButton, {
    format: "numbered-list",
    icon: "format_list_numbered"
  }), RichText_jsx(BlockButton, {
    format: "bulleted-list",
    icon: "format_list_bulleted"
  })), RichText_jsx(external_slate_react_["Editable"], {
    renderElement: renderElement,
    renderLeaf: renderLeaf,
    placeholder: "Enter some rich text\u2026",
    spellCheck: true,
    autoFocus: true,
    onKeyDown: event => {
      for (const hotkey in HOTKEYS) {
        if (external_is_hotkey_default()(hotkey, event)) {
          event.preventDefault();
          const mark = HOTKEYS[hotkey];
          toggleMark(editor, mark);
        }
      }
    }
  })));
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);
  external_slate_["Transforms"].unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true
  });
  external_slate_["Transforms"].setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format
  });

  if (!isActive && isList) {
    const block = {
      type: format,
      children: []
    };
    external_slate_["Transforms"].wrapNodes(editor, block);
  }
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    external_slate_["Editor"].removeMark(editor, format);
  } else {
    external_slate_["Editor"].addMark(editor, format, true);
  }
};

const isBlockActive = (editor, format) => {
  const [match] = external_slate_["Editor"].nodes(editor, {
    match: n => n.type === format
  });
  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = external_slate_["Editor"].marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({
  attributes,
  children,
  element
}) => {
  switch (element.type) {
    case 'block-quote':
      return RichText_jsx("blockquote", attributes, children);

    case 'bulleted-list':
      return RichText_jsx("ul", attributes, children);

    case 'heading-one':
      return RichText_jsx("h1", attributes, children);

    case 'heading-two':
      return RichText_jsx("h2", attributes, children);

    case 'list-item':
      return RichText_jsx("li", attributes, children);

    case 'numbered-list':
      return RichText_jsx("ol", attributes, children);

    default:
      return RichText_jsx("p", attributes, children);
  }
};

const Leaf = ({
  attributes,
  children,
  leaf
}) => {
  if (leaf.bold) {
    children = RichText_jsx("strong", null, children);
  }

  if (leaf.code) {
    children = RichText_jsx("code", null, children);
  }

  if (leaf.italic) {
    children = RichText_jsx("em", null, children);
  }

  if (leaf.underline) {
    children = RichText_jsx("u", null, children);
  }

  return RichText_jsx("span", attributes, children);
};

const BlockButton = ({
  format,
  icon
}) => {
  const editor = Object(external_slate_react_["useSlate"])();
  return RichText_jsx(components["a" /* Button */], {
    active: isBlockActive(editor, format),
    onMouseDown: event => {
      event.preventDefault();
      toggleBlock(editor, format);
    }
  }, RichText_jsx(components["b" /* Icon */], null, icon));
};

const MarkButton = ({
  format,
  icon
}) => {
  const editor = Object(external_slate_react_["useSlate"])();
  return RichText_jsx(components["a" /* Button */], {
    active: isMarkActive(editor, format),
    onMouseDown: event => {
      event.preventDefault();
      toggleMark(editor, format);
    }
  }, RichText_jsx(components["b" /* Icon */], null, icon));
};

const initialValue = [{
  type: 'paragraph',
  children: [{
    text: 'This is editable '
  }, {
    text: 'rich',
    bold: true
  }, {
    text: ' text, '
  }, {
    text: 'much',
    italic: true
  }, {
    text: ' better than a '
  }, {
    text: '<textarea>',
    code: true
  }, {
    text: '!'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: "Since it's rich text, you can do things like turn a selection of text "
  }, {
    text: 'bold',
    bold: true
  }, {
    text: ', or add a semantically rendered block quote in the middle of the page, like this:'
  }]
}, {
  type: 'block-quote',
  children: [{
    text: 'A wise quote.'
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'Try it out for yourself!'
  }]
}];
/* harmony default export */ var slate_editor_RichText = __webpack_exports__["a"] = (RichText);

/***/ }),

/***/ "QIjs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("kY+P");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BasePage = props => {
  const {
    className,
    title,
    containerClass
  } = props;
  return __jsx("div", {
    className: `base-page ${className}`
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: containerClass
  }, title && __jsx("div", {
    className: "page-header"
  }, " ", __jsx("h1", {
    className: "page-header-title"
  }, title), " "), props.children));
}; // this function allows us to make a default for className


BasePage.defaultProps = {
  className: '',
  containerClass: ''
};
/* harmony default export */ __webpack_exports__["a"] = (BasePage);

/***/ }),

/***/ "Sztk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./services/auth0.js
var auth0 = __webpack_require__("cFwr");

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__("8cHP");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/ActiveLink.js
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    children,
    router
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "router"]);

  const child = external_react_["Children"].only(children);
  let className = child.props.className;

  if (router.asPath === props.route && props.activeClassName) {
    className = `${className} ${props.activeClassName}`;
  }

  delete props.activeClassName;
  return __jsx(routes["Link"], props, external_react_default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ var components_ActiveLink = (Object(router_["withRouter"])(ActiveLink));
// EXTERNAL MODULE: ./components/common/Header/styles.scss
var styles = __webpack_require__("Fn7K");

// CONCATENATED MODULE: ./components/common/Header/Header.jsx
var Header_jsx = external_react_default.a.createElement;
// import React, { Component } from 'react'





 // in this example, I create my own functional compoenent in order to handle 
// 1. the styling of the link in order for it to vibe with bootstrap's theme and css
// 2. Make a component that I can feed an URL and title

const BsNavLink = props => {
  const {
    route,
    title
  } = props;
  const className = props.className || "";
  return Header_jsx(components_ActiveLink, {
    activeClassName: "active",
    route: route
  }, Header_jsx("a", {
    className: `nav-link port-navbar-link ${className}`
  }, title));
}; // this section, we call on auth0.js from the services/auth0.js to call login.


const Login = () => {
  return Header_jsx("span", {
    onClick: auth0["a" /* default */].login,
    className: "nav-link port-navbar-link"
  }, "Login");
};

const Logout = () => {
  return Header_jsx("span", {
    onClick: auth0["a" /* default */].logout,
    className: "nav-link port-navbar-link"
  }, "Logout");
};

const Header = props => {
  // these 2 const is a small function that uses the useState function given in react that assignes the const to take in false
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: dropdownOpen,
    1: setDropdownOpen
  } = Object(external_react_["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const renderBlogMenu = props => {
    const {
      isSiteOwner
    } = props;

    if (isSiteOwner) {
      return Header_jsx(external_reactstrap_["Dropdown"], {
        className: "port-navbar-link port-dropdown-menu",
        nav: true,
        isOpen: dropdownOpen,
        toggle: toggleDropdown
      }, Header_jsx(external_reactstrap_["DropdownToggle"], {
        className: "port-dropdown-toggle",
        nav: true,
        caret: true
      }, "Blog"), Header_jsx(external_reactstrap_["DropdownMenu"], null, Header_jsx(external_reactstrap_["DropdownItem"], null, Header_jsx(BsNavLink, {
        className: "port-dropdown-item",
        route: "/blogs",
        title: "Blogs"
      })), Header_jsx(external_reactstrap_["DropdownItem"], null, Header_jsx(BsNavLink, {
        className: "port-dropdown-item",
        route: "/blogs/new",
        title: "Create a Blog"
      })), Header_jsx(external_reactstrap_["DropdownItem"], null, Header_jsx(BsNavLink, {
        className: "port-dropdown-item",
        route: "/blogs/dashboard",
        title: "Blogs Dashboard"
      }))));
    }

    return Header_jsx(external_reactstrap_["NavItem"], {
      className: "port-navbar-item"
    }, Header_jsx(BsNavLink, {
      route: "/blogs",
      title: "Blog"
    }));
  }; // im taking is Authenticated from a prop i passed from either about, blog, index, portfolio


  const {
    isAuthenticated,
    user,
    className
  } = props;
  const menuOpenClass = isOpen ? 'menu-open' : 'menu-close';
  return Header_jsx("div", null, Header_jsx(external_reactstrap_["Navbar"], {
    className: `port-navbar port-nav-base absolute ${className} ${menuOpenClass}`,
    color: "transparent",
    expand: "md"
  }, Header_jsx(external_reactstrap_["NavbarBrand"], {
    className: "port-navbar-brand",
    href: "/"
  }, "Angelo Amadora"), Header_jsx(external_reactstrap_["NavbarToggler"], {
    onClick: toggle
  }), Header_jsx(external_reactstrap_["Collapse"], {
    isOpen: isOpen,
    navbar: true
  }, Header_jsx(external_reactstrap_["Nav"], {
    className: "ml-auto",
    navbar: true
  }, Header_jsx(external_reactstrap_["NavItem"], {
    className: "port-navbar-item"
  }, Header_jsx(BsNavLink, {
    route: "/",
    title: "Home"
  })), Header_jsx(external_reactstrap_["NavItem"], {
    className: "port-navbar-item"
  }, Header_jsx(BsNavLink, {
    route: "/about",
    title: "About"
  })), Header_jsx(external_reactstrap_["NavItem"], {
    className: "port-navbar-item"
  }, Header_jsx(BsNavLink, {
    route: "/portfolios",
    title: "Portfolio"
  })), renderBlogMenu(props), Header_jsx(external_reactstrap_["NavItem"], {
    className: "port-navbar-item"
  }, Header_jsx(BsNavLink, {
    route: "/cv",
    title: "CV"
  })), !isAuthenticated && Header_jsx(external_reactstrap_["NavItem"], {
    className: "port-navbar-item clickable"
  }, Header_jsx(Login, null)), isAuthenticated && Header_jsx(external_reactstrap_["NavItem"], {
    className: "port-navbar-item clickable"
  }, Header_jsx(Logout, null)), isAuthenticated && Header_jsx(external_reactstrap_["NavItem"], {
    className: "port-navbar-item clickable"
  }, Header_jsx("span", {
    className: "nav-link port-navbar-link"
  }, " ", user.name, " "))))));
};

/* harmony default export */ var Header_Header = __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tv7R":
/***/ (function(module, exports) {

module.exports = require("slate");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZfN1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Sztk");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BaseLayout = props => {
  const {
    className,
    children,
    isAuthenticated,
    user,
    isSiteOwner,
    cannonical
  } = props;
  const headerType = props.headerType || 'default';
  const title = props.title || 'Angelo Amadora Portfolio';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, title), __jsx("meta", {
    name: "description",
    content: "My Name is Angelo Amadora and I am a software developer. Nice to meet you! Feel free to browse through my website."
  }), __jsx("meta", {
    name: "keywords",
    content: "angelo portfolio, angelo freelancing, angelo developer, angelo developer"
  }), __jsx("meta", {
    property: "og:title",
    content: "Angelo Amadora - Programmer, Project Manager, blogger"
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US"
  }), __jsx("meta", {
    property: "og:url",
    content: `${"http://angeloamadora.herokuapp.com"}`
  }), __jsx("meta", {
    property: "og:type",
    content: "website"
  }), __jsx("meta", {
    property: "og:description",
    content: "My Name is Angelo Amadora and I am a software developer. Nice to meet you! Feel free to browse through my website."
  }), cannonical && __jsx("link", {
    rel: "cannonical",
    href: `${"http://angeloamadora.herokuapp.com"}${cannonical}`
  }), __jsx("link", {
    rel: "icon",
    type: "image/ico",
    href: "/favicon.ico"
  }), __jsx("script", {
    src: "https://kit.fontawesome.com/0fee7dd303.js",
    crossorigin: "anonymous"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet"
  })), __jsx("div", {
    className: "layout-container"
  }, __jsx(_common_Header_Header__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    className: `port-nav-${headerType}`,
    isAuthenticated: isAuthenticated,
    user: user,
    isSiteOwner: isSiteOwner
  }), __jsx("main", {
    className: `cover ${className}`
  }, __jsx("div", {
    className: "wrapper"
  }, children))));
};

/* harmony default export */ __webpack_exports__["a"] = (BaseLayout);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cFwr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pXxs");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(auth0_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tMJi");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("hw50");





const CLIENT_ID = "Tx1EtxPBuv2OriCqZikmha1p0hEFabHZ";

class Auth0 {
  constructor() {
    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_0___default.a.WebAuth({
      // both domain and client ID come from auth0 application settings on the dashboard
      domain: 'dev-qo3dzhrn.auth0.com',
      clientID: CLIENT_ID,
      // redirectUri will replace the URL once you successfully log in
      redirectUri: `${"http://angeloamadora.herokuapp.com"}/callback`,
      responseType: 'token id_token',
      scope: 'openid profile'
    }); // these 2 function call forces or binds the functions stated below to auth0.js' context. meaning function calls will only be handled in this file.

    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        console.log(authResult);

        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
          console.log(err);
        }
      });
    });
  } // this function handles in "cookies" or the things we need to store in order to for the app to remember that we're logged in.


  setSession(authResult) {
    // these 4 lines is im calling a function from JSON to give me a set time, and im storing strings into local storage given a name.
    const expiresAt = JSON.stringify(authResult.expiresIn * 2000 + new Date().getTime());
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('user', authResult.idTokenPayload);
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('jwt', authResult.idToken);
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set('expiresAt', expiresAt);
  }

  logout() {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('user');
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('jwt');
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove('expiresAt');
    this.auth0.logout({
      returnTo: "http://angeloamadora.herokuapp.com",
      clientID: CLIENT_ID
    });
  }

  login() {
    this.auth0.authorize();
  }

  async getJWKS() {
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://dev-qo3dzhrn.auth0.com/.well-known/jwks.json');
    const jwks = res.data;
    return jwks;
  }

  async verifyToken(token) {
    if (token) {
      const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.decode(token, {
        complete: true
      });

      if (!decodedToken) {
        return undefined;
      }

      const jwks = await this.getJWKS();
      const jwk = jwks.keys[0]; // build certificate

      let cert = jwk.x5c[0];
      cert = cert.match(/.{1,64}/g).join('\n');
      cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;

      if (jwk.kid === decodedToken.header.kid) {
        try {
          const verifiedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.verify(token, cert); // this multiplier is to convert miliseconds to seconds

          const expiresAt = verifiedToken.exp * 1000;
          return verifiedToken && new Date().getTime() < expiresAt ? verifiedToken : undefined;
        } catch (err) {
          return undefined;
        }
      }
    }

    return undefined;
  }

  async clientAuth() {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.getJSON('jwt');
    const verifiedToken = await this.verifyToken(token);
    return verifiedToken;
  }

  async serverAuth(req) {
    if (req.headers.cookie) {
      const token = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__[/* getCookieFromRequest */ "a"])(req, 'jwt');
      const verifiedToken = await this.verifyToken(token);
      return verifiedToken;
    }

    return undefined;
  }

}

const auth0Client = new Auth0();
/* harmony default export */ __webpack_exports__["a"] = (auth0Client);

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "dpnd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getSecretData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getPortfolios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getPortfolioById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return updatePortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deletePortfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getBlogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getBlogBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getUserBlogs; });
/* unused harmony export saveBlog */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getBlogById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return updateBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteBlog; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hw50");



const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: `${"http://angeloamadora.herokuapp.com"}/api/v1`,
  timeout: 3000
});

const setAuthHeader = req => {
  const token = req ? Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__[/* getCookieFromRequest */ "a"])(req, 'jwt') : js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.getJSON('jwt');

  if (token) {
    return {
      headers: {
        'authorization': `Bearer ${token}`
      }
    };
  }

  return undefined;
};

const rejectPromise = resError => {
  let error = {};

  if (resError && resError.response && resError.response.data) {
    error = resError.response.data;
  } else {
    error = resError;
  }

  return Promise.reject(error);
};

const getSecretData = async req => {
  const url = req ? '/secret' : '/api/v1/secret';
  return await axiosInstance.get(url, setAuthHeader(req)).then(response => response.data);
}; // export const getSecretDataServer = async (req) => {
//     return await axios.get('http://localhost:3000/api/v1/secret', setAuthHeader(req) ).then( response => response.data )
// }

const getPortfolios = async () => {
  const url = '/portfolios';
  return await axiosInstance.get(url).then(response => response.data);
};
const createPortfolio = async portfolioData => {
  const url = '/portfolios';
  return await axiosInstance.post(url, portfolioData, setAuthHeader()).then(response => response.data).catch(error => {
    return rejectPromise(error);
  });
};
const getPortfolioById = async id => {
  return await axiosInstance.get(`/portfolios/${id}`).then(response => response.data);
};
const updatePortfolio = async portfolioData => {
  const url = `/portfolios/${portfolioData._id}`;
  return await axiosInstance.patch(url, portfolioData, setAuthHeader()).then(response => response.data).catch(error => {
    return rejectPromise(error);
  });
};
const deletePortfolio = id => {
  return axiosInstance.delete(`/portfolios/${id}`, setAuthHeader()).then(response => response.data);
}; // BLOG ACTIONS

const getBlogs = async req => {
  return await axiosInstance.get('/blogs').then(response => response.data);
};
const getBlogBySlug = async slug => {
  return await axiosInstance.get(`/blogs/s/${slug}`).then(response => response.data);
};
const getUserBlogs = async req => {
  return await axiosInstance.get('/blogs/me', setAuthHeader(req)).then(response => response.data);
};
const saveBlog = blogData => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise Resolved!');
    }, 1000);
  });
};
const createBlog = (blogData, lockId) => {
  return axiosInstance.post(`/blogs?lockId=${lockId}`, blogData, setAuthHeader()).then(response => response.data).catch(err => rejectPromise(err));
};
const getBlogById = async id => {
  return await axiosInstance.get(`/blogs/${id}`).then(response => response.data);
};
const updateBlog = async (blogData, blogId) => {
  return axiosInstance.patch(`/blogs/${blogId}`, blogData, setAuthHeader()).then(response => response.data).catch(err => rejectPromise(err));
};
const deleteBlog = blogId => {
  return axiosInstance.delete(`/blogs/${blogId}`, setAuthHeader()).then(response => response.data).catch(err => rejectPromise(err));
};

/***/ }),

/***/ "eLVN":
/***/ (function(module, exports) {

module.exports = require("slate-history");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "fZjU":
/***/ (function(module, exports) {

module.exports = require("slate-react");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hw50":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCookieFromRequest; });
const getCookieFromRequest = (req, cookieKey) => {
  const cookie = req.headers.cookie.split(";").find(c => c.trim().startsWith(`${cookieKey}=`));

  if (!cookie) {
    return undefined;
  }

  return cookie.split('=')[1];
};

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "kY+P":
/***/ (function(module, exports) {



/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "lxPV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfN1");
/* harmony import */ var _common_BasePage_BasePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QIjs");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // const namespace = 'http://localhost:3000/'

/* harmony default export */ __webpack_exports__["a"] = (role => {
  return Component => {
    return class withAuth extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
      static async getInitialProps(args) {
        // this "waits" a check of the componentbeing passed down if it has getInitialProps and execute it
        const pageProps = (await Component.getInitialProps) && (await Component.getInitialProps(args)); // destructurize the pageprops as a "prop" if we did not destructurize it we'd be passing a pageProps outside of a

        return _objectSpread({}, pageProps);
      }

      renderProtectedPage() {
        const {
          isAuthenticated,
          user
        } = this.props.auth;
        const userRole = user && user[`${"http://angeloamadora.herokuapp.com"}/role`];
        let isAuthorized = false;

        if (role) {
          if (userRole && userRole === role) isAuthorized = true;
        } else {
          isAuthorized = true;
        }

        if (!isAuthenticated) {
          return __jsx("div", null, __jsx(_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], this.props.auth, __jsx(_common_BasePage_BasePage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, __jsx("h1", null, "You're not isAuthenticated, please log in to access this page"))));
        } else if (!isAuthorized) {
          return __jsx("div", null, __jsx(_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], this.props.auth, __jsx(_common_BasePage_BasePage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, __jsx("h1", null, "You're not Authroized, you dont have permission to access this page"))));
        } else {
          return __jsx(Component, this.props);
        }
      }

      render() {
        return this.renderProtectedPage();
      }

    };
  };
});

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "pXxs":
/***/ (function(module, exports) {

module.exports = require("auth0-js");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "r4ZA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const DynamicLoadedEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 21).then(__webpack_require__.bind(null, "/pC0")), {
  loading: () => __jsx("p", null, "loading..."),
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("/pC0")],
    modules: ['./HoverMenu']
  }
});
/* unused harmony default export */ var _unused_webpack_default_export = (DynamicLoadedEditor);

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "vgXk":
/***/ (function(module, exports) {

module.exports = require("slate-hyperscript");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zQDh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogEditor", function() { return BlogEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Sztk");
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZfN1");
/* harmony import */ var _components_common_BasePage_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("QIjs");
/* harmony import */ var _components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lxPV");
/* harmony import */ var _components_slate_editor_Editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Kb2E");
/* harmony import */ var _components_slate_editor_DynamicEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("r4ZA");
/* harmony import */ var _components_slate_editor_RichText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("LmOk");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("dpnd");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("8cHP");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










class BlogEditor extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isSaving: false,
      lockId: Math.floor(1000 + Math.random() * 9000)
    };
    this.saveBlog = this.saveBlog.bind(this);
  }

  saveBlog(heading, story) {
    const {
      lockId
    } = this.state;
    const blog = {};
    blog.title = heading.title;
    blog.subTitle = heading.subtitle;
    blog.story = story;
    this.setState({
      isSaving: true
    });
    Object(_actions__WEBPACK_IMPORTED_MODULE_8__[/* createBlog */ "a"])(blog, lockId).then(createdBlog => {
      this.setState({
        isSaving: false
      });
      _routes__WEBPACK_IMPORTED_MODULE_9__["Router"].pushRoute(`/blogs/${createdBlog._id}/edit`);
    }).catch(err => {
      this.setState({
        isSaving: false
      });
      const message = err.message || 'Server Error!';
      console.error(message);
    });
  }

  render() {
    const {
      isSaving
    } = this.state;
    return __jsx("div", null, __jsx(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], this.props.auth, __jsx(_components_common_BasePage_BasePage__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      containerClass: "editor-wrapper",
      className: "blog-editor-page"
    }, __jsx(_components_slate_editor_RichText__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      save: this.saveBlog,
      isSaving: isSaving
    }))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])('siteOwner')(BlogEditor));

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });