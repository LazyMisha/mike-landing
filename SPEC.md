# Mike's Landing Page — Specification

## 1. Overview

**Project:** Personal portfolio for Mykhailo Trunov (Senior Front-end Engineer)

**Goal:** Portfolio site to share with recruiters, HRs, and engineers. Clean, professional, developer-focused design.

---

## 2. Design

### Visual Style
- **Aesthetic:** Minimalist, editorial, brutalist typography
- **Mood:** Developer-focused, clean, confident
- **Background Colors:**
  - Light: `#F5F5FF` (pale lavender)
  - Dark: `#0a0a0a` (deep black)

### Typography
- **Font Stack:** System fonts (no external dependencies)

### Layout
- Mobile-first
- Generous whitespace / negative space
- Asymmetrical composition

---

## 3. Sections

### Header
| Position | Content |
|----------|---------|
| Left | Live datetime + location (e.g., "Sat 14:01, Poland") |
| Right | Theme toggle (dark/light) |

### Hero
| Element | Content | Layout |
|---------|---------|--------|
| Main Text | "Hey, I am Mykhailo" (large, bold) | Vertical text on left side |
| Photo | Polaroid-style tilted frame (angled ~15°) | Photo on right side |
| Tagline | "Creative software engineer passionate about functional design." | Below photo |

### Contact
| Element | Content |
|---------|---------|
| Text | Brief sentence |
| Email | Clickable email link |

---

## 4. Links

| Link | URL |
|------|-----|
| LinkedIn | `https://linkedin.com/in/mikhailo-trunov` |
| Download CV | `/cv.pdf` (placeholder, file to be added later) |

---

## 5. Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | Framework |
| Tailwind CSS 4 | Styling |
| shadcn/ui | UI components |
| next-themes | Dark/light theme |
| TypeScript | Type safety |
| Vercel | Deployment |

---

## 6. Components

| Component | File | Description |
|------------|------|-------------|
| `ThemeProvider` | `components/ThemeProvider.tsx` | Theme context wrapper |
| `ThemeToggle` | `components/ThemeToggle.tsx` | Sun/Moon toggle button |
| `Header` | `components/Header.tsx` | Top bar with datetime + theme |
| `Hero` | `components/Hero.tsx` | Main section with photo + text |
| `PolaroidFrame` | `components/PolaroidFrame.tsx` | Styled photo frame (tilted) |
| `Contact` | `components/Contact.tsx` | Email section |

---

## 7. Data Model

```typescript
// src/lib/data.ts
interface PersonalInfo {
  name: string;           // "Mykhailo"
  tagline: string;       // "Creative software engineer passionate about functional design."
  location: string;      // "Poland"
  email: string;          // "your@email.com"
}

interface SocialLinks {
  linkedin: string;
  cv: string;             // Path to CV file, e.g. "/cv.pdf"
}

interface LandingPageData {
  personal: PersonalInfo;
  socials: SocialLinks;
  photo: string;          // URL to photo
}
```

---

## 8. File Structure

```
mike-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Contact.tsx
│   │   ├── PolaroidFrame.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ThemeProvider.tsx
│   └── lib/
│       └── data.ts
├── public/
│   └── cv.pdf            # To be added later
├── SPEC.md
├── README.md
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 9. Accessibility

- Semantic HTML (`<header>`, `<main>`, `<footer>`)
- Keyboard navigation support
- Color contrast: WCAG AA minimum
- Alt text for images
- Focus states visible

---

## 10. Testing Checklist

- [ ] Light mode renders correctly
- [ ] Dark mode renders correctly
- [ ] Theme toggle works
- [ ] Photo displays in polaroid frame (tilted)
- [ ] Email link is clickable
- [ ] Mobile layout (320px+)
- [ ] Desktop layout (1024px+)
- [ ] Build passes (`npm run build`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vercel deployment succeeds
