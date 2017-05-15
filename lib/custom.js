'use strict';

var helpers = {};

helpers.adcr = function (uri, meta, identifier, replacement) {
  var key = typeof identifier === 'string' ? identifier.replace(/%REPLACE%/g, replacement) : '';
  var adEventLogAttr = key ? '" data-ad-event-log="key:' + key + ';' : '';
  return uri + adEventLogAttr;
};

helpers.imgPath = function (imgPath) {
  return imgPath;
};

module.exports = helpers;
