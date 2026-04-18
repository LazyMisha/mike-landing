# Code Standards Template

## Purpose

This document answers: how should a change be implemented in this project?
It is written as a reusable template for AI agents and contributors.

Before using it in a new repository, replace the project-specific placeholders below and remove any sections that do not apply.

## Template Setup

Customize these placeholders for each repository:

- `<architecture-doc>`: `openclaw/ARCHITECTURE.md`
- `<spec-doc>`: `openclaw/SPEC.md`
- `<source-root>`: `src`
- `<routes-root>`: `src/app`
- `<shared-ui-root>`: `src/components`
- `<test-setup-file>`: `src/test/setup.ts`
- `<path-alias>`: `@/`
- `<test-command>` / `<typecheck-command>` / `<build-command>` / `<lint-command>`
  - examples: `npm run test -- --run`, `npm run typecheck`, `npm run build`, `npm run lint`

## Change Workflow

1. Find the existing owner of the behavior before creating new files or abstractions.
2. Prefer changing data or constants first when the request is content-driven.
3. Reuse existing primitives before inventing new wrappers or patterns.
4. Update tests when behavior changes.
5. Run the relevant verification commands before finishing.

## Repository Conventions

### Placement

- Add new routes under `<routes-root>` or the project's equivalent routing folder.
- Add route-local loading, error, or fallback behavior next to the route when the framework supports that pattern.
- Add shared UI in `<shared-ui-root>`.
- Keep the existing folder structure stable unless a deliberate repo-wide reorganization is requested.
- Put shared copy, labels, and structured content into the documented content owners described in `<architecture-doc>`.

### Naming

- Components: PascalCase filenames, for example `ExperienceCard.tsx`
- Test files: `<subject>.test.tsx` or `<subject>.test.ts`
- Non-component modules: lowercase filenames following the project's existing patterns
- Route files should follow the framework conventions already used in the repo
- Follow the surrounding file's export style instead of rewriting modules only for consistency

### Imports

- Use the configured path alias such as `<path-alias>` when available.
- Same-folder relative imports are acceptable for nearby files.
- Avoid deep relative paths when an alias or clearer import path exists.

### Documentation Upkeep

- Update `<architecture-doc>` when route ownership, data flow, structure, or file usage changes.
- Update `<spec-doc>` when product behavior, visual rules, or acceptance criteria change.
- Update this file when implementation standards or repo conventions change.
- Keep docs operational and accurate; do not leave aspirational statements that do not match the repo.

## TypeScript

- If the project uses TypeScript, prefer `strict` mode.
- Do not use `any` unless there is a documented and justified exception.
- Use `interface` for component props and object contracts that may be extended.
- Use `type` for unions, derived types, and `typeof`-based exports.
- Use `as const` for literal config data when readonly behavior is desirable.
- Prefer readonly inputs when a component or function only consumes data.

## React And App Frameworks

- Use function components only.
- Use server-rendered components by default when the framework supports server/client boundaries.
- Add client-only directives such as `"use client"` only when state, effects, browser APIs, or event-driven interactivity require them.
- Keep route files thin; move reusable UI into `<shared-ui-root>`.
- Do not duplicate global shell concerns inside route pages when the app already has a root layout.
- Use the framework's optimized image component for local UI images when available.
- Do not add memoization by default. Keep `React.memo`, `useMemo`, or `useCallback` only when there is a clear reason.
- Follow the routing, loading, fallback, and not-found conventions already established in the project.

## Styling

- Use the project's main styling system and design tokens.
- Reuse existing layout, typography, and UI primitives before creating new ones.
- Prefer updating local classes or tokens in place over adding one-off styling layers.
- Keep responsive changes mobile-first when the project uses mobile-first styling.
- Preserve the established visual language unless the request explicitly changes it.

## Shared Content Rules

- Centralize reusable copy in the existing data or config owners described in `<architecture-doc>`.
- Local inline text is acceptable only when it belongs to one component and is not reused.
- Do not create new content or config modules unless the existing ownership model no longer fits.

## Testing

- Update tests when changing:
  - route behavior
  - conditional rendering
  - user-visible copy that tests depend on
  - accessibility-relevant output
- Prefer React Testing Library queries in this order:
  1. `getByRole`
  2. `getByLabelText`
  3. `getByText`
  4. `getByTestId` as a last resort
- Keep tests close to the current project pattern, whether colocated or centralized.
- Reuse the shared setup file, if the project has one, for example `<test-setup-file>`.

## Verification

- Run the project's standard checks before finishing.
- Example command set:

```bash
<test-command>
<typecheck-command>
<build-command>
<lint-command>
```

- If the repository has a known failing baseline, document the exact exception and do not claim a fully clean result.

## Accessibility

- Use semantic structure first.
- Use `aria-labelledby` for content sections that have visible or screen-reader-only headings.
- Mark decorative glyphs or separators with `aria-hidden`.
- Keep alt text on all meaningful images.
- Preserve keyboard-accessible links, buttons, and focus states.

## Avoid

- Do not introduce a new folder structure unless performing an intentional repo-wide refactor.
- Do not hardcode strings that already belong in the project's documented data owners.
- Do not add dependencies for problems already solved by the current stack or existing utilities.
- Do not switch server-rendered code to client-rendered code unless the feature truly requires it.
- Do not replace established visual patterns just to "modernize" them.
- Avoid broad refactors while implementing a feature request unless the refactor is the task.
- Do not cargo-cult template sections that do not apply to the project.
