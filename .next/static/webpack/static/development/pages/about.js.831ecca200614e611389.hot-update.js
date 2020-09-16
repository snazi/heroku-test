webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/common/Header/Header.jsx":
/*!*********************************************!*\
  !*** ./components/common/Header/Header.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _services_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth0 */ "./services/auth0.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./components/common/Header/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import React, { Component } from 'react'




 // in this example, I create my own functional compoenent in order to handle 
// 1. the styling of the link in order for it to vibe with bootstrap's theme and css
// 2. Make a component that I can feed an URL and title

var BsNavLink = function BsNavLink(props) {
  var route = props.route,
      title = props.title;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: route
  }, __jsx("a", {
    className: "nav-link port-navbar-link"
  }, title));
}; // this section, we call on auth0.js from the services/auth0.js to call login.


var Login = function Login() {
  return __jsx("span", {
    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__["default"].login,
    className: "nav-link port-navbar-link"
  }, "Login");
};

var Logout = function Logout() {
  return __jsx("span", {
    onClick: _services_auth0__WEBPACK_IMPORTED_MODULE_3__["default"].logout,
    className: "nav-link port-navbar-link"
  }, "Logout");
};

var Header = function Header(props) {
  // these 2 const is a small function that uses the useState function given in react that assignes the const to take in false
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  }; // im taking is Authenticated from a prop i passed from either about, blog, index, portfolio


  var isAuthenticated = props.isAuthenticated,
      user = props.user,
      className = props.className;
  return __jsx("div", null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    className: "port-navbar port-nav-base absolute ".concat(className),
    color: "transparent",
    expand: "md"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
    className: "port-navbar-brand",
    href: "/"
  }, "Angelo Amadora"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
    onClick: toggle
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
    isOpen: isOpen,
    navbar: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "ml-auto",
    navbar: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "port-navbar-item"
  }, __jsx(BsNavLink, {
    route: "/",
    title: "Home"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "port-navbar-item"
  }, __jsx(BsNavLink, {
    route: "/about",
    title: "About"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "port-navbar-item"
  }, __jsx(BsNavLink, {
    route: "/portfolios",
    title: "Portfolio"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "port-navbar-item"
  }, __jsx(BsNavLink, {
    route: "/blogs",
    title: "Blog"
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "port-navbar-item"
  }, __jsx(BsNavLink, {
    route: "/cv",
    title: "CV"
  })), !isAuthenticated && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "port-navbar-item clickable"
  }, __jsx(Login, null)), isAuthenticated && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "port-navbar-item clickable"
  }, __jsx(Logout, null)), isAuthenticated && __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
    className: "port-navbar-item clickable"
  }, __jsx("span", {
    className: "nav-link port-navbar-link"
  }, " ", user.name, " "))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=about.js.831ecca200614e611389.hot-update.js.map