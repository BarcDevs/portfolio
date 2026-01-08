# Claude Code Preferences

## Project Overview
[write description here]

## Code Style & Conventions

### Core Principles
- **ALWAYS FOLLOW INDUSTRY STANDARDS**
- **ALWAYS USE SOLID PRINCIPLES** - Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
- **Clean Code**: Write readable, maintainable code that follows best practices

### TypeScript & JavaScript
- **Quotes**: Use single quotes (`'`) for all strings, imports, and JSX props
- **JSX Props**: Always use `prop={'value'}` instead of `prop="value"`
- **Semicolons**: Not used (except where required)
- **Indentation**: 4 spaces
- **File naming**: kebab-case for files and folders (e.g., `auth-form.tsx`, `[post-id]`)
- **Functions**: ALWAYS use arrow functions, never regular function declarations
- **Types vs Interfaces**: Prefer `type` over `interface` unless an interface is specifically needed (e.g., for declaration merging)
- **React Types**: Don't use explicit types as `React.*`. Import types directly from React
  ```typescript
  // ❌ Wrong
  const Component: React.FC = () => {}

  // ✅ Correct
  import { FC } from 'react'
  const Component: FC = () => {}
  ```

### React & Next.js
- **Framework**: Next.js 15 with App Router
- **React version**: 19
- **Component style**: Functional components with hooks
- **Component size**: Keep components small, ~40 lines or less
- **Component exports**: Don't use inline export; export at the bottom of the file
  ```typescript
  // ❌ Wrong
  export default const MyComponent = () => {}

  // ✅ Correct
  const MyComponent = () => {}
  export default MyComponent
  ```
- **Implicit returns**: Use implicit return for components without a body
  ```typescript
  // ✅ Good
  const SimpleComponent = () => (
      <div>Content</div>
  )
  ```
- **No braces for single statement returns**: Omit braces when possible
- **Server Components**: Use by default, mark with `'use client'` when needed
- **shadcn/ui**: Always use components from shadcn/ui when available
- **Avoid prop drilling**: Use context, composition, or state management instead
- **Reusable components**: Use reusable components and functions as much as possible
- **One component per file**: Separate components into individual files
- **File structure**:
  - Pages: `src/app/`
  - Components: `src/components/`
  - Database client: `src/lib/prisma.ts`
  - Utilities: `src/lib/utils/`
  - Types: `src/types/`
  - Config: `src/config/`
  - Server Actions: `src/app/*/actions.ts`

### Environment Variables
- **CRITICAL RULE**: NEVER use `process.env` directly outside of `src/config/env-config.ts`
- **Access pattern**:
  - ONLY access environment variables through `envConfig` or `appConfig`
  - Import `envConfig` from `@/config/env-config` in all files
  - Import `appConfig` from `@/config/app-config` for derived configuration
- **Config files**:
  - `src/config/env-config.ts` - ONLY place where `process.env` is allowed
  - `src/config/app-config.ts` - Derived application configuration
- **Pattern**:
  ```typescript
  // ❌ WRONG - Never do this
  const dbUrl = process.env.DATABASE_URL

  // ✅ CORRECT - Always use envConfig
  import { envConfig } from '@/config/env-config'
  const dbUrl = envConfig.databaseUrl
  ```
- **Adding new variables**:
  1. Add to `.env` file
  2. Add to `envConfig` object in `src/config/env-config.ts`
  3. Use via `envConfig.yourVariable` throughout the app
- **Client-side vars**: Prefix with `NEXT_PUBLIC_`

### CSS & Styling
- **Framework**: TailwindCSS
- **Prop format**: Always use `className={'...'}` with single quotes
- **Component library**: shadcn/ui components in `src/components/ui/`
- **Custom styles**: Centralized in `src/lib/styles.ts`

### Database & Data Fetching
- **ORM**: Prisma 7 with PostgreSQL
- **Driver**: PostgreSQL adapter (`@prisma/adapter-pg` + `pg`)
- **Database client**: `src/lib/prisma.ts` - Singleton Prisma client with adapter
- **Server Components**: Direct Prisma queries for data fetching
- **Mutations**: Server Actions with Prisma
- **Pattern**:
  ```typescript
  // Server Component
  import prisma from '@/lib/prisma'
  const posts = await prisma.post.findMany()

  // Server Action
  'use server'
  import prisma from '@/lib/prisma'
  export const createPostAction = async (formData: FormData) => {
    const post = await prisma.post.create({ data: {...} })
  }
  ```

### Authentication
- **Provider**: NextAuth.js v5
- **Strategy**: JWT with credentials provider
- **Session**: Server-side session access via `auth()` function
- **CSRF**: Automatically injected into mutating requests (POST, PUT, PATCH, DELETE)
- **Type extensions**: Custom session/user types in `src/types/next-auth.d.ts`

### Form Handling
- **Library**: react-hook-form
- **Validation**: Zod schemas in `src/validations/forms/`
- **Components**: Reusable form components in `src/components/shared/form/`

### State Management
- **Server state**: NextAuth session, Server Components
- **Client state**: React hooks (useState, useContext)
- **URL state**: useSearchParams for filters and pagination

### TypeScript Types
- **Location**: `src/types/` directory
- **Module augmentation**: Use for extending third-party types (e.g., NextAuth)
- **Naming**: PascalCase for types and interfaces
- **Exports**: Named exports preferred

## Code Formatting Rules

### Line Breaking & Formatting
- **Component props**: If 2 or more props, put each prop on a new line
  ```typescript
  // ❌ Wrong
  <Button 
  className={'btn'} 
  onClick={handleClick} 
  disabled={loading}>

  // ✅ Correct
  <Button
      className={'btn'}
      onClick={handleClick}
      disabled={loading}
  >
  ```
- **Long lines**: Break long lines into multiple lines for readability
- **Method arguments**: Break long method arguments/parameters onto new lines
- **Conditional statements**: If 2+ conditions in an if statement, split them one per line
  ```typescript
  // ❌ Wrong
  if (condition1 && condition2 && condition3) {

  // ✅ Correct
  if (
      condition1 &&
      condition2 &&
      condition3
  ) {
  ```
- **Nested content**: If content is wrapped with another component, always put it on a new line
  ```typescript
  // ❌ Wrong
  <div><Component>Content</Component></div>

  // ✅ Correct
  <div>
      <Component>
          Content
      </Component>
  </div>
  ```

### Import Organization
Follow the recommended import order, following eslint role eslintPluginSimpleImportSort.
1. External libraries (React, Next.js, etc.)
2. Internal utilities and helpers
3. Components
4. Types
5. Styles and assets
6. Relative imports

```typescript
// Example
import { useState } from 'react'
import Link from 'next/link'
import prisma from '@/lib/prisma'
import { hashPassword } from '@/lib/utils/auth'
import Button from '@/components/ui/button'
import { User } from '@/types'
import styles from './styles.module.css'
```

### Hooks Usage
- **Hook spreading**: Avoid spreading hooks everywhere, only when it looks obvious
- Keep hooks at the top of components
- Custom hooks should be in separate files

### Clean Code Practices
- **Cleaner code output**: Always output clean, readable code
- **Reusability**: Extract reusable logic into separate functions or components
- **Single responsibility**: One function/component per file when possible
- **No code snippets**: Provide complete, production-ready code, not snippets
- **CRITICAL: Delete unused code - NEVER comment it out**:
  - ❌ WRONG: Leaving commented out code like `// const oldFunction = () => {}`
  - ❌ WRONG: Commenting out imports like `// import { oldApi } from '@/lib/api'`
  - ❌ WRONG: Commenting out environment variables like `# OLD_API_URL=...`
  - ✅ CORRECT: **DELETE** unused code completely
  - Why: Commented code creates clutter, confusion, and makes codebase harder to maintain
  - Exception: Only comment code if explicitly documenting WHY something was removed for historical context (very rare)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Auth route group
│   ├── forum/             # Forum routes
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── shared/           # Shared components
│   ├── auth/             # Auth-specific components
│   ├── forum/            # Forum-specific components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
│   └── api/             # API client utilities
├── config/              # Configuration files
│   ├── env-config.ts    # Environment variables
│   └── app-config.ts    # App configuration
├── types/               # TypeScript type definitions
├── validations/         # Zod schemas
├── constants/           # Constants and enums
├── data/               # Static data
└── styles/             # Global styles

```

## Key Features

### Forum System
- Post creation and editing
- Categories and tags
- Replies and nested comments
- Voting system
- User profiles

### Authentication
- Email/password login
- Google OAuth (configured)
- Session management with JWT
- CSRF protection

## Development Guidelines

### Before Committing
1. Run TypeScript check: `npx tsc --noEmit`
2. Ensure all imports use `@/` path alias
3. Verify environment variables are accessed via config files
4. Check that all JSX props use single quotes
5. Verify arrow functions are used throughout
6. Check component sizes (keep under ~40 lines)
7. Ensure SOLID principles are followed

### File Artifacts
- Always provide new files as artifacts when creating them
- Keep files organized and properly named

### Server Actions Development
- **Always use Server Actions**: Use `'use server'` directive for mutations
- **Database access**: Use Prisma client from `@/lib/prisma` for all database operations
- **Pattern**: Keep Server Actions in `actions.ts` files within route folders
- **Structure**: Organize by feature (e.g., `src/app/forum/posts/actions.ts`)

### Database Access Pattern
```typescript
// ❌ Wrong - Don't query database in Client Components
'use client'
import prisma from '@/lib/prisma'
const posts = await prisma.post.findMany() // ERROR!

// ✅ Correct - Server Component
import prisma from '@/lib/prisma'
const PostsPage = async () => {
  const posts = await prisma.post.findMany()
  return <PostList posts={posts} />
}

// ✅ Correct - Server Action
'use server'
import prisma from '@/lib/prisma'
export const createPostAction = async (formData: FormData) => {
  const post = await prisma.post.create({ data: {...} })
  revalidatePath('/forum')
}
```

### Environment Variables Pattern
```typescript
// ❌ WRONG - NEVER use process.env outside config files
const dbUrl = process.env.DATABASE_URL
const emailHost = process.env.EMAIL_HOST

// ✅ CORRECT - Always use envConfig
import { envConfig } from '@/config/env-config'
const dbUrl = envConfig.databaseUrl
const emailHost = envConfig.email.host
```

### Component Props
```typescript
// ❌ Wrong
<Button className="bg-blue-500" type="submit">

// ✅ Correct
<Button className={'bg-blue-500'} type={'submit'}>
```

## Dependencies

### Core
- Next.js 15
- React 19
- TypeScript 5
- NextAuth.js 5
- TailwindCSS 3

### Database
- Prisma 7 (ORM)
- @prisma/adapter-pg (PostgreSQL adapter)
- pg (PostgreSQL driver)
- @types/pg (TypeScript types)

### UI & Forms
- shadcn/ui components
- Radix UI primitives
- react-hook-form
- Zod validation
- React Quill editor

### Utilities
- bcryptjs (password hashing)
- nodemailer (email sending)
- date-fns
- html-react-parser
- tailwind-merge

## Configuration Files

- `.env` - Environment variables (not committed)
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind configuration
- `next.config.ts` - Next.js configuration
- `auth.ts` - NextAuth configuration
- `prisma/schema.prisma` - Prisma database schema

## Important Notes

1. **Never commit sensitive data** like API keys or secrets
2. **Always use config files** for environment variables
3. **Maintain consistent prop syntax** with single quotes
4. **Use type-safe forms** with Zod and react-hook-form
5. **Follow the API client pattern** for all HTTP requests
6. **Keep Server Components** as default, add 'use client' only when needed
7. **Test authentication flows** thoroughly due to CSRF token handling

## Quick Reference Checklist

### Must Follow
- ✅ Use arrow functions ALWAYS
- ✅ No semicolons (unless necessary)
- ✅ Single quotes for all strings
- ✅ Props on new lines (if 2+)
- ✅ JSX props: `prop={'value'}`
- ✅ Export at bottom of file
- ✅ Components under ~40 lines
- ✅ One component/function per file
- ✅ SOLID principles
- ✅ Use shadcn/ui components
- ✅ Use existing `api` instance
- ✅ Config files for env vars
- ✅ Avoid prop drilling
- ✅ Clean, formatted code
- ✅ Import organization
- ✅ Industry standards

### Must Avoid
- ❌ Regular function declarations
- ❌ Inline exports
- ❌ Double quotes
- ❌ `process.env` outside config
- ❌ Direct axios usage
- ❌ `React.*` type syntax
- ❌ Interface (prefer type)
- ❌ Prop drilling
- ❌ Long files/components
- ❌ Multiple components per file
- ❌ Code snippets (provide full code)
