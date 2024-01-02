const eslint = require('eslint');
const noOmitIndex = require('../src/rules/no-omit-index');

const validCodes = [
  "import { fooFunction } from './foo/index';",
  "import { fooFunction } from './foo/index.js';",
  "import { fooFunction } from './foo/bar';",
  "import { fooFunction } from './bar';",
];

const invalidCodes = [
  "import { fooFunction } from './foo';",
  "import { fooFunction } from './'"
]

/** @type {import('eslint').Linter.Config} */
const config = {
  parserOptions: {
    sourceType: 'module',
    ecmaversion: 2020
  },
  env: {
    es6: true,
    node: true
  },
}
const tester = new eslint.RuleTester(config);
tester.run('no-omit-index', noOmitIndex, {
  valid: validCodes.map(code => ({ code })),
  invalid: invalidCodes.map(code => ({
    code,
    errors: [
      { messageId: 'indexOmitted' }
    ]
  }))
});

