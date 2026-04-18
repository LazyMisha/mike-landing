# Architecture

## Runtime

- framework: Next.js 16 App Router
- rendering: static `/`, `/experience`, `/projects`, `/case-studies`, `/notes`; dynamic `/experience/[id]`
- `src/app/layout.tsx`: `ThemeProvider`, `ScrollToTop`, `Header`, app `<main>`, `Footer`

## Route Map

- `/`: `PageWrapper`, `Hero`, `InfoSection`, `CliNavigation`
- `/experience`: `PageWrapper`, `TerminalPrompt`, `BackLink`, `ExperienceList`
- `/experience/[id]`: async `params`; source `experiences`; invalid id -> `notFound()`; uses `loading.tsx`, `not-found.tsx`, `ExperienceDetail`
- `/projects`, `/case-studies`, `/notes`: placeholder; shared prompt/back shell

## Data Flow

- `src/lib/data.ts`: `landingData.personal`, `landingData.hero`, `landingData.socials`
- `src/lib/experience-data.ts`: `experiences`
- `src/lib/constants.ts`: terminal prompt, CLI labels, CLI links, navigation labels, shared errors
- `public/images/`: hero image asset
- route change: link -> pathname change -> `ScrollToTop` -> `window.scrollTo(0, 0)`

## Component Boundaries

- layout primitive: `PageWrapper`
- typography primitives: `Heading`, `Body`, `Small`
- home components: `Hero`, `InfoSection`, `LinksSection`, `PolaroidFrame`
- navigation components: `CliNavigation`, `TerminalPrompt`, `BackLink`
- experience components: `ExperienceList`, `ExperienceCard`, `ExperienceDetail`

## Editing Map

- home copy, location, email, socials: `src/lib/data.ts`, `src/components/Hero.tsx`, `src/components/InfoSection.tsx`, `src/components/LinksSection.tsx`
- hero image, caption, frame: `public/images/`, `src/lib/data.ts`, `src/components/Hero.tsx`, `src/components/PolaroidFrame.tsx`
- terminal labels, nav, prompt: `src/lib/constants.ts`, `src/components/CliNavigation.tsx`, route file under `src/app/`
- experience content: `src/lib/experience-data.ts`
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

## Data Models

- `LandingData.personal`: `name`, `tagline`, `location`, `email`
- `LandingData.hero`: `pronunciationLine1`, `pronunciationLine2`, `photoMeta`, `photo`
- `LandingData.socials`: `linkedin`
- `Experience`: `id`, `title`, `company`, `dateRange`, `description`, `fullDescription`, `technologies[]`, `achievements[]`, `timeline{start,end,milestones[]}`, `linkHref`
