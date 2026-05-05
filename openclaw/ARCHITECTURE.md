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

`TimelineList`, `TimelineCard`, and `TimelineDetail` serve `/experience`, `/projects`, and `/case-studies`.

- `TimelineDetail` uses `showMetadata` to switch between full metadata layout (experience) and compact title/company header (projects)
- `TimelineList` uses `preview` to show only the first 3 items (used on `/cv-preview`)
- `TimelineListItem.dateRange` and `location` are optional so projects and case-studies don't need to pass empty strings

## Projects Flow

- `src/lib/project-data.ts` owns the project list and optional `liveHref` / `sourceHref`
- `TimelineCard` renders title, company, optional live/source links, description preview, and detail link
- `src/app/projects/[id]/page.tsx` resolves by `id`, calls `notFound()` for missing IDs, passes `showMetadata={false}` to `TimelineDetail`
