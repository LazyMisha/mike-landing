# Code Rules

## Default

Use standard React, Next.js, and TypeScript best practices unless this file says otherwise.

## Change Strategy

- make the smallest useful change
- prefer existing patterns over new abstractions
- prefer data-driven changes over structural changes
- modify existing files before creating new ones
- keep unrelated refactors out of feature work

## Components

- keep component APIs simple and typed
- use PascalCase for component names and props interfaces
- preserve existing export style in the file being edited
- avoid converting server components to client components without a clear need

## Data and Copy

- avoid duplicating strings across routes/components
- keep route-specific mapping close to the route when it is not reusable
- preserve the existing content tone unless the request asks for a tone change

## TypeScript

- prefer explicit interfaces for exported component props and data shapes
- avoid `any` unless there is no practical alternative
- narrow unknown/external values before use
- keep derived data simple and readable

## Styling

- preserve the existing visual system
- prefer existing Tailwind patterns and tokens
- avoid visual redesign unless requested
- keep responsive behavior intentional, not incidental

## Testing

- update or add tests when behavior changes
- test user-visible behavior over implementation details
- avoid brittle snapshots for ordinary UI changes

## Quality Gate

Before delivery, run the project checks documented in `README.md`.

Do not report work as done while checks fail unless Mike explicitly accepts the risk.

## Avoid

- duplicated logic or copy
- broad refactors inside small tasks
- new dependencies for solved problems
- memoization without measured need
- hidden behavior changes
