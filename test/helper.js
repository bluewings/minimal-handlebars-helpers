const Handlebars = require('handlebars');
const helpers = require('../index.js');

helpers.register(Handlebars);

exports.run = function run(input, data) {
  return new Promise((resolve) => {
    resolve(Handlebars.compile(input)(data));
  });
};
