# Code Rules

## Change Strategy

- Make the smallest useful change
- Prefer existing patterns over new abstractions
- Prefer data-driven changes over structural changes
- Modify existing files before creating new ones
- Keep unrelated refactors out of feature work

## Components

- Keep component APIs simple and typed
- Use PascalCase for component names and props interfaces
- Preserve existing export style in the file being edited
- Avoid converting server components to client components without a clear need

## Data and Copy

- Keep user-facing strings in `src/lib/constants.ts`; don't hardcode them in components
- Avoid duplicating strings across routes/components
- Keep route-specific mapping close to the route when it is not reusable
- Preserve the existing content tone unless the request asks for a tone change

## TypeScript

- Prefer explicit interfaces for exported component props and data shapes
- Avoid `any` unless there is no practical alternative
- Narrow unknown/external values before use
- Keep derived data simple and readable

## Styling

- Preserve the existing visual system
- Prefer existing Tailwind patterns and tokens
- Avoid visual redesign unless requested
- Keep responsive behavior intentional, not incidental

## Testing

- Update or add tests when behavior changes
- Test user-visible behavior over implementation details
- Avoid brittle snapshots for ordinary UI changes

## Quality Gate

Before delivery, run the checks listed in `README.md` (also in `CLAUDE.md`).
Do not report work as done while checks fail unless explicitly accepted.

## Avoid

- Duplicated logic or copy
- Broad refactors inside small tasks
- New dependencies for solved problems
- Memoization without measured need
- Hidden behavior changes
