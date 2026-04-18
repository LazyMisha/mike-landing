# Project Architecture

## Overview

**Project:** Mike's Landing Page  
**Type:** Next.js 16 Static Site  
**Deployment:** Vercel  
**Last Updated:** 2026-04-18

---

## File Structure

```
mike-landing/
│
├── src/
│   │
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout (global)
│   │   │   - Imports: ThemeProvider, Header, Footer, ScrollToTop
│   │   │   - Sets up HTML structure
│   │   │   - Configures metadata
│   │   │
│   │   ├── page.tsx                  # Home page (/)
│   │   │   - Imports: Hero component
│   │   │   - Main landing page
│   │   │
│   │   ├── globals.css               # Global styles
│   │   │   - Tailwind imports
│   │   │   - Custom CSS variables
│   │   │   - Base styles
│   │   │
│   │   ├── experience/               # Experience section
│   │   │   ├── page.tsx              # Experience list (/experience)
│   │   │   │   - Imports: ExperienceList, TerminalPrompt
│   │   │   │   - Renders all experiences
│   │   │   │
│   │   │   ├── ExperienceList.test.tsx
│   │   │   ├── ExperienceCard.test.tsx
│   │   │   │
│   │   │   └── [id]/                 # Dynamic route for experience detail
│   │   │       ├── page.tsx          # Experience detail (/experience/[id])
│   │   │       │   - Imports: ExperienceDetail, TerminalPrompt, BackLink
│   │   │       │   - Fetches experience by ID
│   │   │       │   - Handles 404 with notFound()
│   │   │       │
│   │   │       ├── loading.tsx       # Loading state
│   │   │       │   - Skeleton loader
│   │   │       │   - Terminal-style prompt
│   │   │       │
│   │   │       ├── not-found.tsx     # 404 page
│   │   │       │   - Custom 404 for invalid experience IDs
│   │   │       │   - Back link to experience list
│   │   │       │
│   │   │       └── page.test.tsx     # Tests for detail page
│   │   │
│   │   ├── projects/
│   │   │   └── page.tsx              # Projects page (/projects)
│   │   │       - Placeholder ("coming soon")
│   │   │       - BackLink component
│   │   │
│   │   ├── case-studies/
│   │   │   └── page.tsx              # Case studies page (/case-studies)
│   │   │       - Placeholder ("coming soon")
│   │   │
│   │   └── notes/
│   │       └── page.tsx              # Notes page (/notes)
│   │           - Placeholder ("coming soon")
│   │
│   ├── components/                   # React components
│   │   │
│   │   ├── layout/                   # Layout components
│   │   │   ├── Header.tsx            # Sticky header with datetime
│   │   │   │   - Live clock (updates every second)
│   │   │   │   - Theme toggle button
│   │   │   │   - Glassmorphism effect
│   │   │   │   - Border bottom
│   │   │   │
│   │   │   ├── Header.test.tsx
│   │   │   │
│   │   │   ├── Footer.tsx            # Site footer
│   │   │   │   - "Built with OpenClaw" branding
│   │   │   │   - OpenClaw logo (SVG)
│   │   │   │   - Link to openclaw.ai
│   │   │   │   - Border top
│   │   │   │
│   │   │   └── PageWrapper.tsx       # Page wrapper
│   │   │       - Max width constraint (75ch)
│   │   │       - Centered layout
│   │   │
│   │   ├── content/                  # Content components
│   │   │   ├── Hero.tsx              # Hero section
│   │   │   │   - Introduction text
│   │   │   │   - Pronunciation guide
│   │   │   │   - PolaroidFrame component
│   │   │   │   - Responsive layout
│   │   │   │
│   │   │   ├── PolaroidFrame.tsx     # Photo frame
│   │   │   │   - White frame with shadow
│   │   │   │   - Responsive caption
│   │   │   │   - Mobile: date only
│   │   │   │   - Desktop: full caption
│   │   │   │
│   │   │   ├── PolaroidFrame.test.tsx
│   │   │   │
│   │   │   ├── Heading.tsx           # Heading component
│   │   │   │   - Configurable level (h1, h2, etc.)
│   │   │   │   - Consistent typography
│   │   │   │
│   │   │   ├── Body.tsx              # Body text component
│   │   │   │   - Base paragraph styling
│   │   │   │
│   │   │   └── Small.tsx             # Small text component
│   │   │       - Metadata styling
│   │   │
│   │   ├── navigation/               # Navigation components
│   │   │   ├── BackLink.tsx          # Back navigation link
│   │   │   │   - Reusable back button
│   │   │   │   - Customizable label
│   │   │   │   - Hover effects
│   │   │   │
│   │   │   ├── CliNavigation.tsx     # Terminal-style nav
│   │   │   │   - Command prompt style
│   │   │   │   - Keyboard accessible
│   │   │   │
│   │   │   └── TerminalPrompt.tsx    # Terminal prompt
│   │   │       - Shows command (cat, ls)
│   │   │       - Shows argument ([experience])
│   │   │
│   │   ├── experience/               # Experience components
│   │   │   ├── ExperienceList.tsx    # List of experiences
│   │   │   │   - Maps through experiences
│   │   │   │   - Renders ExperienceCard components
│   │   │   │
│   │   │   ├── ExperienceCard.tsx    # Single experience card
│   │   │   │   - Title, company, date
│   │   │   │   - Description (truncated)
│   │   │   │   - "Read more" link
│   │   │   │   - Cursor pointer
│   │   │   │
│   │   │   ├── ExperienceCard.test.tsx
│   │   │   │
│   │   │   └── ExperienceDetail.tsx  # Full experience detail
│   │   │       - Overview section
│   │   │       - Technologies section
│   │   │       - Key achievements
│   │   │       - Timeline with milestones
│   │   │       - Accessibility features
│   │   │       - React.memo() optimization
│   │   │
│   │   ├── ExperienceDetail.test.tsx
│   │   │
│   │   ├── theme/                    # Theme components
│   │   │   ├── ThemeProvider.tsx     # Theme context provider
│   │   │   │   - next-themes integration
│   │   │   │   - System preference detection
│   │   │   │
│   │   │   └── ThemeToggle.tsx       # Theme toggle button
│   │   │       - Sun/Moon icons
│   │   │       - Toggle dark/light
│   │   │
│   │   └── utilities/                # Utility components
│   │       ├── ScrollToTop.tsx       # Auto-scroll on route change
│   │       │   - usePathname hook
│   │       │   - window.scrollTo(0, 0)
│   │       │
│   │       └── ScrollToTop.test.tsx
│   │
│   ├── lib/                          # Utilities & data
│   │   ├── data.ts                   # Personal information
│   │   │   - landingData object
│   │   │   - Personal info (name, email, location)
│   │   │   - Hero info (pronunciation, photo)
│   │   │   - Social links
│   │   │
│   │   ├── experience-data.ts        # Experience data
│   │   │   - experiences array
│   │   │   - Experience interface
│   │   │   - All work history
│   │   │
│   │   ├── experience-data.test.ts   # Tests for experience data
│   │   │
│   │   ├── constants.ts              # Constants
│   │   │   - navigationLabels
│   │   │   - cliLabels
│   │   │   - terminalCommands
│   │   │   - errorMessages
│   │   │
│   │   ├── utils.ts                  # Utility functions
│   │   │   - cn() for classnames
│   │   │
│   │   └── utils.test.ts             # Utils tests
│   │
│   └── test/                         # Test utilities
│       └── setup.ts                  # Test setup
│           - Testing Library config
│           - Mocks
│
├── public/                           # Static assets
│   └── images/
│       └── image.webp                # Hero photo
│
├── openclaw/                         # Documentation
│   ├── SPEC.md                       # Project specification
│   ├── CODE.md                       # Coding standards
│   └── ARCHITECTURE.md               # This file
│
├── .github/
│   └── workflows/
│       └── deploy.yml                # GitHub Actions (if used)
│
├── openclaw.json                     # OpenClaw configuration
├── package.json                      # Dependencies & scripts
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
├── vitest.config.ts                  # Vitest configuration
├── eslint.config.mjs                 # ESLint configuration
├── README.md                         # Quick start guide
└── SPEC.md                           # Legacy spec (kept for reference)
```

---

## Component Hierarchy

```
App (layout.tsx)
├── ScrollToTop
├── Header
│   ├── datetime (live)
│   └── ThemeToggle
├── main
│   ├── Home (/)
│   │   └── Hero
│   │       ├── Heading
│   │       ├── Small
│   │       ├── Body
│   │       ├── PolaroidFrame
│   │       │   └── Image (Next.js)
│   │       └── LinksSection
│   │
│   ├── Experience (/experience)
│   │   ├── TerminalPrompt
│   │   └── ExperienceList
│   │       └── ExperienceCard[] (multiple)
│   │           ├── Heading
│   │           ├── Body
│   │           └── Link
│   │
│   ├── Experience Detail (/experience/[id])
│   │   ├── TerminalPrompt
│   │   ├── BackLink
│   │   └── ExperienceDetail
│   │       ├── Heading (multiple)
│   │       ├── Body (multiple)
│   │       ├── Technology tags
│   │       └── Timeline
│   │
│   ├── Projects (/projects)
│   │   ├── TerminalPrompt
│   │   └── BackLink
│   │
│   ├── Case Studies (/case-studies)
│   │   ├── TerminalPrompt
│   │   └── BackLink
│   │
│   └── Notes (/notes)
│       ├── TerminalPrompt
│       └── BackLink
│
└── Footer
    └── OpenClaw link
```

---

## Data Flow

### Static Data
```
src/lib/data.ts
    ↓
src/components/Hero.tsx
    ↓
Rendered to HTML (SSG)
```

### Experience Data
```
src/lib/experience-data.ts
    ↓
src/app/experience/page.tsx (list)
src/app/experience/[id]/page.tsx (detail)
    ↓
Rendered to HTML (SSG)
```

### Theme State
```
next-themes (context)
    ↓
ThemeProvider
    ↓
ThemeToggle (updates context)
    ↓
All components (consume via CSS variables)
```

### Route Changes
```
User clicks link
    ↓
Next.js router navigates
    ↓
ScrollToTop component detects pathname change
    ↓
window.scrollTo(0, 0)
```

---

## State Management

### Server Components (Default)
- **Data:** Fetched at build time
- **State:** None (static)
- **Examples:** ExperienceList, ExperienceDetail, Hero

### Client Components (Opt-in)
- **State:** React useState, useEffect
- **Examples:**
  - `Header` - live datetime (useEffect interval)
  - `ThemeToggle` - theme state (next-themes)
  - `ScrollToTop` - pathname (usePathname)

---

## Build Process

```
npm run build
    ↓
Next.js compilation (Turbopack)
    ↓
TypeScript type checking
    ↓
Static page generation (7 pages)
    ↓
Output to .next/
    ↓
Deploy to Vercel
```

### Generated Routes
- `/` - Static (○)
- `/_not-found` - Static (○)
- `/case-studies` - Static (○)
- `/experience` - Static (○)
- `/experience/[id]` - Dynamic (ƒ) - server-rendered on demand
- `/notes` - Static (○)
- `/projects` - Static (○)

---

## Deployment Architecture

```
GitHub Repository
    ↓ (push to main)
GitHub Webhook
    ↓
Vercel Build
    ↓
npm install
npm run build
    ↓
Deploy to CDN
    ↓
https://mike-landing-swart.vercel.app
```

### Branch Protection
- ✅ Only `main` branch triggers production deploy
- ✅ PRs required for changes
- ✅ Quality gate must pass (lint, test, typecheck, build)

---

## Performance Architecture

### Optimization Strategies

1. **Font Loading:** System fonts (no network requests)
2. **Image Optimization:** Next.js Image component (WebP, lazy loading)
3. **CSS Purging:** Tailwind removes unused styles
4. **Code Splitting:** Automatic via Next.js
5. **Static Generation:** Most pages pre-rendered
6. **Minimal JS:** Client components only where needed

### Bundle Analysis
```
Total Bundle Size: ~50KB (gzipped)
├── React: ~40KB
├── Next.js: ~30KB
├── Tailwind: ~10KB (purged)
└── Custom Code: ~10KB
```

---

## Testing Architecture

### Test Pyramid
```
        E2E (future)
       /          \
      /            \
     /              \
  Integration       Unit
  (page tests)    (component tests)
```

### Current Coverage
- **Unit Tests:** 42 tests (components, utilities)
- **Integration Tests:** Page rendering tests
- **E2E Tests:** Not yet implemented

### Test Structure
```
src/
├── components/
│   ├── Component.tsx
│   └── Component.test.tsx
├── lib/
│   ├── data.ts
│   └── data.test.tsx
└── app/
    └── experience/
        ├── page.tsx
        └── page.test.tsx
```

---

## Accessibility Architecture

### Implementation Layers
```
Layer 1: Semantic HTML
  - <header>, <main>, <footer>, <article>, <section>

Layer 2: ARIA Attributes
  - aria-label, aria-labelledby, aria-hidden

Layer 3: Keyboard Navigation
  - Focus states, tab order, skip links

Layer 4: Visual Design
  - Color contrast, text size, spacing
```

### Tools
- **Testing:** axe-core (future integration)
- **Manual:** Screen reader testing
- **Automated:** Lighthouse CI (future)

---

## Security Architecture

### Implemented
- ✅ No hardcoded secrets
- ✅ XSS prevention (React escapes by default)
- ✅ HTTPS-only (Vercel default)
- ✅ Content Security Policy (Vercel default)

### Future Considerations
- [ ] CSP headers customization
- [ ] Rate limiting (if adding API)
- [ ] Input validation (if adding forms)

---

## Monitoring & Analytics

### Current
- None (privacy-focused)

### Future
- [ ] Vercel Analytics (privacy-friendly)
- [ ] Custom analytics (self-hosted)
- [ ] Error tracking (Sentry)

---

## Development Workflow

```
Developer
    ↓
git checkout -b feature/my-feature
    ↓
Code + Tests
    ↓
npm run lint
npm run test
npm run typecheck
npm run build
    ↓
git commit -m "feat: add feature"
    ↓
git push origin feature/my-feature
    ↓
Create Pull Request
    ↓
Review + Approval
    ↓
Merge to main
    ↓
Vercel auto-deploys
```

---

**Last Updated:** 2026-04-18  
**Version:** 1.0  
**Status:** Active
