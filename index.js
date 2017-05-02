const helpers = require('./lib');

helpers.register = (Handlebars, namespaces) => {
  const targets = namespaces ? [].concat.apply([], [namespaces])
    .filter(e => e && typeof helpers[e] === 'object') : null;

  if (!Handlebars || typeof Handlebars.registerHelper !== 'function') {
    throw new Error('Handlebars.registerHelper is undefined.');
  }

  Object.keys(helpers).forEach((e) => {
    if (typeof helpers[e] !== 'object') {
      return;
    }
    if (targets === null || targets.indexOf(e) !== -1) {
      Object.keys(helpers[e]).forEach((name) => {
        if (typeof helpers[e][name] === 'function') {
          Handlebars.registerHelper(name, helpers[e][name]);
        }
      });
    }
  });
};

module.exports = helpers;
