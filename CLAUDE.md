# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is
Single-page personal portfolio site (Next.js 16 App Router, React 19, TypeScript, Tailwind 4). No backend, no database, no auth. `next.config.ts` enables `reactCompiler: true`. All page content (bio, experience, education, projects, skills, nav links) lives in `src/constants/*.ts` as typed data, rendered by presentational components under `src/components/`.

## Commands
See `docs/commands.md`.

## Architecture
See `docs/architecture.md` for content-as-data pattern, page composition, styling, and env var setup.

## Code style

See `CORE_RULES.md` for naming, formatting, imports, and code-quality conventions — they apply here unchanged.

### Quick Checklist
Arrow functions | Single quotes | No semicolons | 4-space indent | Nested content on new lines
JSX props: `prop={'value'}` | Export at bottom | Keep components ~40 lines
Use `api` from `@/api` | Access env via config | Use shadcn/ui components
Avoid prop drilling | Clean imports | Delete unused code
SOLID principles | Industry standards | Type-safe forms

**Never:** `React.*` types | Function declarations | Double quotes | `import.meta.env` outside config
**Never:** Direct fetch/axios | Inline exports | Commented code | `window.location` for navigation
**Never:** Multiple components per file | NEXT_PUBLIC_ prefix | Server directives

## Git & Commits
**Read `GIT_RULES.md` before committing or when instructed to commit.** Do not skip it.
Full rules there. Key constraint: never invoke `/commit` skill on small fixes, formatting, or docs changes — use plain `git commit` for those.

## graphify
This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Always run `graphify update` in a subagent
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
