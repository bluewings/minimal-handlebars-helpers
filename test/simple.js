/* global describe it */
/* eslint no-undef: "error" */
require('should');
const run = require('./helper').run;

/* eslint-disable */
const tests = [
['basic conversion',
`{{#is value true}}TRUE{{else}}FALSE{{/is}}`,
{ value: true },
`TRUE`],

['moment helper',
`moment: {{moment example format="YYYY.M.D."}}`,
{ example: '2017-03-21' },
`moment: 2017.3.21.`],
];
/* eslint-enable */

describe('simple', () => {
  tests.forEach(([name, input, data, expected]) => {
    it(name, () => run(input, data).then((output) => {
      output.should.be.eql(expected);
    }));
  });
});
