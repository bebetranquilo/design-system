module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: [
    "custom",
    "stylelint-prettier/recommended",
    "stylelint-config-prettier",
    "prettier",
  ],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
    },
  },
};
