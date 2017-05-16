'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var helpers = require('./lib');

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