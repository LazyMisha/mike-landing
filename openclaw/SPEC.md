# Mike's Landing Page — Complete Specification

## 1. Project Overview

**Name:** Mike's Landing Page  
**Type:** Personal Portfolio & CV  
**Owner:** Mykhailo Trunov (Senior Front-end Engineer)  
**Purpose:** Professional portfolio for recruiters, HRs, and engineering teams  
**Status:** Production-ready

### Goals
- ✅ Showcase professional experience and skills
- ✅ Provide clean, developer-focused design
- ✅ Demonstrate modern React/Next.js expertise
- ✅ Fast, accessible, SEO-friendly
- ✅ Mobile-first responsive design

---

## 2. Design System

### Visual Style
- **Aesthetic:** Minimalist, editorial, brutalist typography
- **Mood:** Professional, confident, developer-focused
- **Principle:** Content-first, generous whitespace

### Color Palette

#### Light Mode
```
Background: #F5F5FF (pale lavender)
Text: #0a0a0a (near black)
Accent: #84cc16 (lime-600)
Border: rgba(0, 0, 0, 0.1)
```

#### Dark Mode
```
Background: #0a0a0a (deep black)
Text: #f5f5ff (pale lavender)
Accent: #a3e635 (lime-400)
Border: rgba(255, 255, 255, 0.1)
```

### Typography

**Font Stack:** System monospace (no external dependencies)
```css
font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, 
             Consolas, Liberation Mono, Courier New, monospace;
```

**Type Scale:**
- `text-xs` (12px) - Small metadata
- `text-sm` (14px) - Secondary text
- `text-base` (16px) - Body text
- `text-lg` (18px) - Lead paragraphs
- `text-xl` (20px) - Section headings
- `text-2xl` (24px) - Page titles

### Spacing
- **Base unit:** 4px (Tailwind default)
- **Section padding:** `py-4` (16px) mobile, `py-6` (24px) desktop
- **Component gaps:** `gap-4` (16px), `gap-5` (20px)
- **Max width:** `max-w-[75ch]` (75 characters per line)

### Layout
- **Mobile:** Single column, stacked vertically
- **Desktop:** Two-column layout (text left, visual right)
- **Breakpoint:** `md` (768px)

---

## 3. Pages & Routes

### `/` (Home)
**Purpose:** Main landing page  
**Components:** Header, Hero, Footer  
**Features:**
- Live datetime in header
- Theme toggle
- Hero with polaroid photo
- Responsive caption (mobile: date only, desktop: full)

### `/experience` (Experience List)
**Purpose:** Show all work experience  
**Components:** Header, ExperienceList, TerminalPrompt, Footer  
**Features:**
- Terminal-style navigation
- List of all positions
- Links to detail pages

### `/experience/[id]` (Experience Detail)
**Purpose:** Detailed view of single position  
**Components:** Header, ExperienceDetail, TerminalPrompt, BackLink, Footer  
**Features:**
- Full description
- Technologies used
- Key achievements
- Timeline with milestones
- Responsive layout
- 404 page for invalid IDs
- Loading state

### `/projects` (Projects)
**Purpose:** Showcase personal/professional projects  
**Components:** Header, TerminalPrompt, BackLink, Footer  
**Status:** Placeholder ("coming soon")

### `/case-studies` (Case Studies)
**Purpose:** In-depth technical analysis  
**Components:** Header, TerminalPrompt, BackLink, Footer  
**Status:** Placeholder ("coming soon")

### `/notes` (Notes)
**Purpose:** Technical notes and learnings  
**Components:** Header, TerminalPrompt, BackLink, Footer  
**Status:** Placeholder ("coming soon")

---

## 4. Components

### Layout Components

#### `Header`
- **File:** `src/components/Header.tsx`
- **Features:**
  - Sticky positioning
  - Glassmorphism effect (`backdrop-blur-md`, `bg-background/80`)
  - Border bottom for visual consistency
  - Live datetime (updates every second)
  - Theme toggle button
- **Responsive:** Full width, `max-w-[75ch]` centered

#### `Footer`
- **File:** `src/components/Footer.tsx`
- **Features:**
  - "Built with OpenClaw" branding
  - OpenClaw logo (SVG claw icon)
  - Link to https://openclaw.ai
  - Border top matching header
- **Position:** Sticky at bottom (not floating)

#### `PageWrapper`
- **File:** `src/components/PageWrapper.tsx`
- **Features:**
  - Max width constraint (`max-w-[75ch]`)
  - Centered layout
  - Responsive padding

### Content Components

#### `Hero`
- **File:** `src/components/Hero.tsx`
- **Features:**
  - Introduction text
  - Pronunciation guide
  - Polaroid photo frame
  - Responsive layout (mobile: stacked, desktop: side-by-side)

#### `PolaroidFrame`
- **File:** `src/components/PolaroidFrame.tsx`
- **Features:**
  - White frame with shadow
  - Responsive caption
  - Mobile: date only ("30 Apr 2021")
  - Desktop: full ("30 Apr 2021 · 13:33 · Odesa, UA")
  - CSS: `hidden sm:inline` for responsive hiding

#### `Heading`
- **File:** `src/components/Heading.tsx`
- **Features:**
  - Configurable heading level (`as` prop)
  - Consistent typography

#### `Body`
- **File:** `src/components/Body.tsx`
- **Features:**
  - Base paragraph styling
  - Responsive font size

#### `Small`
- **File:** `src/components/Small.tsx`
- **Features:**
  - Small text for metadata
  - Muted color

### Navigation Components

#### `BackLink`
- **File:** `src/components/BackLink.tsx`
- **Features:**
  - Reusable back navigation
  - Customizable label
  - Hover effects
  - Arrow icon

#### `CliNavigation`
- **File:** `src/components/CliNavigation.tsx`
- **Features:**
  - Terminal-style navigation
  - Command prompt style
  - Keyboard accessible

#### `TerminalPrompt`
- **File:** `src/components/TerminalPrompt.tsx`
- **Features:**
  - Shows command (e.g., "cat", "ls")
  - Shows argument (e.g., "[experience]")
  - Monospace font

### Experience Components

#### `ExperienceList`
- **File:** `src/components/ExperienceList.tsx`
- **Features:**
  - Renders all experiences
  - Cards with title, company, date, description
  - "Read more" links

#### `ExperienceCard`
- **File:** `src/components/ExperienceCard.tsx`
- **Features:**
  - Single experience preview
  - Cursor pointer on link
  - Focus states
  - Accessible link

#### `ExperienceDetail`
- **File:** `src/components/ExperienceDetail.tsx`
- **Features:**
  - Full experience information
  - Sections: Overview, Technologies, Achievements, Timeline
  - Accessibility: aria-labels, roles, sr-only
  - Memoized for performance
  - Max-width constraint

### Utility Components

#### `ThemeProvider`
- **File:** `src/components/ThemeProvider.tsx`
- **Features:**
  - next-themes integration
  - System preference detection
  - Smooth transitions

#### `ThemeToggle`
- **File:** `src/components/ThemeToggle.tsx`
- **Features:**
  - Sun/Moon icons
  - Toggle dark/light mode
  - Accessible button

#### `ScrollToTop`
- **File:** `src/components/ScrollToTop.tsx`
- **Features:**
  - Auto-scroll on route change
  - Uses `usePathname` hook
  - Global layout component

---

## 5. Data Models

### Personal Info
```typescript
interface PersonalInfo {
  name: string;           // "Mykhailo"
  tagline: string;        // "Creative software engineer..."
  location: string;      // "Poland"
  email: string;         // "misha_trunov@hotmail.com"
}
```

### Hero Info
```typescript
interface HeroInfo {
  pronunciationLine1: string;  // "/mykhæɪlɒ/"
  pronunciationLine2: string;  // "Or simply Mike"
  photoMeta: string;           // "30 Apr 2021 · 13:33 · Odesa, UA"
  photo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}
```

### Experience
```typescript
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

### Social Links
```typescript
interface SocialLinks {
  linkedin: string;  // LinkedIn profile URL
}
```

---

## 6. Tech Stack

### Core
- **Framework:** Next.js 16.2.3 (App Router)
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 4.x
- **Theme:** next-themes 0.4.6
- **UI Library:** shadcn/ui

### Development
- **Testing:** Vitest 4.1.4
- **Linting:** ESLint 9.x
- **Type Checking:** TypeScript compiler
- **Build:** Turbopack (Next.js default)

### Deployment
- **Platform:** Vercel
- **Auto-deploy:** On push to `main` branch
- **Production URL:** https://mike-landing-swart.vercel.app

---

## 7. Accessibility Requirements

### Semantic HTML
- ✅ Use `<header>`, `<main>`, `<footer>`, `<article>`, `<section>`
- ✅ Proper heading hierarchy (`h1` → `h2` → `h3`)
- ✅ Lists use `<ul>`, `<ol>`, `<li>`

### ARIA & Screen Readers
- ✅ `aria-label` on interactive elements
- ✅ `aria-labelledby` for sections
- ✅ `aria-hidden="true"` on decorative elements
- ✅ `role="list"` and `role="listitem"` where needed
- ✅ `sr-only` class for screen-reader-only text

### Keyboard Navigation
- ✅ All interactive elements focusable
- ✅ Visible focus states
- ✅ Logical tab order
- ✅ Skip links (if needed)

### Color & Contrast
- ✅ WCAG AA minimum contrast ratio (4.5:1)
- ✅ Don't rely on color alone
- ✅ Dark mode tested for contrast

### Images
- ✅ Alt text on all images
- ✅ Decorative images have `alt=""`

---

## 8. Performance Goals

### Metrics
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **FCP (First Contentful Paint):** < 1.8s

### Optimization Strategies
- ✅ System fonts (no external requests)
- ✅ Minimal CSS (Tailwind purge)
- ✅ Image optimization (Next.js Image)
- ✅ Static generation where possible
- ✅ Dynamic rendering only when needed
- ✅ Code splitting (automatic via Next.js)

---

## 9. Testing Strategy

### Unit Tests
- **Framework:** Vitest
- **Coverage:** All components
- **Assertions:** Testing Library (react-testing-library)
- **Focus:** Component rendering, user interactions

### Integration Tests
- Page rendering
- Navigation flow
- Theme switching

### Quality Gate (CI/CD)
```bash
npm run lint        # ESLint
npm run test        # Vitest tests
npm run typecheck   # TypeScript compilation
npm run build       # Next.js build
```

**Requirements:**
- ✅ 0 lint errors
- ✅ All tests passing
- ✅ 0 TypeScript errors
- ✅ Build succeeds

---

## 10. File Organization

```
mike-landing/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout + ScrollToTop
│   │   ├── page.tsx              # Home page
│   │   ├── globals.css           # Global styles
│   │   ├── experience/
│   │   │   ├── page.tsx          # Experience list
│   │   │   ├── [id]/
│   │   │   │   ├── page.tsx      # Experience detail
│   │   │   │   ├── loading.tsx   # Loading state
│   │   │   │   ├── not-found.tsx # 404 page
│   │   │   │   └── page.test.tsx # Tests
│   │   │   ├── ExperienceList.test.tsx
│   │   │   └── ExperienceCard.test.tsx
│   │   ├── projects/page.tsx
│   │   ├── case-studies/page.tsx
│   │   └── notes/page.tsx
│   ├── components/               # React components
│   │   ├── Header.tsx
│   │   ├── Header.test.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── PolaroidFrame.tsx
│   │   ├── PolaroidFrame.test.tsx
│   │   ├── ExperienceList.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── ExperienceCard.test.tsx
│   │   ├── ExperienceDetail.tsx
│   │   ├── ExperienceDetail.test.tsx
│   │   ├── BackLink.tsx
│   │   ├── CliNavigation.tsx
│   │   ├── TerminalPrompt.tsx
│   │   ├── Heading.tsx
│   │   ├── Body.tsx
│   │   ├── Small.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── ScrollToTop.test.tsx
│   ├── lib/                      # Utilities & data
│   │   ├── data.ts               # Personal info
│   │   ├── experience-data.ts    # Experience data
│   │   ├── experience-data.test.ts
│   │   ├── constants.ts          # Constants
│   │   ├── utils.ts              # Utilities
│   │   └── utils.test.ts
│   └── test/                     # Test utilities
│       └── setup.ts              # Test setup
├── public/                       # Static assets
│   └── images/
│       └── image.webp            # Hero photo
├── openclaw/                     # Documentation
│   ├── SPEC.md                   # This file
│   ├── CODE.md                   # Coding standards
│   └── ARCHITECTURE.md           # Architecture docs
├── openclaw.json                 # OpenClaw config
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── vitest.config.ts
├── README.md
└── SPEC.md (legacy - kept for reference)
```

---

## 11. Constants & Configuration

### Navigation Labels
```typescript
const navigationLabels = {
  backToExperienceList: '[ back to experience list ]',
  backToProjects: '[ back to projects ]',
  backToHome: '[ back to home ]',
};
```

### CLI Labels
```typescript
const cliLabels = {
  experience: '[experience]',
  projects: '[projects]',
  caseStudies: '[case-studies]',
  notes: '[notes]',
  cvPreview: '[cv-preview]',
};
```

### Terminal Commands
```typescript
const terminalCommands = {
  list: 'ls',
  view: 'cat',
};
```

### Error Messages
```typescript
const errorMessages = {
  experienceNotFound: 'Error: Experience not found',
  projectNotFound: 'Error: Project not found',
  pageNotFound: 'Error: Page not found',
};
```

---

## 12. Future Enhancements

### Planned
- [ ] Projects page with actual content
- [ ] Case studies section
- [ ] Notes/blog section
- [ ] CV PDF download
- [ ] Contact form
- [ ] Skills section
- [ ] Search functionality

### Considered
- [ ] i18n (English/Ukrainian)
- [ ] Analytics (privacy-friendly)
- [ ] RSS feed for notes
- [ ] Comments system
- [ ] Dark mode auto-switch based on time

---

## 13. Success Metrics

### Technical
- ✅ 100/100 Lighthouse score
- ✅ 0 accessibility issues
- ✅ 0 TypeScript errors
- ✅ 100% test coverage (goal)

### Business
- ✅ Clear presentation of experience
- ✅ Easy to contact
- ✅ Professional appearance
- ✅ Fast load time

---

**Last Updated:** 2026-04-18  
**Version:** 2.0  
**Status:** Production
