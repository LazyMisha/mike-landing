# Architecture

## System Overview

**Type:** Next.js 16 Static Site  
**Deployment:** Vercel (auto-deploy on main)  
**Production:** https://mike-landing-swart.vercel.app

---

## Routing

- `/` - Home (Hero section)
- `/experience` - Experience list
- `/experience/[id]` - Experience detail (dynamic, SSR)
- `/projects` - Placeholder
- `/case-studies` - Placeholder
- `/notes` - Placeholder

---

## Component Architecture

### Layout
- `Header` - Sticky, live datetime, theme toggle
- `Footer` - OpenClaw branding
- `PageWrapper` - Max-width constraint (75ch)

### Pages
- `Hero` - Introduction, polaroid photo
- `ExperienceList` - Maps experiences to cards
- `ExperienceCard` - Single experience preview
- `ExperienceDetail` - Full experience (Overview, Technologies, Achievements, Timeline)
- `BackLink` - Reusable back navigation
- `TerminalPrompt` - Terminal-style command display
- `CliNavigation` - Terminal-style nav

### Utilities
- `ThemeProvider` - next-themes wrapper
- `ThemeToggle` - Dark/light toggle
- `ScrollToTop` - Auto-scroll on route change
- `PolaroidFrame` - Photo frame with responsive caption

---

## Data Flow

### Static Data
```
src/lib/data.ts → Hero component → SSG
src/lib/experience-data.ts → Experience pages → SSG/SSR
```

### State
- **Server (default):** All content pages
- **Client (opt-in):** Header (datetime), ThemeToggle, ScrollToTop

### Route Changes
```
Link click → Next.js router → ScrollToTop (usePathname) → window.scrollTo(0, 0)
```

---

## Project Structure

```
mike-landing/
├── src/
│   ├── app/
│   │   ├── case-studies/
│   │   ├── experience/
│   │   │   └── [id]/
│   │   ├── notes/
│   │   ├── projects/
│   │   └── test/
│   ├── components/
│   │   ├── content/
│   │   ├── experience/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── theme/
│   │   ├── ui/
│   │   └── utilities/
│   ├── lib/
│   └── test/
├── openclaw/
├── public/
│   └── images/
├── .github/
│   └── workflows/
├── .next/
├── .vercel/
└── node_modules/
```

---

## Performance

**Strategy:**
- System fonts (no network)
- Static generation (default)
- Minimal client components
- Tailwind CSS purging

**Targets:**
- LCP < 2.5s
- CLS < 0.1
- 100/100 Lighthouse

---

## Accessibility

**Implementation:**
- Semantic HTML (`<header>`, `<main>`, `<footer>`)
- ARIA labels on sections
- Keyboard navigation
- WCAG AA contrast

---

## Testing

**Framework:** Vitest  
**Coverage:** All components  
**Location:** `*.test.tsx` alongside components

---

## Data Models

```typescript
// src/lib/data.ts
interface PersonalInfo {
  name: string;
  tagline: string;
  location: string;
  email: string;
}

interface HeroInfo {
  pronunciationLine1: string;
  pronunciationLine2: string;
  photoMeta: string;
  photo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

// src/lib/experience-data.ts
interface Experience {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  achievements: string[];
  timeline: {
    start: string;
    end: string;
    milestones: Array<{
      date: string;
      event: string;
    }>;
  };
  linkHref: string;
}
```
