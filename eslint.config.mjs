import js from '@eslint/js'
import typescript from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
    js.configs.recommended,
    ...typescript.configs.recommended,
    {
        ignores: [
            'node_modules/**',
            'prisma/src/**',
            '.next/**',
            '.idea/**'
        ]
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
            'simple-import-sort': eslintPluginSimpleImportSort
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            /** TypeScript rules */
            '@typescript-eslint/no-unused-expressions': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_'
                }
            ],

            /** React rules */
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/no-unescaped-entities': 'warn',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            /** Import sorting rules */
            'simple-import-sort/imports': [
                'warn',
                {
                    groups: [
                        /** React imports (always first) */
                        ['^react$', '^react-dom$'],

                        /** Next.js imports */
                        ['^next', '^next/'],

                        /** Other third-party packages */
                        ['^[^@.]'],

                        /** Third-party @-scoped packages */
                        ['^@(?!/)'],

                        /** Custom imports (@/*) - grouped by subdirectory */
                        ['^@/types'],
                        ['^@/components'],
                        ['^@/hooks'],
                        ['^@/lib'],
                        ['^@/actions'],
                        ['^@/services'],
                        ['^@/constants'],
                        ['^@/config'],
                        ['^@/models'],
                        ['^@/validation'],
                        ['^@/db'],
                        ['^@/middleware'],
                        ['^@/'],

                        /** Relative imports (parent directories) */
                        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],

                        /** Relative imports (same directory) */
                        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

                        /** Style imports (CSS files) - always last */
                        ['^.+\\.css$']
                    ]
                }
            ],
            'simple-import-sort/exports': 'warn',
            'no-empty-pattern': 'off'
        }
    }
]