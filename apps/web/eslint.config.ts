import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

import unusedImports from 'eslint-plugin-unused-imports';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import importPlugin from 'eslint-plugin-import';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'max-lines': ['error', { max: 400, skipBlankLines: true, skipComments: true }],
      'max-lines-per-function': ['error', { max: 80, skipBlankLines: true, skipComments: true }],
      complexity: ['warn', 12],
      'max-params': ['warn', 3],
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);
