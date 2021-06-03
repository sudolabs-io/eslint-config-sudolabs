module.exports = {
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': 'error',
    'react/static-property-placement': ['error', 'static public field'],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/jsx-props-no-spreading': 0,
  },
}
