# Architecture

## Runtime

- framework: Next.js App Router
- root layout: `src/app/layout.tsx`; global providers; header; footer; main shell

## Route Map

- `/`: landing route; `PageWrapper`, `Hero`, `InfoSection`, `CliNavigation`
- `/experience`: list route; `PageWrapper`, `TerminalPrompt`, `BackLink`, `TimelineList`
- `/experience/[id]`: detail route; async `params`; source `experiences`; invalid id -> `notFound()`; route-local `loading.tsx`, `not-found.tsx`; `TimelineDetail`
- `/projects`: list route; `PageWrapper`, `TerminalPrompt`, `BackLink`, `TimelineList`
- `/projects/[id]`: detail route; async `params`; source `projects`; invalid id -> `notFound()`; route-local `loading.tsx`, `not-found.tsx`; `TimelineDetail`
- `/case-studies`, `/notes`: placeholder routes; shared prompt/back shell

## Data Flow

- `src/lib/data.ts`: landing/profile content
- `src/lib/experience-data.ts`: experience content
- `src/lib/project-data.ts`: project content
- `src/lib/constants.ts`: terminal and navigation constants
- `public/images/`: hero image asset
- route change: scroll reset handled by `ScrollToTop`

## Component Boundaries

- root shell: `ThemeProvider`, `Header`, `Footer`, `ScrollToTop`
- layout constraints: `PageWrapper`
- typography primitives: `Heading`, `Body`, `Small`
- landing composition: `Hero`, `InfoSection`, `LinksSection`, `PolaroidFrame`
- navigation system: `CliNavigation`, `TerminalPrompt`, `BackLink`
- timeline system: `TimelineList`, `TimelineCard`, `TimelineDetail`

## Editing Map

- home copy, location, email, socials: `src/lib/data.ts`, `src/components/Hero.tsx`, `src/components/InfoSection.tsx`, `src/components/LinksSection.tsx`
- hero image, caption, frame: `public/images/`, `src/lib/data.ts`, `src/components/Hero.tsx`, `src/components/PolaroidFrame.tsx`
- terminal labels, nav, prompt: `src/lib/constants.ts`, `src/components/CliNavigation.tsx`, route file under `src/app/`
- experience content: `src/lib/experience-data.ts`
- project content: `src/lib/project-data.ts`
- timeline components: `src/components/TimelineList.tsx`, `src/components/TimelineCard.tsx`, `src/components/TimelineDetail.tsx`
- theme tokens, global visuals: `src/app/globals.css`, `src/components/Header.tsx`, `src/components/ThemeToggle.tsx`
- shell or layout behavior: `src/app/layout.tsx`, `src/components/PageWrapper.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`

## Key Directories

- `src/app`: routes
- `src/components`: shared components
- `src/lib`: data, constants, utilities

## Invariants

- do not duplicate shell logic outside `src/app/layout.tsx`
- keep terminal labels in `src/lib/constants.ts`
- keep caption implementation in `src/components/PolaroidFrame.tsx`
- keep timeline components generic and reusable across experience and projects

## Data Models

- `LandingData.personal`: `name`, `tagline`, `location`, `email`
- `LandingData.hero`: `pronunciationLine1`, `pronunciationLine2`, `photoMeta`, `photo`
- `LandingData.socials`: `linkedin`
- `Experience`: `id`, `title`, `company`, `dateRange`, `location`, `description`, `technologies[]`, `achievements[]`, `linkHref`
- `Project`: `id`, `name`, `company`, `type` ('work' | 'personal'), `description`, `technologies[]`, `achievements[]`, `linkHref`
- `TimelineListItem`: `id`, `title`, `company`, `dateRange`, `location`, `description`, `linkHref`
- `TimelineDetailItem`: `id`, `title`, `company`, `dateRange`, `location`, `description`, `technologies[]`, `achievements[]`, `linkHref`
