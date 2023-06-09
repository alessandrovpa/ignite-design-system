module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  overrides: [
    {
      files: ["src/**/*.ts", "src/**/*.tsx"],
      rules: {
        "prettier/prettier": ["error", {
          singleQuote: true
        }]
      }
    }
  ]
}
