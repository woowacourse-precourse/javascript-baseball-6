module.exports = {
  env: {
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
    'eslint:recommended',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': ['off'],
    'linebreak-style': 0,
    'no-plusplus': 0,
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off',
    'no-process-exit': 'error',
  },
};
