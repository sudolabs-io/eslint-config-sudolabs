module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    './eslintrc',
  ],
  rules: {
    'no-void': ['error', { allowAsStatement: true }],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          [
            // Packages. `react` related packages come first.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            '^react',
            '^@?\\w',
            '^(theme)(/.*|$)',
            '^(constants)(/.*|$)',
            // Absolute imports and Relative imports.
            '^(utils|components|screens|routes|providers|assets)(/.*|$)',
            '^\\.',
            // for scss imports.
            '^[^.]',
          ],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/semi': [2, 'never'],
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enum',
        format: ['UPPER_CASE'],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        caughtErrors: 'all',
      },
    ],
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    '@typescript-eslint/ban-ts-comment': 0,
  },
}
