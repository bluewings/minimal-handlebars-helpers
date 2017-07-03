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

['regexpReplace helper',
`regexp replace: {{regexpReplace example '^([0-9]{4})-([0-9]{2}).*$' '$1.$2.'}}`,
{ example: '2017-03-21' },
`regexp replace: 2017.03.`],

['suggestedFontColor',
`{{#each colors}}
{{this}} → {{suggestedFontColor this}}
{{/each}}`,
{ colors: ['#000000', '#ffffff', '#9f9f9f', '#a0a0a0', '#ff0000'] },
`#000000 → #ffffff
#ffffff → #000000
#9f9f9f → #ffffff
#a0a0a0 → #000000
#ff0000 → #ffffff
`],
];
/* eslint-enable */

describe('simple', () => {
  tests.forEach(([name, input, data, expected]) => {
    it(name, () => run(input, data).then((output) => {
      output.should.be.eql(expected);
    }));
  });
});
