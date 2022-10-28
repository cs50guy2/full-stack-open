module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
  },
};
