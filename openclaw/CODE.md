# Code

## Default Rule

- follow standard React/Next.js/TypeScript best practices unless overridden below

## Decision Priority

- `1.` content -> `src/lib/data.ts`, `src/lib/experience-data.ts`, `src/lib/constants.ts`
- `2.` reuse -> `src/components`
- `3.` route logic -> route folder under `src/app`
- `4.` fallback -> modify existing files before creating new ones

## Workflow

- content changes: start with `src/lib/*`; update components only if structure changes
- behavior changes: update existing tests or add tests in the same area
- finalization: run `npm run test -- --run`, `npm run typecheck`, `npm run build`
- lint: may fail due to known issue in `git-cleanup.js`
- when behavior or structure changes: update `ARCHITECTURE.md` (structure, ownership), `SPEC.md` (behavior), `CODE.md` (rules)

## Project Rules

- keep route files thin
- keep `src/components` flat except `src/components/ui`
- use `@/` for cross-folder imports
- preserve surrounding export style
- centralize reusable copy in `src/lib/data.ts`, `src/lib/experience-data.ts`, `src/lib/constants.ts`
- keep route tests in route folders
- keep component tests next to components
- keep shared test setup in `src/test/setup.ts`

## Conflict Resolution

- if rules conflict: prioritize simplicity
- prefer modifying existing structures over adding new ones
- prefer data-driven changes over structural changes

## Avoid

- new folder structure under `src/components`
- duplicated labels or copy
- new content/config owners without a clear ownership gap
- broad refactors inside feature work
- new dependencies for solved problems
- memoization without a clear need
- server-to-client conversion without a real requirement
- visual redesign unless requested
