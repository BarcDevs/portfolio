# Core Rules (Apply Everywhere)

## Principles
- SOLID — Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
- Clean, readable, maintainable code. Keep DRY
- One concern per file
- Always provide informative, self-explanatory names for files, functions, variables
- Before creating a function, check it doesn't already exist
- Avoid re-export files / barrel indexes
- When building tests, cover happy paths and edge cases — comprehensive and meaningful

## Code Style
- Never use string literals as object keys — define typed constants, use computed property names `{Key: value}`
- Never use array index as key — use the current element as key
- Text: never use `—` character. Only simple hyphen `-` everywhere (text, classnames, config keys)
- Time values: always use `src/constants/time` (minuteInMs, hourInMs, etc.) instead of hardcoding milliseconds
- Text blocks: don't break unless really long (120-150 chars OK)
- Use unified imports for module with many imports
- Don't break single imports to multiple lines unless very long (50+ chars) — if too long, break before `from` keyword
- String blocks with `'` in them — use backticks to avoid escaping
- Avoid redundant braces or parentheses
- Avoid unnecessary `| null`, `| undefined` for optional types unless explicitly required
- Short conditional blocks — avoid `{` when not needed
- Don't make line-breaking too strict — break only when it improves readability or hits length threshold

## Language & Format
- Quotes: single quotes (') for strings, imports, JSX props; backtick allowed for templates
- Indentation: 4 spaces
- Naming: camelCase (non-components), camelCase (folders); PascalCase for classes & types
- Functions: arrow functions always, never `function` declarations
- Types: prefer `type` over `interface` (interface only for declaration merging, e.g. extending Express types)
- React Types: import directly from `react`, not `React.*`

## Reading Files
- When reading files to identify patterns that may be needed later, document them in corresponding context to avoid repeating the work

## Code Quality
- Delete unused code completely — never comment it out
- No backwards-compatibility shims for removed code
- No hardcoded values — use constants or config
- Complete, production-ready code — no snippets, no half-finished implementations
- One function/component per file
- Extract reusable logic; use reusable components from shadcn/ui (client)
- Avoid redundant braces or parentheses
- Avoid single statement followed by return — inline: `if (x) return fn()` not `if (x) { fn(); return }`
- Avoid changes in other projects — different projects are read only

## JSX Logic (client)
- Never use IIFEs in JSX — compute values in variables before `return`
- Closing `)` of a multi-line callback stays inline with next chained method: `.map(...).find(Boolean)` not `.map(...)\n.find(Boolean)`

## Logging (server)
- Never use `console.log` — use `console.info`, `console.warn`, or `console.error` for intentional output
- `console.log` is for temporary debugging only; remove before committing

## Code Formatting
- Line length: target 40-50 chars max (strings can be longer if necessary)
- Break long lines and function parameters onto multiple lines
- 2+ conditions in if statements → one condition per line, no condition and action on same line
- Condition operators at end of line if line-breaking
- Ternary with long/complex expressions → break to multiple lines
- Inline objects with 3+ properties (or 2+ in long lines) → always break to new lines
- 2+ chained accessor calls → break after root object
- Nested objects always on a new line — never inline inside parent object/array
- Objects with 2+ properties → each property on its own line
- 2+ function parameters → each on its own line
- Generic utility types (`Pick`, `Omit` etc.) with 3+ keys → each key on its own line
- 2+ elements in an array → each on its own line

## Formatting Tools (client)
- **ESLint** (`.eslint.config.mjs`): enforces formatting rules. Run `npm run lint:fix` before committing
- **.editorconfig**: cross-IDE settings (4-space indent, UTF-8, LF). Respected by WebStorm, VS Code, etc.

## Imports (eslint-plugin-simple-import-sort, client)
Groups (auto-fixed by `npm run lint:fix`):
1. React
2. Next.js
3. Third-party packages
4. @-scoped packages (e.g., @tanstack, @radix-ui)
5. @/ custom (types, components, hooks, lib, utils, services, constants, config, context, handlers, pages)
6. Relative imports
7. Styles (last)
