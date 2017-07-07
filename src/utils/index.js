'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var flatten = require('arr-flatten');
var isNumber = require('is-number');
var isEven = require('is-even');
var isOdd = require('is-odd');
var indexOf = require('index-of');
var iterator = require('make-iterator');

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