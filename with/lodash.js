module.exports = {
  plugins: ['lodash'],
  rules: {
    'lodash/callback-binding': 2,
    'lodash/chain-style': [2, 'as-needed'],
    'lodash/collection-method-value': 2,
    'lodash/collection-return': 2,
    'lodash/consistent-compose': [2, 'flow'],
    'lodash/unwrap': 2,
    'lodash/no-double-unwrap': 2,
    'lodash/no-extra-args': 2,
    'lodash/no-unbound-this': 2,
    'lodash/prefer-immutable-method': 2,
    'lodash/preferred-alias': 2,
  },
}
