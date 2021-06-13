module.exports = {
    root: true,
    env: {
      node: true,
      es6: true,
    },
    parserOptions: { ecmaVersion: 8 }, // to enable features such as async/await
    ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
    extends: ['eslint:recommended'],
    overrides: [
      // This configuration will apply only to TypeScript files
      {
        files: ['**/*.ts', '**/*.tsx'],
        parser: '@typescript-eslint/parser',
        settings: { react: { version: 'detect' } },
        env: {
          browser: true,
          node: true,
          es6: true,
        },
        extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended', // TypeScript rules
          'plugin:prettier/recommended', // Prettier plugin
          'plugin:react/recommended', // React rules
          'plugin:react-hooks/recommended', // React hooks rules
          'plugin:jsx-a11y/recommended', // Accessibility rules
        ],
        rules: {
          // We will use TypeScript's types for component props instead
          'react/prop-types': 'off',
  
          'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
          // No need to import React when using Next.js
          'react/react-in-jsx-scope': 'off',
  
          // This rule is not compatible with Next.js's <Link /> components
          'jsx-a11y/anchor-is-valid': 'off',
  
          // Why would you want unused vars?
          '@typescript-eslint/no-unused-vars': ['error'],
  
          'react-hooks/exhaustive-deps': 'off',
          'react/jsx-no-duplicate-props': 'off',
          'jsx-a11y/accessible-emoji': 'off',
          '@typescript-eslint/explicit-module-boundary-types': 'off',
          // I suggest this setting for requiring return types on functions only where useful
          '@typescript-eslint/explicit-function-return-type': [
            'off',
            {
              allowExpressions: true,
              allowConciseArrowFunctionExpressionsStartingWithVoid: true,
            },
          ],
        },
      },
    ],
  }