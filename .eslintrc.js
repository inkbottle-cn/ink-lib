// This is a workaround for https://github.com/eslint/eslint/issues/3458
require("@rushstack/eslint-config/patch/modern-module-resolution");

module.exports = {
  extends: [ "@rushstack/eslint-config","plugin:prettier/recommended" ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    eqeqeq: [2, "smart"],
  },
  ignorePatterns: ["node_modules/", "dist/", "tests/", "*.test.ts", "example/"],
  env: {
    node: true,
  },
};
