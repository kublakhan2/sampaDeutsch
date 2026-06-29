import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"], plugins: { js, "@stylistic": stylistic }, extends: ["js/recommended"], languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "warn",
      "block-scoped-var": "error",
      "dot-notation": "warn",
      "eqeqeq": "warn",
      "func-style": ["warn", "declaration", { "allowArrowFunctions": true }],
      "no-array-constructor": "warn",
      "yoda": ["warn", "never"], // https://eslint.org/docs/latest/rules/yoda 
      "require-unicode-regexp": ["error", { requireFlag: "v" }],
      "prefer-const": "warn",
      "no-useless-return": "error",
      "no-var": "error",
      "no-unused-expressions": "warn",
      "no-shadow": "warn",  // https://eslint.org/docs/latest/rules/no-shadow
      "@stylistic/semi": ["error", "always"],
      "@stylistic/array-bracket-spacing": ["warn", "never"],
      "@stylistic/arrow-parens": ["warn", "as-needed", { "requireForBlockBody": true }],
      // https://eslint.style/rules
    }
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
]);
