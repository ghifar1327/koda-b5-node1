import globals from "globals";
import { defineConfig, globalIgnores } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      semi: "error",
      "no-var": "error",
      "@stylistic/indent": ["error", 2],
      "no-unused-vars": "warn",
      "eqeqeq": "error"
    },
  },
  globalIgnores(["ESLint.config.js"]),
]);
