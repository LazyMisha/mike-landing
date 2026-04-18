# Code

## Default Rule

- follow standard React/Next.js/TypeScript best practices unless overridden below

## Workflow

- content-driven request
  - edit `src/lib/data.ts`, `src/lib/experience-data.ts`, `src/lib/constants.ts` before components
- behavior change
  - update existing tests or add new tests
- finish
  - run `npm run test -- --run`
  - run `npm run typecheck`
  - run `npm run build`
- lint baseline
  - `npm run lint` fails in `git-cleanup.js`
  - do not claim a lint-clean result unless that file is fixed
- docs upkeep
  - update `openclaw/ARCHITECTURE.md` for structure, ownership, routing, data flow
  - update `openclaw/SPEC.md` for product behavior, design rules, acceptance criteria
  - update this file for implementation rules only

## Project Rules

- keep route files thin
- keep shared UI in `src/components`
- keep `src/components` flat except `src/components/ui`
- keep route-local `loading.tsx` and `not-found.tsx` beside the route
- use `@/` for cross-folder imports
- preserve surrounding export style
- preserve server-first boundaries
- add `"use client"` only when required
- do not duplicate `Header`, `Footer`, `ThemeProvider`, `ScrollToTop` in route pages
- centralize reusable copy in `src/lib/data.ts`, `src/lib/experience-data.ts`, `src/lib/constants.ts`
- keep route tests in route folders
- keep component tests next to components
- keep shared test setup in `src/test/setup.ts`

## Avoid

- new folder structure under `src/components`
- duplicated labels or copy
- new content/config owners without a clear ownership gap
- broad refactors inside feature work
- new dependencies for solved problems
- memoization without a clear need
- server-to-client conversion without a real requirement
- duplicating layout shell logic in pages
- visual redesign unless requested
