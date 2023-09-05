module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-refresh'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'no-unused-vars': 0,
    'no-restricted-imports': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'react-refresh/only-export-components': [1, { allowConstantExport: true }],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
  },
};
