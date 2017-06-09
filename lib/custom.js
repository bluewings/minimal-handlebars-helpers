'use strict';

var helpers = {};

helpers.adcr = function (uri, meta, identifier, replacement) {
  var key = typeof identifier === 'string' ? identifier.replace(/%REPLACE%/g, replacement) : '';
  var adEventLogAttr = key ? '" data-ad-event-log="key:' + key + ';' : '';
  return uri + adEventLogAttr;
};

helpers.adcrBeacon = function (eventCode, meta, replacement) {
	var key = typeof eventCode === 'string' ? eventCode.replace(/%REPLACE%/g, replacement) : '';
	return 'https://example.com/?x=[[encrypted::' + JSON.stringify({ eventCode: key, meta }) + ']]';
};

helpers.imgPath = function (imgPath) {
  return imgPath;
};

module.exports = helpers;
