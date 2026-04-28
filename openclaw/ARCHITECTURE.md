# Architecture

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Vitest / Testing Library

## App Shell

- root layout: `src/app/layout.tsx`
- global styles: `src/app/globals.css`
- providers/header/footer live in the root shell
- page content is wrapped with `PageWrapper`

## Routes

- `/` → `src/app/page.tsx`
- `/experience` → `src/app/experience/page.tsx`
- `/experience/[id]` → `src/app/experience/[id]/page.tsx`
- `/projects` → `src/app/projects/page.tsx`
- `/projects/[id]` → `src/app/projects/[id]/page.tsx`
- `/case-studies` → `src/app/case-studies/page.tsx`
- `/case-studies/[id]` → `src/app/case-studies/[id]/page.tsx`
- `/cv-preview` → `src/app/cv-preview/page.tsx`
- `/notes` → `src/app/notes/page.tsx`

Dynamic detail routes:
- use async `params`
- read from static data in `src/lib`
- call `notFound()` for unknown ids
- keep route-local `loading.tsx` and `not-found.tsx` where needed

## Data Owners

- landing/profile content → `src/lib/data.ts`
- experience content → `src/lib/experience-data.ts`
- project content → `src/lib/project-data.ts`
- case-study content → `src/lib/case-study-data.ts`
- notes content → `src/lib/notes-data.ts`
- CV preview content → `src/lib/cv-preview-data.ts`
- terminal labels, navigation labels, aria labels → `src/lib/constants.ts`
- shared utilities → `src/lib/utils.ts`
- image assets → `public/images/`

## Component Owners

- shell: `ThemeProvider`, `Header`, `Footer`
- layout: `PageWrapper`
- typography: `Heading`, `Body`, `Small`
- landing: `Hero`, `InfoSection`, `LinksSection`, `PolaroidFrame`
- navigation: `CliNavigation`, `TerminalPrompt`, `BackLink`
- timeline UI: `TimelineList`, `TimelineCard`, `TimelineDetail`, `TimelineSection`
- case-study detail UI: `CaseStudyDetail`
- shadcn/base UI wrappers: `src/components/ui`

## Editing Map

- copy/data changes: start in the relevant `src/lib/*` file
- terminal/nav label changes: `src/lib/constants.ts`
- route behavior changes: matching folder under `src/app`
- reusable UI changes: `src/components`
- visual tokens/global styling: `src/app/globals.css`
- shell-level behavior: `src/app/layout.tsx`, `Header`, `Footer`, `ThemeProvider`

## Tests

- route tests live beside route files under `src/app`
- new component tests should live beside components under `src/components`
- shared test setup lives in `src/test/setup.ts`
- existing legacy tests under `src/app/experience` should not be copied for new component tests

## Invariants

- do not duplicate shell logic outside `src/app/layout.tsx`
- keep timeline components generic enough for list/detail reuse
