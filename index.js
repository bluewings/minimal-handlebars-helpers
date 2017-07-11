(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var flatten = __webpack_require__(5);
var isNumber = __webpack_require__(6);
var isEven = __webpack_require__(8);
var isOdd = __webpack_require__(2);
var indexOf = __webpack_require__(11);
var iterator = __webpack_require__(12);

var utils = {
  flatten: flatten,
  isNumber: isNumber,
  isEven: isEven,
  isOdd: isOdd,
  indexOf: indexOf,
  iterator: iterator
};

utils.isObject = function (value) {
  return value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !Array.isArray(value);
};

utils.isString = function (val) {
  return val && typeof val === 'string';
};

utils.isUndefined = function (val) {
  return typeof val === 'undefined' || val.hash != null;
};

/**
 * Returns true if the given value contains the given
 * `object`, optionally passing a starting index.
 *
 * @param {Array} val
 * @param {Object} obj
 * @param {Number} start
 * @return {Boolean}
 */

utils.contains = function (val, obj, start) {
  var len = val ? val.length : 0;
  var idx = start < 0 ? Math.max(0, len + start) : start;

  var res = false;
  var i = 0;

  start = idx || 0;

  if (Array.isArray(val)) {
    res = utils.indexOf(val, obj, start) > -1;
  } else if (utils.isNumber(len)) {
    res = (typeof val === 'string' ? val.indexOf(obj, start) : utils.indexOf(val, obj, start)) > -1;
  } else {
    utils.iterator(val, function (ele) {
      if (start < i++) {
        return !(res = ele === obj);
      }
    });
  }
  return res;
};

module.exports = utils;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isBuffer = __webpack_require__(7);
var toString = Object.prototype.toString;

/**
 * Get the native `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*} Native javascript type
 */

module.exports = function kindOf(val) {
  // primitivies
  if (typeof val === 'undefined') {
    return 'undefined';
  }
  if (val === null) {
    return 'null';
  }
  if (val === true || val === false || val instanceof Boolean) {
    return 'boolean';
  }
  if (typeof val === 'string' || val instanceof String) {
    return 'string';
  }
  if (typeof val === 'number' || val instanceof Number) {
    return 'number';
  }

  // functions
  if (typeof val === 'function' || val instanceof Function) {
    return 'function';
  }

  // array
  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array';
  }

  // check for instances of RegExp and Date before calling `toString`
  if (val instanceof RegExp) {
    return 'regexp';
  }
  if (val instanceof Date) {
    return 'date';
  }

  // other objects
  var type = toString.call(val);

  if (type === '[object RegExp]') {
    return 'regexp';
  }
  if (type === '[object Date]') {
    return 'date';
  }
  if (type === '[object Arguments]') {
    return 'arguments';
  }
  if (type === '[object Error]') {
    return 'error';
  }

  // buffer
  if (isBuffer(val)) {
    return 'buffer';
  }

  // es6: Map, WeakMap, Set, WeakSet
  if (type === '[object Set]') {
    return 'set';
  }
  if (type === '[object WeakSet]') {
    return 'weakset';
  }
  if (type === '[object Map]') {
    return 'map';
  }
  if (type === '[object WeakMap]') {
    return 'weakmap';
  }
  if (type === '[object Symbol]') {
    return 'symbol';
  }

  // typed arrays
  if (type === '[object Int8Array]') {
    return 'int8array';
  }
  if (type === '[object Uint8Array]') {
    return 'uint8array';
  }
  if (type === '[object Uint8ClampedArray]') {
    return 'uint8clampedarray';
  }
  if (type === '[object Int16Array]') {
    return 'int16array';
  }
  if (type === '[object Uint16Array]') {
    return 'uint16array';
  }
  if (type === '[object Int32Array]') {
    return 'int32array';
  }
  if (type === '[object Uint32Array]') {
    return 'uint32array';
  }
  if (type === '[object Float32Array]') {
    return 'float32array';
  }
  if (type === '[object Float64Array]') {
    return 'float64array';
  }

  // must be a plain object
  return 'object';
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-odd <https://github.com/jonschlinkert/is-odd>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isNumber = __webpack_require__(10);

module.exports = function isOdd(i) {
  if (!isNumber(i)) {
    throw new TypeError('is-odd expects a number.');
  }
  return !!(~~i & 1);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var comparison = __webpack_require__(4);
var math = __webpack_require__(13);
var number = __webpack_require__(14);
var custom = __webpack_require__(15);

var helpers = {
  comparison: comparison,
  math: math,
  number: number,
  custom: custom
};

helpers.register = function (Handlebars, namespaces) {
  var targets = namespaces ? [].concat.apply([], [namespaces]).filter(function (e) {
    return e && _typeof(helpers[e]) === 'object';
  }) : null;

  if (!Handlebars || typeof Handlebars.registerHelper !== 'function') {
    throw new Error('Handlebars.registerHelper is undefined.');
  }

  Object.keys(helpers).forEach(function (e) {
    if (_typeof(helpers[e]) !== 'object') {
      return;
    }
    if (targets === null || targets.indexOf(e) !== -1) {
      Object.keys(helpers[e]).forEach(function (name) {
        if (typeof helpers[e][name] === 'function' && !(name in Handlebars.helpers)) {
          Handlebars.registerHelper(name, helpers[e][name]);
        }
      });
    }
  });
};

module.exports = helpers;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var utils = __webpack_require__(0);

var helpers = {};

/**
 * Block helper that renders the block if **both** of the given values
 * are truthy. If an inverse block is specified it will be rendered
 * when falsy.
 *
 * @param {any} `a`
 * @param {any} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * @block
 * @api public
 */

helpers.and = function (a, b, options) {
  if (a && b) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Render a block when a comparison of the first and third
 * arguments returns true. The second argument is
 * the [arithemetic operator][operators] to use. You may also
 * optionally specify an inverse block to render when falsy.
 *
 * @param `a`
 * @param `operator` The operator to use. Operators must be enclosed in quotes: `">"`, `"="`, `"<="`, and so on.
 * @param `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or if specified the inverse block is rendered if falsey.
 * @block
 * @api public
 */

helpers.compare = function (a, operator, b, options) {
  /* eslint eqeqeq: 0*/

  if (arguments.length < 4) {
    throw new Error('handlebars Helper {{compare}} expects 4 arguments');
  }

  var result = void 0;
  switch (operator) {
    case '==':
      result = a == b;
      break;
    case '===':
      result = a === b;
      break;
    case '!=':
      result = a != b;
      break;
    case '!==':
      result = a !== b;
      break;
    case '<':
      result = a < b;
      break;
    case '>':
      result = a > b;
      break;
    case '<=':
      result = a <= b;
      break;
    case '>=':
      result = a >= b;
      break;
    case 'typeof':
      result = (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === b;
      break;
    default:
      {
        throw new Error('helper {{compare}}: invalid operator: `' + operator + '`');
      }
  }

  if (result === false) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 * Block helper that renders the block if `collection` has the
 * given `value`, using strict equality (`===`) for comparison,
 * otherwise the inverse block is rendered (if specified). If a
 * `startIndex` is specified and is negative, it is used as the
 * offset from the end of the collection.
 *
 * Given the array `['a', 'b', 'c']`:
 *
 * ```handlebars
 * {{#contains array "d"}}
 *   This will not be rendered.
 * {{else}}
 *   This will be rendered.
 * {{/contains}}
 * ```
 * @param {Array|Object|String} `collection` The collection to iterate over.
 * @param {any} `value` The value to check for.
 * @param {Number} `[startIndex=0]` Optionally define the starting index.
 * @param {Object} `options` Handlebars provided options object.
 * @block
 * @api public
 */

helpers.contains = function (collection, value, startIndex, options) {
  if ((typeof startIndex === 'undefined' ? 'undefined' : _typeof(startIndex)) === 'object') {
    options = startIndex;
    startIndex = undefined;
  }
  if (utils.contains(collection, value, startIndex)) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Block helper that renders a block if `a` is **greater than** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=""` hash argument for the
 * second value.
 *
 * @name .gt
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.gt = function (a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  if (a > b) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Block helper that renders a block if `a` is **greater than or
 * equal to** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=""` hash argument for the
 * second value.
 *
 * @name .gte
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.gte = function (a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  if (a >= b) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Block helper that renders a block if `value` has `pattern`.
 * If an inverse block is specified it will be rendered when falsy.
 *
 * @param {any} `val` The value to check.
 * @param {any} `pattern` The pattern to check for.
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * @block
 * @api public
 */

helpers.has = function (value, pattern, options) {
  if (arguments.length === 2) {
    return pattern.inverse(this);
  }

  if (arguments.length === 1) {
    return value.inverse(this);
  }

  if ((Array.isArray(value) || utils.isString(value)) && utils.isString(pattern)) {
    if (value.indexOf(pattern) > -1) {
      return options.fn(this);
    }
  }
  if (utils.isObject(value) && utils.isString(pattern) && pattern in value) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Block helper that renders a block if `a` is **equal to** `b`.
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=""` hash argument for the
 * second value.
 *
 * @name .eq
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.eq = function (a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  if (a === b) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Return true if the given value is an even number.
 *
 * ```handlebars
 * {{#ifEven value}}
 *   render A
 * {{else}}
 *   render B
 * {{/ifEven}}
 * ```
 * @param  {Number} `number`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.ifEven = function (num, options) {
  return utils.isEven(num) ? options.fn(this) : options.inverse(this);
};

/**
 * Conditionally renders a block if the remainder is zero when
 * `a` operand is divided by `b`. If an inverse block is specified
 * it will be rendered when the remainder is **not zero**.
 *
 * @param {Number}
 * @param {Number}
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.ifNth = function (a, b, options) {
  if (utils.isNumber(a) && utils.isNumber(b) && b % a === 0) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Block helper that renders a block if `value` is **an odd number**.
 * If an inverse block is specified it will be rendered when falsy.
 *
 * ```handlebars
 * {{#ifOdd value}}
 *   render A
 * {{else}}
 *   render B
 * {{/ifOdd}}
 * ```
 * @param  {Object} `value`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.ifOdd = function (val, options) {
  return utils.isOdd(val) ? options.fn(this) : options.inverse(this);
};

/**
 * Block helper that renders a block if `a` is **equal to** `b`.
 * If an inverse block is specified it will be rendered when falsy.
 *
 * @name .is
 * @param {any} `a`
 * @param {any} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * @block
 * @api public
 */

helpers.is = function (a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  if (a === b) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Block helper that renders a block if `a` is **not equal to** `b`.
 * If an inverse block is specified it will be rendered when falsy.
 *
 * @name .isnt
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * @block
 * @api public
 */

helpers.isnt = function (a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  if (a !== b) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Block helper that renders a block if `a` is **less than** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=""` hash argument for the
 * second value.
 *
 * @name .lt
 * @param {Object} `context`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.lt = function (a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  if (a < b) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Block helper that renders a block if `a` is **less than or
 * equal to** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=""` hash argument for the
 * second value.
 *
 * @name .lte
 * @param {Sring} `a`
 * @param {Sring} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.lte = function (a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  if (a <= b) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Block helper that renders a block if **neither of** the given values
 * are truthy. If an inverse block is specified it will be rendered
 * when falsy.
 *
 * @name .neither
 * @param {any} `a`
 * @param {any} `b`
 * @param `options` Handlebars options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.neither = function (a, b, options) {
  if (!a && !b) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Block helper that renders a block if **any of** the given values
 * is truthy. If an inverse block is specified it will be rendered
 * when falsy.
 *
 * ```handlebars
 * {{#or a b c}}
 *   If any value is true this will be rendered.
 * {{/or}}
 * ```
 *
 * @name .or
 * @param {...any} `arguments` Variable number of arguments
 * @param {Object} `options` Handlebars options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.or = function () /* any, any, ..., options */{
  var len = arguments.length - 1;
  var options = arguments[len];

  for (var i = 0; i < len; i++) {
    if (arguments[i]) {
      return options.fn(this);
    }
  }

  return options.inverse(this);
};

/**
 * Block helper that always renders the inverse block **unless `a` is
 * is equal to `b`**.
 *
 * @name .unlessEq
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Inverse block by default, or block if falsey.
 * @block
 * @api public
 */

helpers.unlessEq = function (context, options) {
  if (context === options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 * Block helper that always renders the inverse block **unless `a` is
 * is greater than `b`**.
 *
 * @name .unlessGt
 * @param {Object} `context`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Inverse block by default, or block if falsey.
 * @block
 * @api public
 */

helpers.unlessGt = function (context, options) {
  if (context > options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 * Block helper that always renders the inverse block **unless `a` is
 * is less than `b`**.
 *
 * @name .unlessLt
 * @param {Object} `context`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.unlessLt = function (context, options) {
  if (context < options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 * Block helper that always renders the inverse block **unless `a` is
 * is greater than or equal to `b`**.
 *
 * @name .unlessGteq
 * @param {Object} `context`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.unlessGteq = function (context, options) {
  if (context >= options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 * Block helper that always renders the inverse block **unless `a` is
 * is less than or equal to `b`**.
 *
 * @name .unlessLteq
 * @param {Object} `context`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.unlessLteq = function (context, options) {
  if (context <= options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

module.exports = helpers;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function flatten(arr) {
  return flat(arr, []);
};

function flat(arr, acc) {
  var len = arr.length;
  var idx = -1;

  while (++idx < len) {
    var cur = arr[idx];
    if (Array.isArray(cur)) {
      flat(cur, acc);
    } else {
      acc.push(cur);
    }
  }
  return acc;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var typeOf = __webpack_require__(1);

module.exports = function isNumber(num) {
  var type = typeOf(num);

  if (type === 'string') {
    if (!num.trim()) return false;
  } else if (type !== 'number') {
    return false;
  }

  return num - num + 1 >= 0;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-even <https://github.com/jonschlinkert/is-even>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isNumber = __webpack_require__(9);
var isOdd = __webpack_require__(2);

module.exports = function isEven(i) {
  if (!isNumber(i)) {
    throw new TypeError('is-even expects a number.');
  }
  return !isOdd(i);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



module.exports = function isNumber(n) {
  return !!+n && !Array.isArray(n) && isFinite(n) || n === '0' || n === 0;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



module.exports = function isNumber(n) {
  return !!+n && !Array.isArray(n) && isFinite(n) || n === '0' || n === 0;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * index-of <https://github.com/jonschlinkert/index-of>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */



module.exports = function indexOf(arr, ele, start) {
  start = start || 0;
  var idx = -1;

  if (arr == null) return idx;
  var len = arr.length;
  var i = start < 0 ? len + start : start;

  if (i >= arr.length) {
    return -1;
  }

  while (i < len) {
    if (arr[i] === ele) {
      return i;
    }
    i++;
  }

  return -1;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * make-iterator <https://github.com/jonschlinkert/make-iterator>
 *
 * Copyright (c) 2014, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var typeOf = __webpack_require__(1);

module.exports = function makeIterator(target, thisArg) {
  switch (typeOf(target)) {
    case 'undefined':
    case 'null':
      return noop;
    case 'function':
      // function is the first to improve perf (most common case)
      // also avoid using `Function#call` if not needed, which boosts
      // perf a lot in some cases
      return typeof thisArg !== 'undefined' ? function (val, i, arr) {
        return target.call(thisArg, val, i, arr);
      } : target;
    case 'object':
      return function (val) {
        return deepMatches(val, target);
      };
    case 'regexp':
      return function (str) {
        return target.test(str);
      };
    case 'string':
    case 'number':
    default:
      {
        return prop(target);
      }
  }
};

function containsMatch(array, value) {
  var len = array.length;
  var i = -1;

  while (++i < len) {
    if (deepMatches(array[i], value)) {
      return true;
    }
  }
  return false;
}

function matchArray(arr, value) {
  var len = value.length;
  var i = -1;

  while (++i < len) {
    if (!containsMatch(arr, value[i])) {
      return false;
    }
  }
  return true;
}

function matchObject(obj, value) {
  for (var key in value) {
    if (value.hasOwnProperty(key)) {
      if (deepMatches(obj[key], value[key]) === false) {
        return false;
      }
    }
  }
  return true;
}

/**
 * Recursively compare objects
 */

function deepMatches(val, value) {
  if (typeOf(val) === 'object') {
    if (Array.isArray(val) && Array.isArray(value)) {
      return matchArray(val, value);
    } else {
      return matchObject(val, value);
    }
  } else {
    return val === value;
  }
}

function prop(name) {
  return function (obj) {
    return obj[name];
  };
}

function noop(val) {
  return val;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

var helpers = {};

/**
 * Return the product of `a` plus `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @api public
 */

helpers.add = function (a, b) {
  return a + b;
};

/**
 * Return the product of `a` minus `b`.
 *
 * @param {Number} a
 * @api public
 */

helpers.subtract = function (a, b) {
  return a - b;
};

/**
 * Divide `a` by `b`
 *
 * @param {Number} `a` numerator
 * @param {Number} `b` denominator
 * @api public
 */

helpers.divide = function (a, b) {
  return a / b;
};

/**
 * Multiply `a` by `b`.
 *
 * @param {Number} `a` factor
 * @param {Number} `b` multiplier
 * @api public
 */

helpers.multiply = function (a, b) {
  return a * b;
};

/**
 * Get the `Math.floor()` of the given value.
 *
 * @param {Number} `value`
 * @api public
 */

helpers.floor = function (value) {
  return Math.floor(value);
};

/**
 * Get the `Math.ceil()` of the given value.
 *
 * @param {Number} `value`
 * @api public
 */

helpers.ceil = function (value) {
  return Math.ceil(value);
};

/**
 * Round the given value.
 *
 * @param {Number} `value`
 * @api public
 */

helpers.round = function (value) {
  return Math.round(value);
};

/**
 * Returns the sum of all numbers in the given array.
 *
 * ```handlebars
 * {{sum "[1, 2, 3, 4, 5]"}}
 * //=> '15'
 * ```
 *
 * @name .sum
 * @param {Array} `array` Array of numbers to add up.
 * @return {Number}
 * @api public
 */

helpers.sum = function () {
  var args = utils.flatten([].concat.apply([], arguments));
  var i = args.length,
      sum = 0;
  while (i--) {
    if (!utils.isNumber(args[i])) {
      continue;
    }
    sum += +args[i];
  }
  return sum;
};

/**
 * Returns the average of all numbers in the given array.
 *
 * ```handlebars
 * {{avg "[1, 2, 3, 4, 5]"}}
 * //=> '3'
 * ```
 *
 * @name .avg
 * @param {Array} `array` Array of numbers to add up.
 * @return {Number}
 * @api public
 */

helpers.avg = function () {
  var args = utils.flatten([].concat.apply([], arguments));
  // remove handlebars options object
  args.pop();
  return exports.sum(args) / args.length;
};

module.exports = helpers;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Expose `helpers`
 */

var helpers = {};

/**
 * Add commas to numbers
 *
 * @param {Number} `num`
 * @return {Number}
 * @api public
 */

helpers.addCommas = function (num) {
  return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};

/**
 * Convert a string or number to a formatted phone number.
 *
 * @param  {Number|String} `num` The phone number to format, e.g. `8005551212`
 * @return {Number} Formatted phone number: `(800) 555-1212`
 * @source http://bit.ly/QlPmPr
 * @api public
 */

helpers.phoneNumber = function (num) {
  num = num.toString();

  return '(' + num.substr(0, 3) + ') ' + num.substr(3, 3) + '-' + num.substr(6, 4);
};

/**
 * Generate a random number between two values
 *
 * @param  {Number} `min`
 * @param  {Number} `max`
 * @contributor Tim Douglas <https://github.com/timdouglas>
 * @return {String}
 * @api public
 */

helpers.random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Abbreviate numbers to the given number of `precision`. This is for
 * general numbers, not size in bytes.
 *
 * @param  {Number} `number`
 * @param  {Number} `precision`
 * @return {String}
 * @api public
 */

helpers.toAbbr = function (number, precision) {
  if (!utils.isNumber(number)) {
    number = 0;
  }
  if (utils.isUndefined(precision)) {
    precision = 2;
  }

  number = +number;
  // 2 decimal places => 100, 3 => 1000, etc.
  precision = Math.pow(10, precision);
  var abbr = ['k', 'm', 'b', 't', 'q'];
  var len = abbr.length - 1;

  while (len >= 0) {
    var size = Math.pow(10, (len + 1) * 3);
    if (size <= number + 1) {
      number = Math.round(number * precision / size) / precision;
      number += abbr[len];
      break;
    }
    len--;
  }
  return number;
};

/**
 * Returns a string representing the given number in exponential notation.
 *
 * ```js
 * {{toExponential number digits}};
 * ```
 * @param {Number} `number`
 * @param {Number} `fractionDigits` Optional. An integer specifying the number of digits to use after the decimal point. Defaults to as many digits as necessary to specify the number.
 * @return {Number}
 * @api public
 */

helpers.toExponential = function (number, digits) {
  if (!utils.isNumber(number)) {
    number = 0;
  }
  if (utils.isUndefined(digits)) {
    digits = 0;
  }
  number = +number;
  return number.toExponential(digits);
};

/**
 * Formats the given number using fixed-point notation.
 *
 * @param {Number} `number`
 * @param {Number} `digits` Optional. The number of digits to use after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0.
 * @return {Number}
 * @api public
 */

helpers.toFixed = function (number, digits) {
  if (!utils.isNumber(number)) {
    number = 0;
  }
  if (utils.isUndefined(digits)) {
    digits = 0;
  }
  number = +number;
  return number.toFixed(digits);
};

/**
 * @param {Number} `number`
 * @return {Number}
 * @api public
 */

helpers.toFloat = function (number) {
  return parseFloat(number);
};

/**
 * @param {Number} `number`
 * @return {Number}
 * @api public
 */

helpers.toInt = function (number) {
  return parseInt(number, 10);
};

/**
 * @param {Number} `number`
 * @param {Number} `precision` Optional. The number of significant digits.
 * @return {Number}
 * @api public
 */

helpers.toPrecision = function (number, precision) {
  if (!utils.isNumber(number)) {
    number = 0;
  }
  if (utils.isUndefined(precision)) {
    precision = 1;
  }
  number = +number;
  return number.toPrecision(precision);
};

module.exports = helpers;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var helpers = {};

function isArray(arg) {
  return Object.prototype.toString.call(arg) === '[object Array]';
}

helpers.toArray = function () {
  return Array.prototype.slice.call(arguments, 0, -1);
};

helpers.adcr = function (uri, meta, segments, identifier, replacement) {
  if (!isArray(segments)) {
    replacement = identifier;
    identifier = segments;
  }
  var key = typeof identifier === 'string' ? identifier.replace(/%REPLACE%/g, replacement) : '';
  var adEventLogAttr = key ? '" data-ad-event-log="key:' + key + ';' : '';
  return uri + adEventLogAttr;
};

helpers.adcrBeacon = function (eventCode, meta, segments, replacement) {
  if (!isArray(segments)) {
    replacement = segments;
  }
  var key = typeof eventCode === 'string' ? eventCode.replace(/%REPLACE%/g, replacement) : '';
  return 'https://example.com/?x=[[encrypted::' + JSON.stringify({ eventCode: key, meta: meta }) + ']]';
};

helpers.vodOutKey = function (videoId) {
  if (!videoId || typeof videoId !== 'string') {
    return '';
  }
  return videoId.split('::')[1] || '';
};

helpers.vodVideoId = function (videoId) {
  if (!videoId || typeof videoId !== 'string') {
    return '';
  }
  return videoId.split('::')[0];
};

helpers.vodBuildPhase = function (videoId) {
  if (!videoId || typeof videoId !== 'string') {
    return '';
  }
  var buildPhase = videoId.split('::')[2] || '';
  return buildPhase === 'test' ? 'dev' : buildPhase;
};

helpers.imgPath = function () {
  var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var width = arguments[1];
  var height = arguments[2];
  var isBackground = arguments[3];

  if (!source) {
    return '" data-empty-image="' + width + ',' + height + (isBackground === true ? ',true' : '') + '"';
  }
  return source;
};

helpers.regexpReplace = function (value, pattern, replacement) {
  var regexp = new RegExp(pattern, 'g');
  return (value || '').replace(regexp, replacement);
};

var cache = { text: {}, shade: {} };

var getGrayscale = function getGrayscale() {
  var rgb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var matches = rgb.toLowerCase().match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/);
  if (matches) {
    return Math.round((parseInt(matches[1], 16) + parseInt(matches[2], 16) + parseInt(matches[3], 16)) / 3);
  }
  return 0;
};

helpers.suggestedFontColor = function (bgColor) {
  var COLOR_INVERT_CRITERIA = 160;
  if (!bgColor) {
    return '#000000';
  }
  if (!cache.text[bgColor]) {
    var grayscale = getGrayscale(bgColor);
    cache.text[bgColor] = grayscale < COLOR_INVERT_CRITERIA ? '#ffffff' : '#000000';
  }
  return cache.text[bgColor];
};

module.exports = helpers;

/***/ })
/******/ ]);
});