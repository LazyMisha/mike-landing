# Code

## Default Rule

- follow standard React/Next.js/TypeScript best practices unless overridden below

## Decision Rules

- if change affects content: edit `src/lib/data.ts`, `src/lib/experience-data.ts`, `src/lib/constants.ts` first
- if UI is reused: place it in `src/components`
- if logic is route-specific: keep it in the route folder under `src/app`
- if route-specific loading or fallback is needed: keep `loading.tsx` and `not-found.tsx` beside the route
- if unsure: modify an existing file before creating a new one

## Workflow

- content changes: update `src/lib/*` first; update components only if structure changes
- behavior changes: update existing tests or add tests in the same area
- finalization: run `npm run test -- --run`, `npm run typecheck`, `npm run build`
- lint baseline: `npm run lint` fails in `git-cleanup.js`; do not claim a lint-clean result unless fixed
- when behavior or structure changes: update `ARCHITECTURE.md` (structure, ownership), `SPEC.md` (behavior), `CODE.md` (rules)

## Project Rules

- keep route files thin
- keep shared UI in `src/components`
- keep `src/components` flat except `src/components/ui`
- use `@/` for cross-folder imports
- preserve surrounding export style
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
- visual redesign unless requested
