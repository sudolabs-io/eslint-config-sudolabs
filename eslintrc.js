module.exports = {
  plugins: ["import"],
  rules: {
    "import/prefer-default-export": 0,
    "class-methods-use-this": 0,
    "eslint-disable no-restricted-syntax": 0,
    "consistent-return": "error",
    radix: ["error", "as-needed"],
    "no-underscore-dangle": 0,
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "styled-components/macro",
            message: "Please don't import from styled-components/macro.",
          },
        ],
      },
    ],
    "no-alert": 0,
    "no-confusing-arrow": ["off"],
    "global-require": [0],
    semi: [2, "never"],
    "no-shadow": "off",
    "object-curly-newline": 0,
    "function-paren-newline": 0,
    "no-restricted-globals": 0,
    "no-catch-shadow": 0,
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
  },
};
