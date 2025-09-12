import antfu from '@antfu/eslint-config'

export default antfu({
  isInEditor: false,
  ignores: ['.husky/', '.vscode/', '.yarn/', 'coverage/', 'dist/'],
  type: 'lib',
  vue: {
    overrides: {
      'vue/max-attributes-per-line': ['error', {
        singleline: 5,
      }],
      'vue/singleline-html-element-content-newline': 'off',
    },
  },
  typescript: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
    overrides: {
      'ts/no-floating-promises': 'warn',
      'ts/explicit-function-return-type': 'off',
      'ts/ban-ts-comment': 'warn',
      'ts/await-thenable': 'warn',
    },
  },
  jsonc: true,
  javascript: true,
  formatters: {
    html: true,
    css: true,
  },
}, {
  rules: {
    'style/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0 }],
    'node/prefer-global/process': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': 'error',
    'curly': ['error', 'multi-or-nest', 'consistent'],
    'style/jsx-curly-spacing': ['error', { when: 'always', children: true, spacing: { objectLiterals: 'never' } }],
    'import-x/consistent-type-specifier-style': 'off',
  },
})
