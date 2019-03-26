module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: ["airbnb-typescript"],
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,  // Allows for the parsing of JSX
    },
  },
  rules: {
  },
};