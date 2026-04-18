# Architecture

## Runtime

- framework: Next.js 16 App Router
- rendering: static `/`, `/experience`, `/projects`, `/case-studies`, `/notes`; dynamic `/experience/[id]`
- `src/app/layout.tsx`: `ThemeProvider`, `ScrollToTop`, `Header`, app `<main>`, `Footer`
- client components: `ThemeProvider`, `Header`, `ThemeToggle`, `ScrollToTop`

## Route Map

- `/`: `PageWrapper`, `Hero`, `InfoSection`, `CliNavigation`
- `/experience`: `PageWrapper`, `TerminalPrompt`, `BackLink`, `ExperienceList`
- `/experience/[id]`: async `params`; source `experiences`; invalid id -> `notFound()`; uses `loading.tsx`, `not-found.tsx`, `ExperienceDetail`
- `/projects`: placeholder; `PageWrapper`, `TerminalPrompt`, `BackLink`
- `/case-studies`: placeholder; same shell as `/projects`
- `/notes`: placeholder; same shell as `/projects`

## Data Flow

- `src/lib/data.ts`: `landingData.personal`, `landingData.hero`, `landingData.socials`
- `src/lib/experience-data.ts`: `experiences`
- `src/lib/constants.ts`: terminal prompt, CLI labels, CLI links, navigation labels, shared errors
- `public/images/`: hero image asset
- route change: link -> pathname change -> `ScrollToTop` -> `window.scrollTo(0, 0)`

## Component Boundaries

- `PageWrapper`: page width, page padding, semantic tag override
- `Heading`, `Body`, `Small`: typography primitives
- `Hero`: intro, pronunciation, role line, social links, photo
- `InfoSection`: summary copy
- `LinksSection`: contact links from `landingData`
- `PolaroidFrame`: frame + caption overlay
- `CliNavigation`: top-level nav from `cliLinks`
- `TerminalPrompt`: prompt from `terminalPrompt`
- `BackLink`: shared back pattern
- `ExperienceList`: maps `Experience[]` to cards
- `ExperienceDetail`: overview, technologies, achievements, timeline

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
- `src/components/ui`: shadcn/ui primitives
- `src/lib`: data, constants, utilities
- `src/test`: shared test setup
- `src/types`: type declarations
- `public/images`: static image assets
- `openclaw`: AI docs

## Invariants

- do not duplicate shell logic outside `src/app/layout.tsx`
- keep shared copy in `src/lib` before duplicating it in components
- keep terminal labels in `src/lib/constants.ts`
- keep polaroid caption in the frame footer overlay

## Data Models

- `LandingData.personal`: `name`, `tagline`, `location`, `email`
- `LandingData.hero`: `pronunciationLine1`, `pronunciationLine2`, `photoMeta`, `photo`
- `LandingData.socials`: `linkedin`
- `Experience`: `id`, `title`, `company`, `dateRange`, `description`, `fullDescription`, `technologies[]`, `achievements[]`, `timeline`, `linkHref`
- `Experience.timeline`: `start`, `end`, `milestones[]`
