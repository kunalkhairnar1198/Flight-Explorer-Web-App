module.exports = {
  env: {
    browser: true,
    es2024: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:react/all',
  ],
  plugins: ['react', 'import'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // 🔧 React & JSX rules
    'react/jsx-no-bind': 'off',
    'react/jsx-newline': 'off',
    'react/no-array-index-key': 'off',
    'react/button-has-type': 'off',
    'react/no-multi-comp': 'off',

    'react/jsx-max-depth': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-no-literals': 'off',
    'react/hook-use-state': 'off',
    'react/forbid-component-props': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
      },
    ],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-tag-spacing': [
      'error',
      {
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/jsx-key': 'error',
    'react/jsx-no-target-blank': [
      'error',
      {
        enforceDynamicLinks: 'always',
        allowReferrer: false,
      },
    ],

    // ⚙️ General rules
    'no-console': 'warn',
    'no-unused-vars': ['warn', { vars: 'all', args: 'none', ignoreRestSiblings: false }],
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'max-len': ['warn', { code: 500 }],

    // 📦 Import rules
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        json: 'always',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'import/no-mutable-exports': 'error',

    // 🧪 Accessibility (can be tuned)
    'jsx-a11y/anchor-is-valid': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
