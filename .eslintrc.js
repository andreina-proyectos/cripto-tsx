module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      useJSXTextNode: true
    }
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "camelcase": "off",
    "@typescript-eslint/camelcase": ["error", {"properties": "never"}]
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  plugins: ["@typescript-eslint", "react-hooks"]
};