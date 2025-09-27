import js from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import importX from 'eslint-plugin-import-x';
import nodePlugin from 'eslint-plugin-n';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  js.configs.recommended,
  nodePlugin.configs['flat/recommended'],
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: eslintPluginPrettier,
      'import-x': importX,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
        tsconfigRootDir: __dirname,
      },
      globals: {
        fetch: false,
        Response: false,
        Request: false,
        addEventListener: false,
      },

      ecmaVersion: 2021,
      sourceType: 'module',
    },

    rules: {
      curly: ['error', 'all'],
      'no-debugger': ['error'],

      'no-empty': [
        'warn',
        {
          allowEmptyCatch: true,
        },
      ],

      'no-process-exit': 'off',
      'no-useless-escape': 'off',

      'prefer-const': [
        'warn',
        {
          destructuring: 'all',
        },
      ],

      'import-x/consistent-type-specifier-style': 'off',
      'import-x/order': [
        'error',
        {
          groups: [
            'external',
            'builtin',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import-x/no-duplicates': 'error',

      'n/no-missing-import': 'off',
      'n/no-missing-require': 'off',
      'n/no-deprecated-api': 'off',
      'n/no-unpublished-import': 'off',
      'n/no-unpublished-require': 'off',
      'n/no-unsupported-features/es-syntax': 'off',
      'n/no-unsupported-features/node-builtins': 'off',

      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['arrowFunctions'],
        },
      ],
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-unnecessary-template-expression': 'off',
      'n/no-extraneous-import': 'off',

      'prettier/prettier': 'error',
    },
  },
  prettier,
];
