'use strict';

var helpers = {};

function isArray (arg) {
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
  if (identifier.search(/\$[0-9]+/) !== -1 && isArray(replacement)) {
    key = key.replace(/\$[0-9]+/g, function (whole) {
      var arrIndex = parseInt(whole.replace(/\$/, ''), 10) - 1;
      if (!isNaN(arrIndex) && typeof replacement[arrIndex] !== 'undefined') {
        return replacement[arrIndex];
      }
      return whole;
    });
  }
  var adEventLogAttr = key ? '" data-ad-event-log="key:' + key + ';' : '';
  return uri + adEventLogAttr;
};

helpers.adcrWithTrCode = function (trCode, uri, meta, segments, identifier, replacement) {
  return helpers.adcr(uri, meta, segments, identifier, replacement);
};

helpers.adcrBeacon = function (eventCode, meta, segments, replacement) {
  if (!isArray(segments)) {
    replacement = segments;
  }
	var key = typeof eventCode === 'string' ? eventCode.replace(/%REPLACE%/g, replacement) : '';
	return 'https://example.com/?x=[[encrypted::' + JSON.stringify({ eventCode: key, meta: meta }) + ']]';
};

helpers.adcrBeaconWithTrCode = function (trCode, eventCode, meta, segments, replacement) {
  return helpers.adcrBeacon(eventCode, meta, segments, replacement);
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

helpers.vodBuildPhase = (videoId) => {
	if (!videoId || typeof videoId !== 'string') {
		return '';
	}
  let buildPhase = videoId.split('::')[2] || '';
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
