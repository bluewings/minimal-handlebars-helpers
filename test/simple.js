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

['nested loop',
`{{#each cards }}
  {{#each this.thumbs }}
  a(href='{{{adcr this.link @root._ \'$.cards[$1].thumbs[$2].link\' (toArray @../index @index)}}}')
  {{/each }}
{{/each }}`,
{ cards: [
  {
    thumbs: [
      { link: 'http://examples.com/0/0' },
      { link: 'http://examples.com/0/1' }
    ]
  },
  {
    thumbs: [
      { link: 'http://examples.com/1/0' },
      { link: 'http://examples.com/1/1' }
    ]
  }
] },
`  a(href='http://examples.com/0/0" data-ad-event-log="key:$.cards[0].thumbs[0].link;')
  a(href='http://examples.com/0/1" data-ad-event-log="key:$.cards[0].thumbs[1].link;')
  a(href='http://examples.com/1/0" data-ad-event-log="key:$.cards[1].thumbs[0].link;')
  a(href='http://examples.com/1/1" data-ad-event-log="key:$.cards[1].thumbs[1].link;')
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
