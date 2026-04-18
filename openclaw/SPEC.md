# Specification

## Overview

**Purpose:** Professional portfolio for Mykhailo Trunov (Senior Front-end Engineer)  
**Audience:** Recruiters, HRs, engineering teams  
**Design:** Minimalist, editorial, developer-focused

---

## Design System

### Colors

**Light:**
- Background: `#F5F5FF`
- Text: `#0a0a0a`
- Accent: `#84cc16` (lime-600)

**Dark:**
- Background: `#0a0a0a`
- Text: `#f5f5ff`
- Accent: `#a3e635` (lime-400)

### Typography

**Font:** System monospace (no external dependencies)

```
ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace
```

### Layout

- Max width: `max-w-[75ch]`
- Mobile: Single column
- Desktop: Two columns (breakpoint: 768px)
- Spacing: Tailwind default (4px base)

---

## Pages

### `/` (Home)

**Components:** Header, Hero, Footer

**Features:**
- Live datetime (updates every second)
- Theme toggle
- Polaroid photo with responsive caption
- Pronunciation guide

### `/experience` (Experience List)

**Components:** Header, ExperienceList, TerminalPrompt, Footer

**Features:**
- Terminal-style navigation
- Lists all experiences
- Links to `/experience/[id]`

### `/experience/[id]` (Experience Detail)

**Components:** Header, ExperienceDetail, TerminalPrompt, BackLink, Footer

**Features:**
- Full description
- Technologies
- Key achievements
- Timeline with milestones
- 404 page for invalid IDs
- Loading state

**Responsive Caption:**
- Mobile (< 640px): Date only ("30 Apr 2021")
- Desktop (≥ 640px): Full ("30 Apr 2021 · 13:33 · Odesa, UA")

### `/projects`, `/case-studies`, `/notes`

**Status:** Placeholders ("coming soon")

---

## Components

### Layout

**Header:**
- Sticky positioning
- Glassmorphism effect
- Live datetime
- Theme toggle

**Footer:**
- "Built with OpenClaw" branding
- OpenClaw logo (SVG)
- Link to https://openclaw.ai

**PageWrapper:**
- Max-width constraint (75ch)
- Centered layout

### Content

**Hero:**
- Introduction text
- Pronunciation guide
- PolaroidFrame component
- Responsive layout

**PolaroidFrame:**
- White frame with shadow
- Responsive caption (mobile: date only)

**Heading/Body/Small:**
- Typography components
- Configurable levels

### Navigation

**BackLink:**
- Reusable back button
- Customizable label
- Hover effects

**TerminalPrompt:**
- Shows command (cat, ls)
- Shows argument ([experience])

**CliNavigation:**
- Terminal-style navigation
- Keyboard accessible

### Experience

**ExperienceList:**
- Maps through experiences
- Renders ExperienceCard components

**ExperienceCard:**
- Title, company, date
- Description (truncated)
- "Read more" link
- Cursor pointer

**ExperienceDetail:**
- Overview section
- Technologies section
- Key achievements
- Timeline with milestones
- Memoized for performance
- Accessibility features

### Utilities

**ThemeProvider:**
- next-themes integration
- System preference detection

**ThemeToggle:**
- Sun/Moon icons
- Toggle dark/light

**ScrollToTop:**
- Auto-scroll on route change
- Uses usePathname hook

---

## Features

### Theme

- Dark/light mode toggle
- System preference detection
- Smooth transitions
- Stored in localStorage

### Navigation

- Terminal-style prompts
- Back links on all pages
- Auto-scroll to top on navigation
- Keyboard accessible

### Responsive

- Mobile-first design
- Breakpoint: 768px (md)
- Caption hides on mobile
- Layout stacks on mobile

### Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- WCAG AA contrast
- Screen reader support

---

## Tech Stack

- **Framework:** Next.js 16.2.3 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Theme:** next-themes 0.4.6
- **UI:** shadcn/ui
- **Testing:** Vitest 4.1.4
- **Deployment:** Vercel

---

## Quality Gate

```bash
npm run lint        # 0 errors
npm run test        # all passing
npm run typecheck   # 0 errors
npm run build       # success
```

**Current:** 41 tests passing

---

## Deployment

**Platform:** Vercel  
**Trigger:** Push to main  
**URL:** https://mike-landing-swart.vercel.app

**Branch Protection:**
- Only main triggers production
- PRs required
- Quality gate must pass
