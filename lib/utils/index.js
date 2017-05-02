const flatten = require('arr-flatten');
const isNumber = require('is-number');
const isEven = require('is-even');
const isOdd = require('is-odd');
const indexOf = require('index-of');
const iterator = require('make-iterator');

const utils = {
  flatten,
  isNumber,
  isEven,
  isOdd,
  indexOf,
  iterator,
};

utils.isObject = function (value) {
  return value && typeof value === 'object'
    && !Array.isArray(value);
};

utils.isString = function (val) {
  return val && typeof val === 'string';
};

utils.isUndefined = function (val) {
  return typeof val === 'undefined'
    || (val.hash != null);
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
  const len = val ? val.length : 0;
  const idx = start < 0
    ? Math.max(0, len + start)
    : start;

  let res = false;
  let i = 0;

  start = idx || 0;

  if (Array.isArray(val)) {
    res = utils.indexOf(val, obj, start) > -1;
  } else if (utils.isNumber(len)) {
    res = (typeof val === 'string'
      ? val.indexOf(obj, start)
      : utils.indexOf(val, obj, start)) > -1;
  } else {
    utils.iterator(val, (ele) => {
      if (start < i++) {
        return !(res = (ele === obj));
      }
    });
  }
  return res;
};

module.exports = utils;
