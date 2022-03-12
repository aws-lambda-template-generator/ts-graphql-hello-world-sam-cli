module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['eslint-config-mdh-typescript-backend'],
  overrides: [{ files: ['**/*.ts'] }],
  rules: {},
};
