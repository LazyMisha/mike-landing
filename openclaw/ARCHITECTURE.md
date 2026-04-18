# Architecture

## Purpose

This document answers: where does this change live?
Use it for system structure, file ownership, component boundaries, and change impact.

## System Overview

- **Type:** Next.js 16 App Router portfolio site
- **Deployment:** Vercel
- **Production:** https://mike-landing-swart.vercel.app
- **Rendering model:**
  - Static: `/`, `/experience`, `/projects`, `/case-studies`, `/notes`
  - Dynamic on demand: `/experience/[id]`

---

## Runtime Shell

- `src/app/layout.tsx` owns the global shell:
  - `ThemeProvider`
  - `ScrollToTop`
  - `Header`
  - app-level `<main>`
  - `Footer`
- Do not duplicate header, footer, theme setup, or scroll behavior inside route pages.
- Most route pages are Server Components.
- Current Client Components:
  - `ThemeProvider`
  - `Header`
  - `ThemeToggle`
  - `ScrollToTop`

---

## Route Map

- `/`
  - `PageWrapper`
  - `Hero`
  - `InfoSection`
  - `CliNavigation`
- `/experience`
  - `PageWrapper`
  - `TerminalPrompt`
  - `BackLink`
  - `ExperienceList`
- `/experience/[id]`
  - async page with `params: Promise<{ id: string }>`
  - local data lookup in `experiences`
  - `notFound()` for invalid ids
  - `loading.tsx` and `not-found.tsx` exist in the route folder
  - renders `TerminalPrompt`, a back link, and `ExperienceDetail`
- `/projects`, `/case-studies`, `/notes`
  - placeholder pages using:
    - `PageWrapper`
    - `TerminalPrompt`
    - `BackLink`
    - short placeholder copy

---

## Data Flow

### Content Sources

- `src/lib/data.ts`
  - landing/profile content
  - hero copy
  - hero photo metadata
  - social links
- `src/lib/experience-data.ts`
  - experience list and detail content
- `src/lib/constants.ts`
  - terminal prompt text
  - CLI labels and links
  - navigation labels
  - shared error messages
- `public/images/`
  - local hero image assets

### Route Changes

```text
Link click -> Next.js router -> pathname change -> ScrollToTop -> window.scrollTo(0, 0)
```

### State

- **Server by default:** pages, content components, experience rendering
- **Client only where needed:** theme management, live datetime, scroll restoration

---

## Component Boundaries

### Layout And Typography

- `PageWrapper` controls content width and padding.
- `Heading`, `Body`, and `Small` are the shared text primitives.
- `PageWrapper` can change its semantic tag via `as`; use that deliberately because the root layout already provides the app-level `<main>`.

### Home Composition

- `Hero` composes the intro, pronunciation copy, role line, social links, and photo.
- `InfoSection` contains the short professional summary.
- `LinksSection` renders contact links from central data.
- `PolaroidFrame` renders the framed image and footer caption overlay.

### Navigation

- `CliNavigation` reads top-level links from `cliLinks`.
- `TerminalPrompt` reads the shared shell prompt from `terminalPrompt`.
- `BackLink` renders the shared arrow + label pattern.

### Experience Domain

- `ExperienceList` maps data to `ExperienceCard`.
- `ExperienceDetail` renders Overview, Technologies, Key Achievements, and Timeline.
- The experience route family is the primary structured content system in the app today.

---

## Editing Map For AI

- Change home copy, location, email, or social links:
  - `src/lib/data.ts`
  - `src/components/Hero.tsx`
  - `src/components/InfoSection.tsx`
  - `src/components/LinksSection.tsx`
- Change the hero photo or caption behavior:
  - `public/images/`
  - `src/lib/data.ts`
  - `src/components/Hero.tsx`
  - `src/components/PolaroidFrame.tsx`
- Change terminal labels or top-level navigation:
  - `src/lib/constants.ts`
  - `src/components/CliNavigation.tsx`
  - relevant route page under `src/app`
- Change experience content:
  - `src/lib/experience-data.ts`
- Change theme tokens or the global visual system:
  - `src/app/globals.css`
  - `src/components/Header.tsx`
  - `src/components/ThemeToggle.tsx`
- Change shared layout behavior:
  - `src/app/layout.tsx`
  - `src/components/PageWrapper.tsx`
  - `src/components/Header.tsx`
  - `src/components/Footer.tsx`

---

## Project Structure

```text
mike-landing/
├── src/
│   ├── app/                  # App Router routes and route-local files
│   │   ├── case-studies/     # Placeholder route
│   │   ├── experience/       # Experience list route and tests
│   │   │   └── [id]/         # Dynamic experience detail route
│   │   ├── notes/            # Placeholder route
│   │   └── projects/         # Placeholder route
│   ├── components/           # Shared React components
│   │   └── ui/               # shadcn/ui primitives
│   ├── lib/                  # Content data, constants, and utilities
│   ├── test/                 # Global test setup
│   └── types/                # Type declarations
├── openclaw/                 # AI-facing project documentation
├── public/
│   └── images/               # Static image assets
├── .next/                    # Generated build output; do not edit
├── .vscode/                  # Workspace editor settings
└── node_modules/             # Installed dependencies; do not edit
```

---

## Architecture Invariants

- Keep the global shell in `src/app/layout.tsx`.
- Keep shared copy and data centralized in `src/lib` before duplicating it in components.
- Preserve the narrow editorial layout and monospace typography.
- Keep terminal-style navigation driven by constants instead of hardcoded route labels.
- Keep the polaroid caption in the frame footer overlay so caption text does not change the image layout.
- Prefer changing data files first when a request is primarily content-driven.
