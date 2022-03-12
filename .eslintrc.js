module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['eslint-config-mdh-typescript-backend'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
};
