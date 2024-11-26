const typescriptEslintParser = require('@typescript-eslint/parser');

module.exports = {
  languageOptions: {
    parser: typescriptEslintParser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  rules: {
    'comma-dangle': [2, 'always-multiline'],
  }
};
