module.exports = {
  plugins: ['cypress'],
  extends: ['plugin:cypress/recommended'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'jest/valid-expect': 0,
    'jest/valid-expect-in-promise': 0,
    'jest/expect-expect': 0,
  },
}
