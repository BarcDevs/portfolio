# Architecture

**Content-as-data pattern**: each portfolio section pulls its content from a typed constant, not props passed down a tree. To edit copy (bio text, an experience entry, a project, a skill), edit the corresponding file in `src/constants/` — do not hunt through components.

- `src/constants/bio.ts`, `hightights.ts` → About section
- `src/constants/experiences.ts`, `tech-stack.ts` → Experience timeline
- `src/constants/education.ts` → Education section
- `src/constants/projects.ts` → Projects section
- `src/constants/skills.ts` → Skills section
- `src/constants/nav-links.ts` → Navbar/footer links
- `src/constants/metadata.ts` → `<head>` metadata (`meta` export consumed in `layout.tsx`)
- `src/config/personal-data.ts` → top-level personal info (name, links, etc.) referenced across constants

Each matches a type in `src/types/` (`experience.ts`, `education.ts`, `project.ts`, `skills.ts`, `global.ts`).

**Page composition**: `src/app/page.tsx` assembles section components from `src/components/sections/*` (`hero-section`, `about-section`, `experience-section`, `education-section`, `projects-section`, `skills-section`). Each section composes smaller presentational components from the matching `src/components/<domain>/` folder (e.g. `experience-section` → `src/components/experience/*`). The shared `Section` wrapper (`src/components/section.tsx`) provides the consistent headline/description/container chrome — most new sections should be built on top of it rather than duplicating its layout.

**Styling**: Tailwind 4 via `src/styles/globals.css` (no `tailwind.config.ts` — config is CSS-based per Tailwind 4). `src/lib/utils.ts` holds the `cn()` className helper. shadcn/ui primitives live in `src/components/ui/`.

**Env vars**: `src/config/env-config.ts` is the only place allowed to read `process.env` (currently just `NODE_ENV`). This repo has no other runtime env vars — there's no API, DB, or auth layer to configure.

**Fonts/metadata**: `src/app/layout.tsx` wires up Geist Sans/Mono and Inter via `next/font/google`, and Vercel Analytics.
