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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\alfon\\OneDrive\\Documents\\GitHub\\Lifeline\\components\\head.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Head = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("head", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("meta", {
  charset: "utf-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1, shrink-to-fit=no",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
  integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
  crossorigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("script", {
  src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
  integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
  crossorigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("script", {
  src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
  integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
  crossorigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("script", {
  src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
  integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
  crossorigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("script", {
  type: "text/javascript",
  src: "myScript.js",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

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

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

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
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

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
      // @ts-ignore target exists on currentTarget
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

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
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

        this.prefetch();
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


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
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
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

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

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
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

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
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
    // @ts-ignore backwards compatibility

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

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
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
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
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
        this.changeState(method, url, as);
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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

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
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
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

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
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
          return new _Promise(resolve => {
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
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
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

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
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

    _Object$keys(groups).forEach(slugName => {
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
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
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\alfon\\OneDrive\\Documents\\GitHub\\Lifeline\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const playVideo = () => document.getElementById("myVideo").play();

const Index = () => __jsx("html", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("head", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("body", {
  className: "jsx-3229067875",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
  fluid: true,
  className: "h100",
  style: {
    height: "100vh"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
  className: "row1 h100",
  style: {
    height: "100vh",
    alignItems: "center",
    justifyContent: "center"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  lg: 4,
  className: "text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3229067875" + " " + "form-inline text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("img", {
  src: "Image/logo.png",
  className: "jsx-3229067875" + " " + "img-fluid imgLogo mx-auto d-flex",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
})), __jsx("p", {
  className: "jsx-3229067875" + " " + "pHello",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Welcome!"), __jsx("p", {
  className: "jsx-3229067875" + " " + "pHelloSub",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "Sign in by entering the information below"), __jsx("div", {
  style: {
    marginTop: "35px"
  },
  className: "jsx-3229067875" + " " + "divEmail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-3229067875" + " " + "pEmail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "Email Address"), __jsx("input", {
  type: "text",
  placeholder: "Enter email address here..",
  className: "jsx-3229067875" + " " + "txtEmail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-3229067875" + " " + "divPassword",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("p", {
  className: "jsx-3229067875" + " " + "pPassword",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "Password"), __jsx("input", {
  type: "password",
  placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
  className: "jsx-3229067875" + " " + "txtPassword",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-3229067875" + " " + "divFooter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx("input", {
  id: "cbx",
  type: "checkbox",
  style: {
    display: "none"
  },
  className: "jsx-3229067875" + " " + "inp-cbx",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}), __jsx("label", {
  htmlFor: "cbx",
  className: "jsx-3229067875" + " " + "cbx",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-3229067875",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("svg", {
  viewBox: "0 0 12 10",
  style: {
    height: "10px",
    width: "12px"
  },
  className: "jsx-3229067875",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx("polyline", {
  points: "1.5 6 4.5 9 10.5 1",
  className: "jsx-3229067875",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}))), __jsx("span", {
  className: "jsx-3229067875" + " " + "lblRemember",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, "Remember me")), __jsx("span", {
  className: "jsx-3229067875" + " " + "lblForgot",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, "Forgot password?"), " ", __jsx("br", {
  className: "jsx-3229067875",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}), __jsx("button", {
  onClick: playVideo,
  className: "jsx-3229067875" + " " + "btnSignIn",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, "Sign In"), __jsx("p", {
  className: "jsx-3229067875" + " " + "pDont",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, "Don't have an account? ", __jsx("span", {
  className: "jsx-3229067875",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, "Sign Up")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  lg: 8,
  className: "colright",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3229067875" + " " + "banner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx("video", {
  muted: true,
  id: "myVideo",
  poster: "Image/ambulance.jpg",
  className: "jsx-3229067875",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, __jsx("source", {
  src: "Video/LifelineAmbulanceRescue.mp4",
  type: "video/mp4",
  className: "jsx-3229067875",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}), "Your browser does not support HTML5 video."))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3229067875",
  __self: undefined
}, ".myVideo.jsx-3229067875{position:absolute;right:0;bottom:0;min-width:100%;min-height:100%;}body.jsx-3229067875,html.jsx-3229067875{height:100%;width:100%;}.pHello.jsx-3229067875{font-family:roboto,sans-serif;color:#424242;font-size:2rem;font-weight:bold;}.pHelloSub.jsx-3229067875{font-family:roboto,sans-serif;color:#9e9e9e;font-size:0.9rem;margin-top:-10px;}.divcontainer-fluid.jsx-3229067875,.divcontainer.jsx-3229067875{height:100vh;}.rowh100.jsx-3229067875{height:100vh;background-color:blue;}.divEmail.jsx-3229067875,.divPassword.jsx-3229067875,.divFooter.jsx-3229067875{width:350px;text-align:center;margin:0 auto;}.divFooter.jsx-3229067875{margin-top:20px;}.pEmail.jsx-3229067875,.pPassword.jsx-3229067875{font-family:roboto,sans-serif;color:#9e9e9e;font-size:0.9rem;float:left;}.pPassword.jsx-3229067875{margin-top:20px;}.row1.jsx-3229067875{-webkit-align-items:center !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;}.txtEmail.jsx-3229067875,.txtPassword.jsx-3229067875{font-family:roboto,sans-serif;color:#424242;border:1px solid #e0e0e0;background-color:#fafafa;border-radius:5px;padding:10px 20px;font-size:0.9rem;width:100%;text-align:left;outline:none;-webkit-transition:all 0.2s;transition:all 0.2s;}.txtEmail.jsx-3229067875:focus,.txtPassword.jsx-3229067875:focus{background-color:rgb(230,49,49);color:white;}input.jsx-3229067875:focus.jsx-3229067875::-webkit-input-placeholder{color:white;}input[type=\"password\"].jsx-3229067875,input[type=\"text\"].jsx-3229067875{margin-top:-5px;}.cbx.jsx-3229067875{margin:auto;-webkit-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;float:left;}.cbx.jsx-3229067875 span.jsx-3229067875{display:inline-block;vertical-align:middle;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.cbx.jsx-3229067875 span.jsx-3229067875:first-child{position:relative;width:18px;height:18px;border-radius:3px;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);vertical-align:middle;border:1px solid #9098a9;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}.cbx.jsx-3229067875 span.jsx-3229067875:first-child svg.jsx-3229067875{position:absolute;top:3px;left:2px;fill:none;stroke:#ffffff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:16px;stroke-dashoffset:16px;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;-webkit-transition-delay:0.1s;transition-delay:0.1s;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.cbx.jsx-3229067875 span.jsx-3229067875:first-child.jsx-3229067875:before{content:\"\";width:100%;height:100%;background:rgb(230,49,49);display:block;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);opacity:1;border-radius:50%;}.cbx.jsx-3229067875 span.jsx-3229067875:last-child{padding-left:8px;}.cbx.jsx-3229067875:hover span.jsx-3229067875:first-child{border-color:rgb(230,49,49);}.inp-cbx.jsx-3229067875:checked+.cbx.jsx-3229067875 span.jsx-3229067875:first-child{background:rgb(230,49,49);border-color:rgb(230,49,49);-webkit-animation:wave-jsx-3229067875 0.4s ease;animation:wave-jsx-3229067875 0.4s ease;}.inp-cbx.jsx-3229067875:checked+.cbx.jsx-3229067875 span.jsx-3229067875:first-child svg.jsx-3229067875{stroke-dashoffset:0;}.inp-cbx.jsx-3229067875:checked+.cbx.jsx-3229067875 span.jsx-3229067875:first-child.jsx-3229067875:before{-webkit-transform:scale(3.5);-ms-transform:scale(3.5);transform:scale(3.5);opacity:0;-webkit-transition:all 0.6s ease;transition:all 0.6s ease;}@-webkit-keyframes wave-jsx-3229067875{50%{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}}@keyframes wave-jsx-3229067875{50%{-webkit-transform:scale(0.9);-ms-transform:scale(0.9);transform:scale(0.9);}}.lblRemember.jsx-3229067875{font-family:roboto,sans-serif;color:#424242;font-size:0.9rem;}.lblRemember.jsx-3229067875:hover{color:rgb(230,49,49);}.lblForgot.jsx-3229067875{font-family:roboto,sans-serif;color:#9e9e9e;float:right;font-size:0.9rem;cursor:pointer;-webkit-transition:all 0.2s;transition:all 0.2s;margin-top:2px;}.lblForgot.jsx-3229067875:hover{color:rgb(230,49,49);}.btnSignIn.jsx-3229067875{font-family:roboto,sans-serif;color:white;font-size:1rem;background:rgb(230,49,49);border:0px;width:350px;border-radius:5px;padding:14px 10px;cursor:pointer;-webkit-transition:all 0.2s;transition:all 0.2s;margin-top:20px;box-shadow:0 2px 12px -6px #e63131 !important;}.pDont.jsx-3229067875{font-family:roboto,sans-serif;color:#9e9e9e;font-size:0.9rem;cursor:pointer;margin-top:20px;}.pDont.jsx-3229067875>span.jsx-3229067875{color:rgb(230,49,49);}.imgLogo.jsx-3229067875{width:70px;margin-bottom:20px;}.pLifeline.jsx-3229067875{font-family:Montserrat,roboto,sans-serif;font-size:1.5rem;color:rgb(230,49,49);font-weight:bold;margin-top:20px;margin-left:10px;}.colright.jsx-3229067875{height:100vh;background-color:black;}.banner.jsx-3229067875{width:100%;height:100vh;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.banner.jsx-3229067875 video.jsx-3229067875{position:absolute;top:0;left:0;object-fit:cover;width:100%;height:100%;pointer-events:none;}video[poster].jsx-3229067875{-webkit-filter:brightness(50%);filter:brightness(50%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWxmb25cXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxcTGlmZWxpbmVcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRmtCLEFBRzZCLEFBUU4sQUFJbUIsQUFNQSxBQU9sQixBQUdBLEFBTUQsQUFLSSxBQUllLEFBTWYsQUFHYyxBQUlDLEFBY0csQUFJdEIsQUFJSSxBQUlKLEFBT1MsQUFLSCxBQVVBLEFBZVAsQUFVTSxBQUdhLEFBSUYsQUFLUixBQUdDLEFBT0UsQUFJUSxBQUtSLEFBR1EsQUFTUixBQUdRLEFBY0EsQUFPUixBQUdaLEFBSWdDLEFBUTlCLEFBSUYsQUFPTyxBQVNHLFdBL0dWLEFBZ0ZRLEFBZ0JOLENBL01GLEFBMEJPLEFBd0NwQixBQVEyQixDQXpEM0IsQUFHd0IsQUF1TEMsR0E1S3pCLEFBVUEsQUE2QkEsQ0FtREEsQ0FqSVUsQUE4RkcsQUFVSCxBQXNIRixFQWpGUixDQXBEd0IsQUF1RXhCLEFBWUEsQUF3QkEsQ0E1RWMsQ0EvR2QsQ0ErTWtCLEFBT1QsRUE5TkUsQUF3R0EsQUErQnFCLEVBSmhDLENBckNjLENBbkZFLEFBTUEsQUFpQkEsQUFRQSxBQWFBLEFBbUdBLEFBUUEsQUFZRixBQWNFLEFBV2hCLENBd0JtQixDQTFKTCxFQW1EZ0IsQ0F2SGIsQUEyQmpCLEFBNkVZLENBMEdaLENBakltQixHQXNJSixDQXpISyxBQTJHRCxDQTNCRixDQXRGZ0IsQ0E3RWhCLEFBTUUsQUFpQm5CLEFBUW1CLEFBYVEsQUFjM0IsQUFxRm1CLEFBUUwsQUEwQkssQ0FuRkYsR0FzSEosRUE5TkssSUFzSVMsQUE4RjdCLEVBbEVxQixDQVlXLENBMkJMLENBOUxOLEFBbUZFLEFBaUlQLENBdEhHLEFBY0QsQ0F0R0csQUF5Qk4sQUFnSGIsQUFrQ2lCLEtBM0xqQixHQXNEMkIsRUF5S0wsQ0FyTHRCLENBd0hpQixDQTNDSSxDQWRFLEFBbUNYLEFBT1YsQ0F4SUYsQUFpTGtCLEVBM0tsQixDQXdMbUIsSUEzQk4sRUFqQ2MsR0FzQkwsR0E2RHhCLENBbkNFLEVBdElvQixBQXdITixFQXJFVSxBQWdHTixVQTFCRSxNQXhIQSxBQW1KRCxFQVdyQixJQTNHMEIsSUEzQlAsRUFpR0csSUFuRkksQ0E4R3hCLENBbkptQixNQTJHRixDQXBIakIsQUFpQ2EsR0EyQlksRUFyQnpCLEFBK0NBLEFBNENpQixDQTFETCxBQXNCWixJQXBGYSxDQXdCYixFQWEyQixDQXNFM0IsRUE1Q29CLElBMERFLENBeEhKLEtBa0RTLFFBYTNCLEdBOURlLENBb0NZLFlBbkNMLGtCQXVISixnQkF0RU0sQUF1RXdCLFlBcEZoRCxFQW5DQSxnQ0F3SEEsTUF2RWlDLG1HQUNqQyIsImZpbGUiOiJDOlxcVXNlcnNcXGFsZm9uXFxPbmVEcml2ZVxcRG9jdW1lbnRzXFxHaXRIdWJcXExpZmVsaW5lXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5cclxuY29uc3QgcGxheVZpZGVvID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVZpZGVvXCIpLnBsYXkoKTtcclxuY29uc3QgSW5kZXggPSAoKSA9PiAoXHJcbiAgPGh0bWw+XHJcbiAgICA8aGVhZCAvPlxyXG4gICAgPGJvZHk+XHJcbiAgICAgIDxDb250YWluZXIgZmx1aWQ9e3RydWV9IGNsYXNzTmFtZT1cImgxMDBcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiB9fT5cclxuICAgICAgICA8Um93XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3cxIGgxMDBcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDb2wgbGc9ezR9IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9XCJJbWFnZS9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgaW1nTG9nbyBteC1hdXRvIGQtZmxleFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBIZWxsb1wiPldlbGNvbWUhPC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwSGVsbG9TdWJcIj5cclxuICAgICAgICAgICAgICBTaWduIGluIGJ5IGVudGVyaW5nIHRoZSBpbmZvcm1hdGlvbiBiZWxvd1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2RW1haWxcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMzVweFwiIH19PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBFbWFpbFwiPkVtYWlsIEFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0eHRFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsIGFkZHJlc3MgaGVyZS4uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZQYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBQYXNzd29yZFwiPlBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInR4dFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiJiM4MjI2OyYjODIyNjsmIzgyMjY7JiM4MjI2OyYjODIyNjsmIzgyMjY7JiM4MjI2OyYjODIyNjsmIzgyMjY7JiM4MjI2OyYjODIyNjsmIzgyMjY7JiM4MjI2O1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2Rm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnAtY2J4XCJcclxuICAgICAgICAgICAgICAgIGlkPVwiY2J4XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNieFwiIGh0bWxGb3I9XCJjYnhcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxMiAxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwcHhcIiwgd2lkdGg6IFwiMTJweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMS41IDYgNC41IDkgMTAuNSAxXCI+PC9wb2x5bGluZT5cclxuICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYmxSZW1lbWJlclwiPlJlbWVtYmVyIG1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGJsRm9yZ290XCI+Rm9yZ290IHBhc3N3b3JkPzwvc3Bhbj4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5TaWduSW5cIiBvbkNsaWNrPXtwbGF5VmlkZW99PlNpZ24gSW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwRG9udFwiPlxyXG4gICAgICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8c3Bhbj5TaWduIFVwPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbGc9ezh9IGNsYXNzTmFtZT1cImNvbHJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XHJcbiAgICAgICAgICAgICAgPHZpZGVvIG11dGVkIGlkPVwibXlWaWRlb1wiIHBvc3RlciA9IFwiSW1hZ2UvYW1idWxhbmNlLmpwZ1wiPlxyXG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmMgPSBcIlZpZGVvL0xpZmVsaW5lQW1idWxhbmNlUmVzY3VlLm1wNFwiIHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgSFRNTDUgdmlkZW8uXHJcbiAgICAgICAgICAgICAgPC92aWRlbz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubXlWaWRlbyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHksXHJcbiAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBIZWxsbyB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogcm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgY29sb3I6ICM0MjQyNDI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBIZWxsb1N1YiB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogcm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGl2Y29udGFpbmVyLWZsdWlkLFxyXG4gICAgICAgIC5kaXZjb250YWluZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvd2gxMDAge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXZFbWFpbCxcclxuICAgICAgICAuZGl2UGFzc3dvcmQsXHJcbiAgICAgICAgLmRpdkZvb3RlciB7XHJcbiAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdkZvb3RlciB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucEVtYWlsLFxyXG4gICAgICAgIC5wUGFzc3dvcmQge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBQYXNzd29yZCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucm93MSB7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50eHRFbWFpbCxcclxuICAgICAgICAudHh0UGFzc3dvcmQge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGNvbG9yOiAjNDI0MjQyO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnR4dEVtYWlsOmZvY3VzLFxyXG4gICAgICAgIC50eHRQYXNzd29yZDpmb2N1cyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCA0OSwgNDkpO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNieCB7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNieCBzcGFuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2J4IHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5MDk4YTk7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2J4IHNwYW46Zmlyc3QtY2hpbGQgc3ZnIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgICAgbGVmdDogMnB4O1xyXG4gICAgICAgICAgZmlsbDogbm9uZTtcclxuICAgICAgICAgIHN0cm9rZTogI2ZmZmZmZjtcclxuICAgICAgICAgIHN0cm9rZS13aWR0aDogMjtcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XHJcbiAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxNnB4O1xyXG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE2cHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYnggc3BhbjpmaXJzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIzMCwgNDksIDQ5KTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYnggc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2J4OmhvdmVyIHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjMwLCA0OSwgNDkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlucC1jYng6Y2hlY2tlZCArIC5jYnggc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjMwLCA0OSwgNDkpO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjMwLCA0OSwgNDkpO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiB3YXZlIDAuNHMgZWFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlucC1jYng6Y2hlY2tlZCArIC5jYnggc3BhbjpmaXJzdC1jaGlsZCBzdmcge1xyXG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnAtY2J4OmNoZWNrZWQgKyAuY2J4IHNwYW46Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMy41KTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyB3YXZlIHtcclxuICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxibFJlbWVtYmVyIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiByb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBjb2xvcjogIzQyNDI0MjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGJsUmVtZW1iZXI6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHJnYigyMzAsIDQ5LCA0OSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sYmxGb3Jnb3Qge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxibEZvcmdvdDpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDIzMCwgNDksIDQ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0blNpZ25JbiB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogcm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIzMCwgNDksIDQ5KTtcclxuICAgICAgICAgIGJvcmRlcjogMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTRweCAxMHB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMTJweCAtNnB4ICNlNjMxMzEgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBEb250IHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiByb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBEb250ID4gc3BhbiB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDIzMCwgNDksIDQ5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZ0xvZ28ge1xyXG4gICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucExpZmVsaW5lIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCByb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMjMwLCA0OSwgNDkpO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb2xyaWdodCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYW5uZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5iYW5uZXIgdmlkZW8ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICB2aWRlb1twb3N0ZXJdIHtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcclxuICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2JvZHk+XHJcbiAgPC9odG1sPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\alfon\\\\OneDrive\\\\Documents\\\\GitHub\\\\Lifeline\\\\pages\\\\index.js */")));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\alfon\OneDrive\Documents\GitHub\Lifeline\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map