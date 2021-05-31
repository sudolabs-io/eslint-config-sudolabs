module.exports = {
  extends: ['airbnb', 'airbnb/hooks', './typescript', './react', './eslintrc'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/prop-types': 0,
    'react/require-default-props': 0,
  },
}
