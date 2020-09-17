module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: ./services/auth0.js
var auth0 = __webpack_require__("cFwr");

// EXTERNAL MODULE: external "fontfaceobserver"
var external_fontfaceobserver_ = __webpack_require__("SspK");
var external_fontfaceobserver_default = /*#__PURE__*/__webpack_require__.n(external_fontfaceobserver_);

// CONCATENATED MODULE: ./helpers/Fonts.js


const Fonts = () => {
  const montserrat = new external_fontfaceobserver_default.a('Montserrat');
  montserrat.load().then(() => {
    document.documentElement.classList.add('montserrat-loaded');
  });
};

/* harmony default export */ var helpers_Fonts = (Fonts);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./components/common/styles/main.scss
var main = __webpack_require__("kT1Z");

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__("oAEb");

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("jDDT");

// CONCATENATED MODULE: ./pages/_app.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _app_MyApp; });
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




 //styling




 // TODO: once finished with entire project, use the current implementation, this is depcrated.
// const namespace = 'http://localhost:3000'

class _app_MyApp extends app_default.a {
  static async getInitialProps({
    Component,
    router,
    ctx
  }) {
    let pageProps = {};
    const user = false ? undefined : await auth0["a" /* default */].serverAuth(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    let isAuthenticated = false;

    if (user) {
      isAuthenticated = true;
    }

    const isSiteOwner = user && user["http://angeloamadora.herokuapp.com/role"] === 'siteOwner'; // now that we've managed to give auth details to both client and server side, we should pass the auth data to our pages

    const auth = {
      user,
      isAuthenticated: !!user,
      isSiteOwner
    }; // return auth as well as page props

    return {
      pageProps,
      auth
    };
  }

  componentDidMount() {
    helpers_Fonts();
  }

  render() {
    // pass it along
    const {
      Component,
      pageProps,
      auth
    } = this.props; // create an auth prop and pass this current instance of auth.

    return __jsx(app["Container"], null, __jsx(external_react_toastify_["ToastContainer"], null), __jsx(Component, _extends({}, pageProps, {
      auth: auth
    })));
  }

}

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

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

/***/ "SspK":
/***/ (function(module, exports) {

module.exports = require("fontfaceobserver");

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

/***/ "jDDT":
/***/ (function(module, exports) {



/***/ }),

/***/ "kT1Z":
/***/ (function(module, exports) {



/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "pXxs":
/***/ (function(module, exports) {

module.exports = require("auth0-js");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });