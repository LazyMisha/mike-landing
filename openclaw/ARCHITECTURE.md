# Architecture

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Vitest / Testing Library

## App Shell

- Root layout: `src/app/layout.tsx`
- Global styles: `src/app/globals.css`
- Theme provider, header (with `LiveClock`), footer, and `PageWrapper` compose the shell
- `LiveClock` is isolated as its own client component so its 1-second updates don't re-render `ThemeToggle`
- Shell logic does not live outside `src/app/layout.tsx`

## Tests

- Route tests live beside route files under `src/app`
- Component tests live beside components under `src/components`
- Shared test setup: `src/test/setup.ts`

## Shared Timeline UI

`TimelineList` and `TimelineCard` serve `/case-studies`.

- `TimelineList` uses `preview` to show only the first 3 items
- `TimelineListItem.dateRange` and `location` are optional so case-studies don't need to pass empty strings
