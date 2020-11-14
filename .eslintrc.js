module.exports = {
  root: true,
  extends: [
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    'es6': true,
    'worker': true,
    'browser': true,
    'jest': true,
  },
  plugins: [],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js"],
      },
    },
  },
  rules: {
    'no-case-declarations': 'off',
    'no-fallthrough': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'only-multiline',
    }],
    'consistent-return': 'off',
    'curly': ['error', 'multi-line', 'consistent'],
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'jsx-quotes': 'off',
    'keyword-spacing': ['error', {
      'overrides': {
        'if': { 'after': false },
        'while': { 'after': false },
        'for': { 'after': false },
        'switch': { 'after': false },
        'catch': { 'after': false },
      },
    }],
    'max-classes-per-file': 'off',
    'max-len': ['error', {
      'code': 115,
      'ignoreRegExpLiterals': true,
    }],
    'no-confusing-arrow': 'off',
    'no-console': 'off',
    'no-continue': 'off',
    'no-else-return': ['error', {
      'allowElseIf': true,
    }],
    'no-mixed-operators': 'off',
    'no-multi-spaces': ['error', {
      'ignoreEOLComments': true,
      'exceptions': {
        'Property': true,
        'VariableDeclarator': true,
        'ImportDeclaration': true,
      },
    }],
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'no-shadow': 'off',
    'no-undef-init': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-expressions': ['error', {
      'allowShortCircuit': true,
      'allowTernary': true,
    }],
    'no-use-before-define': 'off',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': ['error', {
      'consistent': true,
    }],
    'operator-linebreak': 'off',
    'prefer-destructuring': ["error",
      {
        'VariableDeclarator': {
          'array': false,
          'object': true,
        },
        'AssignmentExpression': {
          'array': false,
          'object': false,
        },
      },
      {
        'enforceForRenamedProperties': false,
      },
    ],
    'prefer-object-spread': 'off',
    'quotes': 'off',
    'quote-props': ['error', 'as-needed', { 'unnecessary': false }],
    'semi': ['error', 'never'],
    'semi-style': ['error', 'first'],

    // Begin import rules
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'never'],
  },
}
