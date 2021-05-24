module.exports = {
  settings: {
    react: { version: "detect" },
  },
  rules: {
    "react/react-in-jsx-scope": 0,
    "react/self-closing-comp": "error",
    "react/require-default-props": 0,
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "react/jsx-props-no-spreading": 0,
  },
};
