exports.ids = [21];
exports.modules = {

/***/ "/pC0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fZjU");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slate_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Tv7R");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1jmL");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("eLVN");
/* harmony import */ var slate_history__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slate_history__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7Jjw");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const HoverMenu = () => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);
  const editor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(slate_history__WEBPACK_IMPORTED_MODULE_4__["withHistory"])(Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["withReact"])(Object(slate__WEBPACK_IMPORTED_MODULE_2__["createEditor"])())), []);
  return __jsx(slate_react__WEBPACK_IMPORTED_MODULE_1__["Slate"], {
    editor: editor,
    value: value,
    onChange: value => setValue(value)
  }, __jsx(HoveringToolbar, null), __jsx(slate_react__WEBPACK_IMPORTED_MODULE_1__["Editable"], {
    renderLeaf: props => __jsx(Leaf, props),
    placeholder: "Enter some text...",
    onDOMBeforeInput: event => {
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

const toggleFormat = (editor, format) => {
  const isActive = isFormatActive(editor, format);
  slate__WEBPACK_IMPORTED_MODULE_2__["Transforms"].setNodes(editor, {
    [format]: isActive ? null : true
  }, {
    match: slate__WEBPACK_IMPORTED_MODULE_2__["Text"].isText,
    split: true
  });
};

const isFormatActive = (editor, format) => {
  const [match] = slate__WEBPACK_IMPORTED_MODULE_2__["Editor"].nodes(editor, {
    match: n => n[format] === true,
    mode: 'all'
  });
  return !!match;
};

const Leaf = ({
  attributes,
  children,
  leaf
}) => {
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

const HoveringToolbar = () => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["useSlate"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const el = ref.current;
    const {
      selection
    } = editor;

    if (!el) {
      return;
    }

    if (!selection || !slate_react__WEBPACK_IMPORTED_MODULE_1__["ReactEditor"].isFocused(editor) || slate__WEBPACK_IMPORTED_MODULE_2__["Range"].isCollapsed(selection) || slate__WEBPACK_IMPORTED_MODULE_2__["Editor"].string(editor, selection) === '') {
      el.removeAttribute('style');
      return;
    }

    const domSelection = window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    el.style.opacity = 1;
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
    el.style.left = `${rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2}px`;
  });
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_5__[/* Portal */ "d"], null, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__[/* Menu */ "c"], {
    ref: ref,
    className: emotion__WEBPACK_IMPORTED_MODULE_3__["css"]`
          padding: 8px 7px 6px;
          position: absolute;
          z-index: 1;
          top: -10000px;
          left: -10000px;
          margin-top: -6px;
          opacity: 0;
          background-color: #222;
          border-radius: 4px;
          transition: opacity 0.75s;
        `
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

const FormatButton = ({
  format,
  icon
}) => {
  const editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["useSlate"])();
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], {
    reversed: true,
    active: isFormatActive(editor, format),
    onMouseDown: event => {
      event.preventDefault();
      toggleFormat(editor, format);
    }
  }, __jsx(_components__WEBPACK_IMPORTED_MODULE_5__[/* Icon */ "b"], null, icon));
};

const initialValue = [{
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

};;