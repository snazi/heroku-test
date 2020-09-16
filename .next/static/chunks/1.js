(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/slate-editor/HoverMenu.js":
/*!**********************************************!*\
  !*** ./components/slate-editor/HoverMenu.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/dist/index.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/emotion.esm.js");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slate-history */ "./node_modules/slate-history/dist/index.es.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./components/slate-editor/components/index.js");



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n          padding: 8px 7px 6px;\n          position: absolute;\n          z-index: 1;\n          top: -10000px;\n          left: -10000px;\n          margin-top: -6px;\n          opacity: 0;\n          background-color: #222;\n          border-radius: 4px;\n          transition: opacity 0.75s;\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var HoverMenu = function HoverMenu() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var editor = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return Object(slate_history__WEBPACK_IMPORTED_MODULE_7__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_5__["createEditor"])()));
  }, []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_4__["Slate"], {
    editor: editor,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    }
  }, __jsx(HoveringToolbar, null), __jsx(slate_react__WEBPACK_IMPORTED_MODULE_4__["Editable"], {
    renderLeaf: function renderLeaf(props) {
      return __jsx(Leaf, props);
    },
    placeholder: "Enter some text...",
    onDOMBeforeInput: function onDOMBeforeInput(event) {
      event.preventDefault();

      switch (event.inputType) {
        case 'formatBold':
          return toggleFormat(editor, 'bold');

        case 'formatItalic':
          return toggleFormat(editor, 'italic');

        case 'formatUnderline':
          return toggleFormat(editor, 'underline');
      }
    }
  }));
};

var toggleFormat = function toggleFormat(editor, format) {
  var isActive = isFormatActive(editor, format);
  slate__WEBPACK_IMPORTED_MODULE_5__["Transforms"].setNodes(editor, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, format, isActive ? null : true), {
    match: slate__WEBPACK_IMPORTED_MODULE_5__["Text"].isText,
    split: true
  });
};

var isFormatActive = function isFormatActive(editor, format) {
  var _Editor$nodes = slate__WEBPACK_IMPORTED_MODULE_5__["Editor"].nodes(editor, {
    match: function match(n) {
      return n[format] === true;
    },
    mode: 'all'
  }),
      _Editor$nodes2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_Editor$nodes, 1),
      match = _Editor$nodes2[0];

  return !!match;
};

var Leaf = function Leaf(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      leaf = _ref.leaf;

  if (leaf.bold) {
    children = __jsx("strong", null, children);
  }

  if (leaf.italic) {
    children = __jsx("em", null, children);
  }

  if (leaf.underlined) {
    children = __jsx("u", null, children);
  }

  return __jsx("span", attributes, children);
};

var HoveringToolbar = function HoveringToolbar() {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["useSlate"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var el = ref.current;
    var selection = editor.selection;

    if (!el) {
      return;
    }

    if (!selection || !slate_react__WEBPACK_IMPORTED_MODULE_4__["ReactEditor"].isFocused(editor) || slate__WEBPACK_IMPORTED_MODULE_5__["Range"].isCollapsed(selection) || slate__WEBPACK_IMPORTED_MODULE_5__["Editor"].string(editor, selection) === '') {
      el.removeAttribute('style');
      return;
    }

    var domSelection = window.getSelection();
    var domRange = domSelection.getRangeAt(0);
    var rect = domRange.getBoundingClientRect();
    el.style.opacity = 1;
    el.style.top = "".concat(rect.top + window.pageYOffset - el.offsetHeight, "px");
    el.style.left = "".concat(rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2, "px");
  });
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Portal"], null, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Menu"], {
    ref: ref,
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_6__["css"])(_templateObject())
  }, __jsx(FormatButton, {
    format: "bold",
    icon: "format_bold"
  }), __jsx(FormatButton, {
    format: "italic",
    icon: "format_italic"
  }), __jsx(FormatButton, {
    format: "underlined",
    icon: "format_underlined"
  })));
};

var FormatButton = function FormatButton(_ref2) {
  var format = _ref2.format,
      icon = _ref2.icon;
  var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_4__["useSlate"])();
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    reversed: true,
    active: isFormatActive(editor, format),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleFormat(editor, format);
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_8__["Icon"], null, icon));
};

var initialValue = [{
  children: [{
    text: 'This example shows how you can make a hovering menu appear above your content, which you can use to make text '
  }, {
    text: 'bold',
    bold: true
  }, {
    text: ', '
  }, {
    text: 'italic',
    italic: true
  }, {
    text: ', or anything else you might want to do!'
  }]
}, {
  children: [{
    text: 'Try it out yourself! Just '
  }, {
    text: 'select any piece of text and the menu will appear',
    bold: true
  }, {
    text: '.'
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (HoverMenu);

/***/ })

}]);
//# sourceMappingURL=1.js.map