// @ts-check
const { statSync } = require('node:fs');
const { resolve } = require('node:path');
const { getFileExtensions } = require('eslint-module-utils/ignore');

/** @type {import('eslint').Rule.RuleModule} */ 
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow omitting "index" in import paths',
      category: 'Best Practices',
      recommended: false
    },
    schema: [],
    messages: {
      indexOmitted: 'Avoid omitting "index" in import paths',
    }
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        const importPath = /** @type {string} */ (node.source.value);
        const absolutePath = resolve(context.cwd, importPath);
        const isDirectory = statSync(absolutePath, { throwIfNoEntry: false })?.isDirectory();
        const extensions = getFileExtensions(context.settings);
        const hasIndexRegex = new RegExp(`.*\\/index(\\${Array.from(extensions).join('|\\')})`);
        if (isDirectory && !hasIndexRegex.test(importPath)) {
          context.report({
            node,
            messageId: 'indexOmitted'
          })
        }
      }
    }
  }
}
