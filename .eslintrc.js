module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: [2, 'single'],
    indent: ['error', 2]
  }
};
  