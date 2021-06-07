module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint', 'prettier', 'sonarjs'],
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'standard',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended',
  ],
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    'prettier/prettier': 'error',
    indent: 'off',
    'no-console': 'warn',
    quotes: ['error', 'single'],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
};
